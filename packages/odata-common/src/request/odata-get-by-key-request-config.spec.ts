import { v4 as uuid } from 'uuid';
import { CommonEntity } from '../../test/common-entity';
import {
  commonOdataUri,
  commonUriConverter
} from '../../test/common-request-config';
import { testEntityResourcePath } from '../../../../test-resources/test/test-util';
import { ODataGetByKeyRequestConfig } from './odata-get-by-key-request-config';

describe('ODataGetByKeyRequestConfig', () => {
  let config: ODataGetByKeyRequestConfig<CommonEntity>;
  beforeEach(() => {
    config = new ODataGetByKeyRequestConfig(CommonEntity, commonOdataUri);
  });

  it('method is get', () => {
    expect(config.method).toBe('get');
  });

  it('has resourcePath with keys', () => {
    const keyPropGuid = uuid();
    const keyPropString = 'keyProp';
    config.keys = {
      KeyPropertyGuid: keyPropGuid,
      KeyPropertyString: keyPropString
    };
    expect(config.resourcePath()).toEqual(
      testEntityResourcePath(
        keyPropGuid,
        keyPropString,
        commonUriConverter.convertToUriFormat,
        'A_CommonEntity'
      )
    );
  });

  it('has format json', () => {
    expect(config.queryParameters()['$format']).toBe('json');
  });

  it('has selection', () => {
    config.selects = [
      CommonEntity.STRING_PROPERTY,
      CommonEntity.INT_16_PROPERTY
    ];
    expect(Object.keys(config.queryParameters())).toContain('$select');
  });

  it('has custom field selection', () => {
    config.selects = [CommonEntity.customField('SomeCustomField')];
    expect(config.queryParameters()['$select']).toBe('SomeCustomField');
  });
});
