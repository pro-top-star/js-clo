import { join, parse } from 'path';
import { promises } from 'fs';
import {
  codeBlock,
  createLogger,
  ErrorWithCause,
  unixEOL
} from '@sap-cloud-sdk/util';
import prettier, {
  BuiltInParserName,
  Options as PrettierOptions
} from 'prettier';
import { getCopyrightHeader } from '../util';

const { writeFile, readFile } = promises;
const logger = createLogger('create-file');

/**
 * Options for the creation of a file.
 * @internal
 */
export interface CreateFileOptions {
  /**
   * Flag to indicate if the file is overwritten.
   */
  overwrite: boolean;
  /**
   * Path to the prettier config with respect to the process.cwd().
   */
  prettierOptions: PrettierOptions;
  /**
   * Flag to indicate if the file is formatted using prettier - Default is true.
   */
  usePrettier?: boolean;
}

/**
 * @internal
 */
export const defaultPrettierConfig: PrettierOptions = {
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  endOfLine: 'lf'
};

const prettierConfigCache: Record<string, PrettierOptions> = {};

/**
 * Read the prettier config and caches it.
 * @param prettierConfigPath - Path to the prettier config.
 * @returns Config or default.
 * @internal
 */
export async function readPrettierConfig(
  prettierConfigPath: string | undefined
): Promise<PrettierOptions> {
  if (prettierConfigPath && prettierConfigCache[prettierConfigPath]) {
    return prettierConfigCache[prettierConfigPath];
  }

  if (prettierConfigPath) {
    try {
      const config = await readFile(prettierConfigPath, { encoding: 'utf-8' });
      prettierConfigCache[prettierConfigPath] = JSON.parse(config);
      return prettierConfigCache[prettierConfigPath];
    } catch (e) {
      logger.warn(
        `Prettier config file not found: ${prettierConfigPath} - default is used.`
      );
      return defaultPrettierConfig;
    }
  }
  logger.debug('Default prettier config is used.');
  return defaultPrettierConfig;
}

const fileParserMap: Record<string, BuiltInParserName> = {
  ts: 'typescript',
  md: 'markdown',
  json: 'json',
  js: 'espree',
  mdx: 'mdx',
  yml: 'yaml',
  yaml: 'yaml',
  'd.ts': 'typescript',
  'js.map': 'json',
  'd.ts.map': 'json'
};

/**
 * This method considers also double dots like `.map.js`
 * @param fileName
 * @returns The complete file extension containing multiple dots
 * @internal
 */
export function getFileExtension(fileName: string): string {
  return parse(fileName).base.split('.').slice(1).join('.');
}

async function formatWithPrettier(
  fileName: string,
  content: string,
  prettierOptions: PrettierOptions
) {
  const fileExtension = getFileExtension(fileName);
  const parser: BuiltInParserName | undefined = fileParserMap[fileExtension];

  if (parser) {
    return prettier.format(content, { ...prettierOptions, parser });
  }
  logger.info(
    `No prettier-parser configured for file ${fileName} - skip prettier.`
  );
  return content;
}

function addCopyrightHeader(content: string, withCopyright: boolean): string {
  if (!withCopyright) {
    return content;
  }
  return codeBlock`
${getCopyrightHeader()}
${content}
${unixEOL}
`;
}

/**
 * Write a file generated by the SAP Cloud SDK for JavaScript.
 * @param directoryPath - Path of the directory to write to.
 * @param fileName - Name of the file to write
 * @param content - Content to be written to the file. A copyright statement will be added to this.
 * @param overwrite - Whether or not existing files should be overwritten.
 * @param withCopyright - Whether the generated file contains the copyright information.
 * @internal
 */
export async function createFile(
  directoryPath: string,
  fileName: string,
  content: string,
  options: CreateFileOptions
): Promise<void> {
  const { overwrite, prettierOptions, usePrettier = true } = options;
  try {
    // Our copyright header is only valid for source files i.e. typescript.
    const withCopyright =
      getFileExtension(fileName) === 'ts' ||
      getFileExtension(fileName) === 'd.ts';

    let adjusted = addCopyrightHeader(content, withCopyright);
    if (usePrettier) {
      adjusted = await formatWithPrettier(fileName, adjusted, prettierOptions);
    }

    return await writeFile(join(directoryPath, fileName), adjusted, {
      encoding: 'utf8',
      flag: overwrite ? 'w' : 'wx'
    });
  } catch (err) {
    const recommendation =
      err.code === 'EEXIST' && !overwrite
        ? ' File already exists. If you want to allow overwriting files, enable the `overwrite` flag.'
        : '';
    throw new ErrorWithCause(
      `Could not write file "${fileName}".${recommendation}`,
      err
    );
  }
}
