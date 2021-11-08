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
exports.TestEntityLvl2MultiLinkRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var odata_common_1 = require('@sap-cloud-sdk/odata-common');
var odata_v2_1 = require('@sap-cloud-sdk/odata-v2');
var TestEntityLvl2MultiLink_1 = require('./TestEntityLvl2MultiLink');
/**
 * Request builder class for operations supported on the [[TestEntityLvl2MultiLink]] entity.
 */
var TestEntityLvl2MultiLinkRequestBuilder = /** @class */ (function (_super) {
  __extends(TestEntityLvl2MultiLinkRequestBuilder, _super);
  function TestEntityLvl2MultiLinkRequestBuilder() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  /**
   * Returns a request builder for retrieving one `TestEntityLvl2MultiLink` entity based on its keys.
   * @param keyProperty Key property. See [[TestEntityLvl2MultiLink.keyProperty]].
   * @returns A request builder for creating requests to retrieve one `TestEntityLvl2MultiLink` entity based on its keys.
   */
  TestEntityLvl2MultiLinkRequestBuilder.prototype.getByKey = function (
    keyProperty
  ) {
    return new odata_v2_1.GetByKeyRequestBuilder(
      TestEntityLvl2MultiLink_1.TestEntityLvl2MultiLink,
      { KeyProperty: keyProperty }
    );
  };
  /**
   * Returns a request builder for querying all `TestEntityLvl2MultiLink` entities.
   * @returns A request builder for creating requests to retrieve all `TestEntityLvl2MultiLink` entities.
   */
  TestEntityLvl2MultiLinkRequestBuilder.prototype.getAll = function () {
    return new odata_v2_1.GetAllRequestBuilder(
      TestEntityLvl2MultiLink_1.TestEntityLvl2MultiLink
    );
  };
  /**
   * Returns a request builder for creating a `TestEntityLvl2MultiLink` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TestEntityLvl2MultiLink`.
   */
  TestEntityLvl2MultiLinkRequestBuilder.prototype.create = function (entity) {
    return new odata_v2_1.CreateRequestBuilder(
      TestEntityLvl2MultiLink_1.TestEntityLvl2MultiLink,
      entity
    );
  };
  /**
   * Returns a request builder for updating an entity of type `TestEntityLvl2MultiLink`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TestEntityLvl2MultiLink`.
   */
  TestEntityLvl2MultiLinkRequestBuilder.prototype.update = function (entity) {
    return new odata_v2_1.UpdateRequestBuilder(
      TestEntityLvl2MultiLink_1.TestEntityLvl2MultiLink,
      entity
    );
  };
  TestEntityLvl2MultiLinkRequestBuilder.prototype.delete = function (
    keyPropertyOrEntity
  ) {
    return new odata_v2_1.DeleteRequestBuilder(
      TestEntityLvl2MultiLink_1.TestEntityLvl2MultiLink,
      keyPropertyOrEntity instanceof
      TestEntityLvl2MultiLink_1.TestEntityLvl2MultiLink
        ? keyPropertyOrEntity
        : { KeyProperty: keyPropertyOrEntity }
    );
  };
  return TestEntityLvl2MultiLinkRequestBuilder;
})(odata_common_1.RequestBuilder);
exports.TestEntityLvl2MultiLinkRequestBuilder =
  TestEntityLvl2MultiLinkRequestBuilder;
//# sourceMappingURL=TestEntityLvl2MultiLinkRequestBuilder.js.map