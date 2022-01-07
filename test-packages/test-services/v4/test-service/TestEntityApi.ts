/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TestEntity } from './TestEntity';
import { TestEntityRequestBuilder } from './TestEntityRequestBuilder';
import { TestEntityMultiLink } from './TestEntityMultiLink';
import { TestEntityMultiLinkApi } from './TestEntityMultiLinkApi';
import { TestEntitySingleLink } from './TestEntitySingleLink';
import { TestEntitySingleLinkApi } from './TestEntitySingleLinkApi';
import { TestComplexType, TestComplexTypeField } from './TestComplexType';
import { TestEnumType } from './TestEnumType';
import { TestEnumTypeInt64 } from './TestEnumTypeInt64';
import { TestEnumTypeWithOneMember } from './TestEnumTypeWithOneMember';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  mergeDefaultDeSerializersWith,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  Time,
  EdmTypeField,
  OrderableEdmTypeField,
  CollectionField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
export class TestEntityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TestEntity<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property [[toMultiLink]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_MULTI_LINK: OneToManyLink<
      TestEntity<DeSerializersT>,
      DeSerializersT,
      TestEntityMultiLink<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property [[toOtherMultiLink]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_OTHER_MULTI_LINK: OneToManyLink<
      TestEntity<DeSerializersT>,
      DeSerializersT,
      TestEntityMultiLink<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property [[toSingleLink]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SINGLE_LINK: OneToOneLink<
      TestEntity<DeSerializersT>,
      DeSerializersT,
      TestEntitySingleLink<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TestEntityMultiLinkApi<DeSerializersT>,
      TestEntityMultiLinkApi<DeSerializersT>,
      TestEntitySingleLinkApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_MULTI_LINK: new OneToManyLink('to_MultiLink', this, linkedApis[0]),
      TO_OTHER_MULTI_LINK: new OneToManyLink(
        'to_OtherMultiLink',
        this,
        linkedApis[1]
      ),
      TO_SINGLE_LINK: new OneToOneLink('to_SingleLink', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = TestEntity;

  requestBuilder(): TestEntityRequestBuilder<DeSerializersT> {
    return new TestEntityRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TestEntity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TestEntity<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  get schema() {
    const fieldBuilder = new FieldBuilder(TestEntity, this.deSerializers);
    return {
      /**
       * Static representation of the [[keyPropertyGuid]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      KEY_PROPERTY_GUID: fieldBuilder.buildEdmTypeField(
        'KeyPropertyGuid',
        'Edm.Guid',
        false
      ),
      /**
       * Static representation of the [[keyPropertyString]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      KEY_PROPERTY_STRING: fieldBuilder.buildEdmTypeField(
        'KeyPropertyString',
        'Edm.String',
        false
      ),
      /**
       * Static representation of the [[stringProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      STRING_PROPERTY: fieldBuilder.buildEdmTypeField(
        'StringProperty',
        'Edm.String',
        true
      ),
      /**
       * Static representation of the [[booleanProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      BOOLEAN_PROPERTY: fieldBuilder.buildEdmTypeField(
        'BooleanProperty',
        'Edm.Boolean',
        true
      ),
      /**
       * Static representation of the [[guidProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      GUID_PROPERTY: fieldBuilder.buildEdmTypeField(
        'GuidProperty',
        'Edm.Guid',
        true
      ),
      /**
       * Static representation of the [[int16Property]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      INT_16_PROPERTY: fieldBuilder.buildEdmTypeField(
        'Int16Property',
        'Edm.Int16',
        true
      ),
      /**
       * Static representation of the [[int32Property]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      INT_32_PROPERTY: fieldBuilder.buildEdmTypeField(
        'Int32Property',
        'Edm.Int32',
        true
      ),
      /**
       * Static representation of the [[int64Property]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      INT_64_PROPERTY: fieldBuilder.buildEdmTypeField(
        'Int64Property',
        'Edm.Int64',
        true
      ),
      /**
       * Static representation of the [[decimalProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      DECIMAL_PROPERTY: fieldBuilder.buildEdmTypeField(
        'DecimalProperty',
        'Edm.Decimal',
        true
      ),
      /**
       * Static representation of the [[singleProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      SINGLE_PROPERTY: fieldBuilder.buildEdmTypeField(
        'SingleProperty',
        'Edm.Single',
        true
      ),
      /**
       * Static representation of the [[doubleProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      DOUBLE_PROPERTY: fieldBuilder.buildEdmTypeField(
        'DoubleProperty',
        'Edm.Double',
        true
      ),
      /**
       * Static representation of the [[floatProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      FLOAT_PROPERTY: fieldBuilder.buildEdmTypeField(
        'FloatProperty',
        'Edm.Float',
        true
      ),
      /**
       * Static representation of the [[timeOfDayProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      TIME_OF_DAY_PROPERTY: fieldBuilder.buildEdmTypeField(
        'TimeOfDayProperty',
        'Edm.TimeOfDay',
        true
      ),
      /**
       * Static representation of the [[dateProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      DATE_PROPERTY: fieldBuilder.buildEdmTypeField(
        'DateProperty',
        'Edm.Date',
        true
      ),
      /**
       * Static representation of the [[dateTimeOffSetProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      DATE_TIME_OFF_SET_PROPERTY: fieldBuilder.buildEdmTypeField(
        'DateTimeOffSetProperty',
        'Edm.DateTimeOffset',
        true
      ),
      /**
       * Static representation of the [[durationProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      DURATION_PROPERTY: fieldBuilder.buildEdmTypeField(
        'DurationProperty',
        'Edm.Duration',
        true
      ),
      /**
       * Static representation of the [[byteProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      BYTE_PROPERTY: fieldBuilder.buildEdmTypeField(
        'ByteProperty',
        'Edm.Byte',
        true
      ),
      /**
       * Static representation of the [[sByteProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      S_BYTE_PROPERTY: fieldBuilder.buildEdmTypeField(
        'SByteProperty',
        'Edm.SByte',
        true
      ),
      /**
       * Static representation of the [[geographyPointProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      GEOGRAPHY_POINT_PROPERTY: fieldBuilder.buildEdmTypeField(
        'GeographyPointProperty',
        'Edm.Any',
        true
      ),
      /**
       * Static representation of the [[somethingTheSdkDoesNotSupport]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      SOMETHING_THE_SDK_DOES_NOT_SUPPORT: fieldBuilder.buildEdmTypeField(
        'SomethingTheSDKDoesNotSupport',
        'Edm.Any',
        true
      ),
      /**
       * Static representation of the [[collectionProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      COLLECTION_PROPERTY: fieldBuilder.buildCollectionField(
        'CollectionProperty',
        'Edm.String',
        true
      ),
      /**
       * Static representation of the [[complexTypeProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      COMPLEX_TYPE_PROPERTY: fieldBuilder.buildComplexTypeField(
        'ComplexTypeProperty',
        TestComplexTypeField,
        true
      ),
      /**
       * Static representation of the [[complexTypeCollectionProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      COMPLEX_TYPE_COLLECTION_PROPERTY: fieldBuilder.buildCollectionField(
        'ComplexTypeCollectionProperty',
        TestComplexType,
        true
      ),
      /**
       * Static representation of the [[enumProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      ENUM_PROPERTY: fieldBuilder.buildEnumField(
        'EnumProperty',
        TestEnumType,
        true
      ),
      /**
       * Static representation of the [[enumPropertyInt64]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      ENUM_PROPERTY_INT_64: fieldBuilder.buildEnumField(
        'EnumPropertyInt64',
        TestEnumTypeInt64,
        true
      ),
      /**
       * Static representation of the [[enumPropertyWithOneMember]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      ENUM_PROPERTY_WITH_ONE_MEMBER: fieldBuilder.buildEnumField(
        'EnumPropertyWithOneMember',
        TestEnumTypeWithOneMember,
        true
      ),
      /**
       * Static representation of the [[enumCollectionProperty]] property for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      ENUM_COLLECTION_PROPERTY: fieldBuilder.buildCollectionField(
        'EnumCollectionProperty',
        TestEnumType,
        true
      ),
      ...this.navigationPropertyFields,
      /**
       *
       * All fields selector.
       */
      ALL_FIELDS: new AllFields('*', TestEntity)
    };
  }
}
