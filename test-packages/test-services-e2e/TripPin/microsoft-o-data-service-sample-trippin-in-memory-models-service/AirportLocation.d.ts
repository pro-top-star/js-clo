import { City, CityField } from './City';
import { Entity } from '@sap-cloud-sdk/odata-v4';
import {
  ComplexTypeField,
  ConstructorOrField,
  EdmTypeField,
  FieldOptions,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-common/internal';
/**
 * AirportLocation
 */
export interface AirportLocation {
  /**
   * Loc.
   */
  loc: any;
  /**
   * Address.
   */
  address: string;
  /**
   * City.
   */
  city: City;
}
/**
 * AirportLocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AirportLocationField<
  EntityT extends Entity,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<EntityT, AirportLocation, NullableT, SelectableT> {
  private _fieldBuilder;
  /**
   * Representation of the [[AirportLocation.loc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  loc: EdmTypeField<EntityT, 'Edm.Any', false, false>;
  /**
   * Representation of the [[AirportLocation.address]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: EdmTypeField<EntityT, 'Edm.String', false, false>;
  /**
   * Representation of the [[AirportLocation.city]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: CityField<EntityT, false, false>;
  /**
   * Creates an instance of AirportLocationField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  );
}
export declare namespace AirportLocation {
  /**
   * Metadata information on all properties of the `AirportLocation` complex type.
   */
  const _propertyMetadata: PropertyMetadata<AirportLocation>[];
}
//# sourceMappingURL=AirportLocation.d.ts.map
