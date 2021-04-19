import { OpenAPIV3 } from 'openapi-types';
import { $Refs } from '@apidevtools/swagger-parser';
import { OpenApiSchema } from '../openapi-types';
import { resolveObject } from './refs';
import { parseMediaType } from './media-type';
import { SchemaRefMapping } from './parsing-info';

/**
 * Parse the type of the responses in an operation.
 * @param responses Original responses object.
 * @param refs List of cross references that can occur in the document.
 * @param schemaRefMapping Mapping between reference paths and schema names.
 * @returns The parsed response schema.
 */
export function parseResponses(
  responses: OpenAPIV3.ResponsesObject | undefined,
  refs: $Refs,
  schemaRefMapping: SchemaRefMapping
): OpenApiSchema {
  if (responses) {
    const responseSchemas = Object.entries(responses)
      .filter(([statusCode]) => statusCode.startsWith('2'))
      .map(([, response]) => resolveObject(response, refs))
      .map(response => parseMediaType(response, schemaRefMapping))
      // Undefined responses are filtered
      .filter(response => response) as OpenApiSchema[];
    if (responseSchemas.length) {
      if (responseSchemas.length === 1) {
        return responseSchemas[0];
      }
      return {
        anyOf: responseSchemas
      };
    }
  }
  return {
    type: 'any'
  };
}
