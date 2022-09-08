import { ClientCredentialsResponse } from './xsuaa-service-types';
import { Cache } from './cache';
import { clientCredentialsTokenCache } from './client-credentials-token-cache';
import {
  AuthenticationType,
  Destination,
  destinationCache
} from './destination';

const destinationOne: Destination = {
  url: 'https://destination1.example',
  name: 'destToCache1',
  proxyType: 'Internet',
  username: 'name',
  password: 'pwd',
  authentication: 'BasicAuthentication' as AuthenticationType,
  authTokens: [],
  sapClient: null,
  originalProperties: {},
  isTrustingAllCertificates: false
};

// Cache with expiration time
const cacheOne = new Cache<Destination>(300000);

// Cache without expiration time
const cacheTwo = new Cache<ClientCredentialsResponse>();

describe('Cache', () => {
  afterEach(async () => {
    cacheOne.clear();
    cacheTwo.clear();
    await destinationCache.clear();
    clientCredentialsTokenCache.clear();
  });

  it('non-existing item in cache should return undefined', async () => {
    expect(cacheOne.get('notExistingDest')).toBeUndefined();
  });

  it('item should be retrieved correctly', () => {
    cacheOne.set('one', { entry: destinationOne });
    const actual = cacheOne.get('one');
    expect(actual).toEqual(destinationOne);
  });

  it('retrieving expired item should return undefined', () => {
    jest.useFakeTimers('modern');
    cacheOne.set('one', { entry: destinationOne });

    const minutesToExpire = 6;
    // Shift time to expire the set item
    jest.advanceTimersByTime(60000 * minutesToExpire);
    expect(cacheOne.get('one')).toBeUndefined();
  });

  it('clear() should remove all entries in cache', () => {
    cacheOne.set('one', { entry: destinationOne });
    cacheOne.clear();
    expect(cacheOne.hasKey('one')).toBeFalsy();
  });

  it('should return the item when its expiration time is undefined', () => {
    const dummyToken = {
      access_token: '1234567890',
      token_type: 'UserToken',
      expires_in: 12312343414,
      jti: '',
      scope: ''
    };
    cacheTwo.set('someToken', { entry: dummyToken });
    expect(cacheTwo.get('someToken')).toEqual(dummyToken);
  });

  it('custom expiration time should be set correctly', () => {
    const dummyToken = {
      access_token: '1234567890',
      token_type: 'UserToken',
      expires_in: 12312343414,
      jti: '',
      scope: ''
    };
    cacheTwo.set('expiredToken', { entry: dummyToken, expires: 10 });
    cacheTwo.set('validToken', {
      entry: dummyToken,
      expires: Date.now() + 5000
    });
    expect(cacheTwo.get('expiredToken')).toBeUndefined();
    expect(cacheTwo.get('validToken')).toBe(dummyToken);
  });

  it('should not hit cache for undefined key', () => {
    cacheOne.set(undefined, { entry: {} as Destination });
    const actual = cacheOne.get(undefined);
    expect(actual).toBeUndefined();
  });
});
