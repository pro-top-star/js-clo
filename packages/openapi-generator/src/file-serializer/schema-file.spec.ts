import { schemaDocumentation, schemaFile } from './schema-file';
import { schemaPropertyDocumentation } from './schema';
describe('schemaFile', () => {
  it('serializes schema file for schema', () => {
    expect(
      schemaFile({
        name: 'MySchema',
        schema: {
          properties: [
            {
              name: 'string-property',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ]
        }
      })
    ).toMatchInlineSnapshot(`
      "    
          /**
           * Representation of the 'MySchema' schema.
           */
          export type MySchema = {
            'string-property': string;
          };"
    `);
  });

  it('serializes schema file for schema including references', () => {
    expect(
      schemaFile({
        name: 'MySchema',
        schema: {
          properties: [
            {
              name: 'otherSchema1',
              required: true,
              schema: {
                $ref: '#/components/schema/OtherSchema1',
                schemaName: 'OtherSchema1'
              }
            },
            {
              name: 'otherSchema2',
              description: 'Description other Schema 2',
              required: true,
              schema: {
                $ref: '#/components/schema/OtherSchema2',
                schemaName: 'OtherSchema2'
              }
            }
          ]
        }
      })
    ).toMatchInlineSnapshot(`
      "    import type { OtherSchema1 } from './other-schema-1';
          import type { OtherSchema2 } from './other-schema-2';
          /**
           * Representation of the 'MySchema' schema.
           */
          export type MySchema = {
            'otherSchema1': OtherSchema1;
            /**
             * Description other Schema 2
             */
            'otherSchema2': OtherSchema2;
          };"
    `);
  });

  it('serializes schema file for schema including not schema', () => {
    expect(
      schemaFile({
        name: 'MySchema',
        schema: {
          items: { not: { type: 'integer' } }
        }
      })
    ).toMatchInlineSnapshot(`
      "    import { Except } from '@sap-cloud-sdk/core';
          /**
           * Representation of the 'MySchema' schema.
           */
          export type MySchema = Except<any, number>[];"
    `);
  });

  it('serializes schema file without imports for schema including only self reference', () => {
    expect(
      schemaFile({
        name: 'MySchema',
        schema: {
          properties: [
            {
              name: 'property',
              required: false,
              schema: {
                $ref: '#/components/schema/MySchema',
                schemaName: 'MySchema'
              }
            }
          ]
        }
      })
    ).toMatchInlineSnapshot(`
      "    
          /**
           * Representation of the 'MySchema' schema.
           */
          export type MySchema = {
            'property'?: MySchema;
          };"
    `);
  });

  it('serializes simple schema file for schema with description', () => {
    expect(
      schemaFile({
        name: 'MySchema',
        schema: {
          properties: [
            {
              name: 'string-property',
              description: 'My description',
              required: true,
              schema: {
                type: 'string'
              }
            },
            {
              name: 'string-property-no-description',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ]
        }
      })
    ).toMatchInlineSnapshot(`
      "    
          /**
           * Representation of the 'MySchema' schema.
           */
          export type MySchema = {
            /**
             * My description
             */
            'string-property': string;
            'string-property-no-description': string;
          };"
    `);
  });

  it('creates schema documentation', () => {
    expect(schemaDocumentation({ name: 'mySchema' } as any))
      .toMatchInlineSnapshot(`
      "/**
       * Representation of the 'mySchema' schema.
       */"
    `);
  });

  it('uses the schema description documentation if present', () => {
    expect(
      schemaDocumentation({
        name: 'mySchema',
        description: 'My schmema description.'
      } as any)
    ).toMatch(/My schmema description/);
  });

  it('creates a schema property documentation', () => {
    expect(
      schemaPropertyDocumentation({
        description: 'My property Description.'
      } as any)
    ).toMatchInlineSnapshot(`
      "/**
       * My property Description.
       */"
    `);
  });
});
