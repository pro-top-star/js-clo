import { OpenAPIV3 } from 'openapi-types';
import { $Refs } from '@apidevtools/swagger-parser';
import { OpenApiRequestBody } from '../openapi-types';
import { resolveObject } from './refs';
import { parseMediaType } from './media-type';
import { SchemaRefMapping } from './parsing-info';

/**
 * Parse the request body.
 * @param requestBody Original request body to parse.
 * @param refs List of cross references that can occur in the document.
 * @param schemaRefMapping Mapping between references and parsed names of the schemas.
 * @returns The parsed request body schema.
 */
export function parseRequestBody(
  requestBody:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.RequestBodyObject
    | undefined,
  refs: $Refs,
  schemaRefMapping: SchemaRefMapping
): OpenApiRequestBody | undefined {
  const resolvedRequestBody = resolveObject(requestBody, refs);
  const schema = parseMediaType(resolvedRequestBody, schemaRefMapping);
  if (schema && resolvedRequestBody) {
    return {
      required: !!resolvedRequestBody.required,
      description: resolvedRequestBody.description,
      schema
    };
  }
}
