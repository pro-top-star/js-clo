import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { getInput, setFailed, info } from '@actions/core';
import { context } from '@actions/github';

const validCommitTypes = ['feat', 'fix', 'chore'];

// Expected format: preamble(topic)!: Title text
async function validateTitle(): Promise<void> {
  const title = context.payload.pull_request.title;
  if (!title.includes(':')) {
    return setFailed(
      'PR title does not adhere to conventional commit guidelines. No preamble found.'
    );
  }
  const [preamble, postamble] = title.split(':');

  await validatePreamble(preamble);
  validatePostamble(postamble);
}

async function validatePreamble(preamble: string): Promise<void> {
  const groups = preamble.match(
    /(?<commitType>\w+)?(\((?<topic>\w+)\))?(?<isBreaking>!)?/
  )?.groups;

  if (!groups) {
    return setFailed(
      'Could not parse preamble. Ensure it follows the conventional commit guidelines.'
    );
  }

  const { commitType, isBreaking } = groups;

  validateCommitType(commitType);
  validateChangesets(preamble, commitType, !!isBreaking);
}

function validateCommitType(commitType) {
  if (!commitType || !validCommitTypes.includes(commitType)) {
    return setFailed(
      `PR title does not adhere to conventional commit guidelines. Commit type found: ${commitType}. Must be one of ${validCommitTypes.join(
        ', '
      )}`
    );
  }
  info('✓ Commit type: OK');
}

function validatePostamble(title: string | undefined): void {
  if (!title || !title.trim().length) {
    return setFailed(
      'PR title does not have a title after conventional commit preamble.'
    );
  }

  if (title[0] !== ' ') {
    return setFailed('Space missing after conventional commit preamble.');
  }

  info('✓ Title: OK');
}

function getAllowedBumps(preamble: string, isBreaking: boolean): string[] {
  if (isBreaking) {
    return ['major'];
  }
  if (preamble === 'feat') {
    return ['minor'];
  }
  if (preamble === 'fix') {
    return ['minor', 'patch'];
  }
  return [];
}

async function hasMatchingChangeset(allowedBumps: string[]): Promise<boolean> {
  if (allowedBumps.length) {
    const changedFilesStr = getInput('changed-files').trim();
    const changedFiles = changedFilesStr ? changedFilesStr.split(' ') : [];
    const fileContents = await Promise.all(
      changedFiles.map(file => readFile(file, 'utf-8'))
    );
    return fileContents.some(fileContent =>
      allowedBumps.some(bump =>
        new RegExp(`'@sap-cloud-sdk\/.*': ${bump}`).test(fileContent)
      )
    );
  }

  return true;
}

async function validateChangesets(
  preamble: string,
  commitType: string,
  isBreaking: boolean
): Promise<void> {
  const allowedBumps = getAllowedBumps(commitType, isBreaking);
  if (!(await hasMatchingChangeset(allowedBumps))) {
    return setFailed(
      `Preamble '${preamble}' requires a changeset file with bump ${allowedBumps
        .map(bump => `'${bump}'`)
        .join(' or ')}.`
    );
  }

  info('✓ Changesets: OK');
}

async function validateBody() {
  const body = context.payload.pull_request.body.replace(/\r\n/g, '\n');
  const template = await readFile(
    resolve('.github', 'PULL_REQUEST_TEMPLATE.md'),
    'utf-8'
  );

  if (!body || body === template) {
    return setFailed('PR must have a description.');
  }
  if (body.includes(template)) {
    return setFailed('PR template must not be ignored.');
  }
  info('✓ Body: OK');
}

try {
  validateTitle();
  validateBody();
} catch (err) {
  setFailed(err);
}
