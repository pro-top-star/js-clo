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
exports.TestEntityCircularLinkChildRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var odata_common_1 = require('@sap-cloud-sdk/odata-common');
var odata_v2_1 = require('@sap-cloud-sdk/odata-v2');
var TestEntityCircularLinkChild_1 = require('./TestEntityCircularLinkChild');
/**
 * Request builder class for operations supported on the [[TestEntityCircularLinkChild]] entity.
 */
var TestEntityCircularLinkChildRequestBuilder = /** @class */ (function (
  _super
) {
  __extends(TestEntityCircularLinkChildRequestBuilder, _super);
  function TestEntityCircularLinkChildRequestBuilder() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  /**
   * Returns a request builder for retrieving one `TestEntityCircularLinkChild` entity based on its keys.
   * @param keyProperty Key property. See [[TestEntityCircularLinkChild.keyProperty]].
   * @returns A request builder for creating requests to retrieve one `TestEntityCircularLinkChild` entity based on its keys.
   */
  TestEntityCircularLinkChildRequestBuilder.prototype.getByKey = function (
    keyProperty
  ) {
    return new odata_v2_1.GetByKeyRequestBuilder(
      TestEntityCircularLinkChild_1.TestEntityCircularLinkChild,
      { KeyProperty: keyProperty }
    );
  };
  /**
   * Returns a request builder for querying all `TestEntityCircularLinkChild` entities.
   * @returns A request builder for creating requests to retrieve all `TestEntityCircularLinkChild` entities.
   */
  TestEntityCircularLinkChildRequestBuilder.prototype.getAll = function () {
    return new odata_v2_1.GetAllRequestBuilder(
      TestEntityCircularLinkChild_1.TestEntityCircularLinkChild
    );
  };
  /**
   * Returns a request builder for creating a `TestEntityCircularLinkChild` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TestEntityCircularLinkChild`.
   */
  TestEntityCircularLinkChildRequestBuilder.prototype.create = function (
    entity
  ) {
    return new odata_v2_1.CreateRequestBuilder(
      TestEntityCircularLinkChild_1.TestEntityCircularLinkChild,
      entity
    );
  };
  /**
   * Returns a request builder for updating an entity of type `TestEntityCircularLinkChild`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TestEntityCircularLinkChild`.
   */
  TestEntityCircularLinkChildRequestBuilder.prototype.update = function (
    entity
  ) {
    return new odata_v2_1.UpdateRequestBuilder(
      TestEntityCircularLinkChild_1.TestEntityCircularLinkChild,
      entity
    );
  };
  TestEntityCircularLinkChildRequestBuilder.prototype.delete = function (
    keyPropertyOrEntity
  ) {
    return new odata_v2_1.DeleteRequestBuilder(
      TestEntityCircularLinkChild_1.TestEntityCircularLinkChild,
      keyPropertyOrEntity instanceof
      TestEntityCircularLinkChild_1.TestEntityCircularLinkChild
        ? keyPropertyOrEntity
        : { KeyProperty: keyPropertyOrEntity }
    );
  };
  return TestEntityCircularLinkChildRequestBuilder;
})(odata_common_1.RequestBuilder);
exports.TestEntityCircularLinkChildRequestBuilder =
  TestEntityCircularLinkChildRequestBuilder;
//# sourceMappingURL=TestEntityCircularLinkChildRequestBuilder.js.map