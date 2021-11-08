'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
exports.TestEntityEndsWithSomethingElseRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var odata_common_1 = require('@sap-cloud-sdk/odata-common');
var odata_v2_1 = require('@sap-cloud-sdk/odata-v2');
var TestEntityEndsWithSomethingElse_1 = require('./TestEntityEndsWithSomethingElse');
/**
 * Request builder class for operations supported on the [[TestEntityEndsWithSomethingElse]] entity.
 */
var TestEntityEndsWithSomethingElseRequestBuilder = /** @class */ (function (
  _super
) {
  __extends(TestEntityEndsWithSomethingElseRequestBuilder, _super);
  function TestEntityEndsWithSomethingElseRequestBuilder() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  /**
   * Returns a request builder for retrieving one `TestEntityEndsWithSomethingElse` entity based on its keys.
   * @param keyProperty Key property. See [[TestEntityEndsWithSomethingElse.keyProperty]].
   * @returns A request builder for creating requests to retrieve one `TestEntityEndsWithSomethingElse` entity based on its keys.
   */
  TestEntityEndsWithSomethingElseRequestBuilder.prototype.getByKey = function (
    keyProperty
  ) {
    return new odata_v2_1.GetByKeyRequestBuilder(
      TestEntityEndsWithSomethingElse_1.TestEntityEndsWithSomethingElse,
      { KeyProperty: keyProperty }
    );
  };
  /**
   * Returns a request builder for querying all `TestEntityEndsWithSomethingElse` entities.
   * @returns A request builder for creating requests to retrieve all `TestEntityEndsWithSomethingElse` entities.
   */
  TestEntityEndsWithSomethingElseRequestBuilder.prototype.getAll = function () {
    return new odata_v2_1.GetAllRequestBuilder(
      TestEntityEndsWithSomethingElse_1.TestEntityEndsWithSomethingElse
    );
  };
  /**
   * Returns a request builder for creating a `TestEntityEndsWithSomethingElse` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TestEntityEndsWithSomethingElse`.
   */
  TestEntityEndsWithSomethingElseRequestBuilder.prototype.create = function (
    entity
  ) {
    return new odata_v2_1.CreateRequestBuilder(
      TestEntityEndsWithSomethingElse_1.TestEntityEndsWithSomethingElse,
      entity
    );
  };
  /**
   * Returns a request builder for updating an entity of type `TestEntityEndsWithSomethingElse`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TestEntityEndsWithSomethingElse`.
   */
  TestEntityEndsWithSomethingElseRequestBuilder.prototype.update = function (
    entity
  ) {
    return new odata_v2_1.UpdateRequestBuilder(
      TestEntityEndsWithSomethingElse_1.TestEntityEndsWithSomethingElse,
      entity
    );
  };
  TestEntityEndsWithSomethingElseRequestBuilder.prototype.delete = function (
    keyPropertyOrEntity
  ) {
    return new odata_v2_1.DeleteRequestBuilder(
      TestEntityEndsWithSomethingElse_1.TestEntityEndsWithSomethingElse,
      keyPropertyOrEntity instanceof
      TestEntityEndsWithSomethingElse_1.TestEntityEndsWithSomethingElse
        ? keyPropertyOrEntity
        : { KeyProperty: keyPropertyOrEntity }
    );
  };
  return TestEntityEndsWithSomethingElseRequestBuilder;
})(odata_common_1.RequestBuilder);
exports.TestEntityEndsWithSomethingElseRequestBuilder =
  TestEntityEndsWithSomethingElseRequestBuilder;
//# sourceMappingURL=TestEntityEndsWithSomethingElseRequestBuilder.js.map