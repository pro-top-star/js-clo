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
exports.TestEntitySingleLinkRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var odata_common_1 = require('@sap-cloud-sdk/odata-common');
var odata_v2_1 = require('@sap-cloud-sdk/odata-v2');
var TestEntitySingleLink_1 = require('./TestEntitySingleLink');
/**
 * Request builder class for operations supported on the [[TestEntitySingleLink]] entity.
 */
var TestEntitySingleLinkRequestBuilder = /** @class */ (function (_super) {
  __extends(TestEntitySingleLinkRequestBuilder, _super);
  function TestEntitySingleLinkRequestBuilder() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  /**
   * Returns a request builder for retrieving one `TestEntitySingleLink` entity based on its keys.
   * @param keyProperty Key property. See [[TestEntitySingleLink.keyProperty]].
   * @returns A request builder for creating requests to retrieve one `TestEntitySingleLink` entity based on its keys.
   */
  TestEntitySingleLinkRequestBuilder.prototype.getByKey = function (
    keyProperty
  ) {
    return new odata_v2_1.GetByKeyRequestBuilder(
      TestEntitySingleLink_1.TestEntitySingleLink,
      { KeyProperty: keyProperty }
    );
  };
  /**
   * Returns a request builder for querying all `TestEntitySingleLink` entities.
   * @returns A request builder for creating requests to retrieve all `TestEntitySingleLink` entities.
   */
  TestEntitySingleLinkRequestBuilder.prototype.getAll = function () {
    return new odata_v2_1.GetAllRequestBuilder(
      TestEntitySingleLink_1.TestEntitySingleLink
    );
  };
  /**
   * Returns a request builder for creating a `TestEntitySingleLink` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TestEntitySingleLink`.
   */
  TestEntitySingleLinkRequestBuilder.prototype.create = function (entity) {
    return new odata_v2_1.CreateRequestBuilder(
      TestEntitySingleLink_1.TestEntitySingleLink,
      entity
    );
  };
  /**
   * Returns a request builder for updating an entity of type `TestEntitySingleLink`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TestEntitySingleLink`.
   */
  TestEntitySingleLinkRequestBuilder.prototype.update = function (entity) {
    return new odata_v2_1.UpdateRequestBuilder(
      TestEntitySingleLink_1.TestEntitySingleLink,
      entity
    );
  };
  TestEntitySingleLinkRequestBuilder.prototype.delete = function (
    keyPropertyOrEntity
  ) {
    return new odata_v2_1.DeleteRequestBuilder(
      TestEntitySingleLink_1.TestEntitySingleLink,
      keyPropertyOrEntity instanceof TestEntitySingleLink_1.TestEntitySingleLink
        ? keyPropertyOrEntity
        : { KeyProperty: keyPropertyOrEntity }
    );
  };
  return TestEntitySingleLinkRequestBuilder;
})(odata_common_1.RequestBuilder);
exports.TestEntitySingleLinkRequestBuilder = TestEntitySingleLinkRequestBuilder;
//# sourceMappingURL=TestEntitySingleLinkRequestBuilder.js.map