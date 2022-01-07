'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TestEntityEndsWithApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TestEntityEndsWith_1 = require('./TestEntityEndsWith');
const TestEntityEndsWithRequestBuilder_1 = require('./TestEntityEndsWithRequestBuilder');
const odata_v2_1 = require('@sap-cloud-sdk/odata-v2');
class TestEntityEndsWithApi {
  constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
    this.entityConstructor = TestEntityEndsWith_1.TestEntityEndsWith;
    this.deSerializers = deSerializers;
  }
  _addNavigationProperties(linkedApis) {
    this.navigationPropertyFields = {};
    return this;
  }
  requestBuilder() {
    return new TestEntityEndsWithRequestBuilder_1.TestEntityEndsWithRequestBuilder(
      this
    );
  }
  entityBuilder() {
    return (0, odata_v2_1.entityBuilder)(this);
  }
  customField(fieldName, isNullable = false) {
    return new odata_v2_1.CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    );
  }
  get schema() {
    const fieldBuilder = new odata_v2_1.FieldBuilder(
      TestEntityEndsWith_1.TestEntityEndsWith,
      this.deSerializers
    );
    return {
      /**
       * Static representation of the [[keyProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      KEY_PROPERTY: fieldBuilder.buildEdmTypeField(
        'KeyProperty',
        'Edm.String',
        false
      ),
      ...this.navigationPropertyFields,
      /**
       *
       * All fields selector.
       */
      ALL_FIELDS: new odata_v2_1.AllFields(
        '*',
        TestEntityEndsWith_1.TestEntityEndsWith
      )
    };
  }
}
exports.TestEntityEndsWithApi = TestEntityEndsWithApi;
//# sourceMappingURL=TestEntityEndsWithApi.js.map
