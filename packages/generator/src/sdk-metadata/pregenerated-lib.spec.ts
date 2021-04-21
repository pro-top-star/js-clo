import { resolve } from 'path';
import nock = require('nock');
import { VdmServiceMetadata } from '../vdm-types';
import { parseService } from '../service-generator';
import { createOptions } from '../../test/test-util/create-generator-options';
import { GlobalNameFormatter } from '../global-name-formatter';
import { oDataServiceSpecs } from '../../../../test-resources/odata-service-specs';
import { GeneratorOptions } from '../generator-options';
import {
  getInstallationSnippet,
  getRepositoryLink,
  getVersionForClient,
  getServiceDescription,
  getTimeStamp,
  isPublishedNpmPackage,
  getPregeneratedLibrary
} from './pregenerated-lib';

describe('pregenerated-lib', () => {
  const service: VdmServiceMetadata = getTestService();

  it('returns installation snipped', () => {
    expect(getInstallationSnippet(service).instructions).toBe(
      'npm i @sap/cloud-sdk-vdm-test-service:latest'
    );
  });

  it('returns repository link', () => {
    expect(getRepositoryLink(service)).toBe(
      'https://www.npmjs.com/package/@sap/cloud-sdk-vdm-test-service'
    );
  });

  it('returns version from generator options or generator version', () => {
    expect(
      getVersionForClient({ versionInPackageJson: '123' } as GeneratorOptions)
    ).toBe('123');
    expect(getVersionForClient({} as GeneratorOptions)).toMatch(
      /\d+\.\d+\.\d+/
    );
  });

  it('returns description of the service', () => {
    expect(getServiceDescription(service, createOptions())).toMatchSnapshot();
  });

  it('returns a timestamp in unix format', () => {
    expect(getTimeStamp()).toMatch(/\/Date\(\d{13,13}\)\//);
  });

  it('checks if there is a client published', async () => {
    nock('http://registry.npmjs.org/').head(/.*/).reply(200);
    expect(
      await isPublishedNpmPackage({
        npmPackageName: '@sap/cloud-sdk-core'
      } as VdmServiceMetadata)
    ).toBe(true);
    expect(
      await isPublishedNpmPackage({
        npmPackageName: '@sap/non-existing-service'
      } as VdmServiceMetadata)
    ).toBe(false);
  }, 30000);

  it('returns pregenerated lib information for existing service', async () => {
    nock('http://registry.npmjs.org/').head(/.*/).reply(200);
    const result = await getPregeneratedLibrary(
      getTestService(),
      createOptions()
    );
    // for an existing service like the business partner it should not be undefined the parts are tested independently
    expect(result).toBeDefined();
  });

  it('returns undefined for noon existing service', async () => {
    nock('http://registry.npmjs.org/').head(/.*/).reply(404);
    const result = await getPregeneratedLibrary(
      getTestService(),
      createOptions()
    );
    // for an existing service like the business partner it should not be undefined the parts are tested independently
    expect(result).toBeUndefined();
  });
});

export function getTestService(npmPackageName?: string): VdmServiceMetadata {
  return parseService(
    {
      edmxPath: resolve(
        oDataServiceSpecs,
        'v2',
        'API_TEST_SRV/API_TEST_SRV.edmx'
      )
    },
    createOptions(),
    {},
    new GlobalNameFormatter({
      API_TEST_SRV: {
        directoryName: 'test-service',
        servicePath: '/sap/opu/odata/sap/API_TEST_SERVICE_SRV;v=0002',
        npmPackageName: npmPackageName || '@sap/cloud-sdk-vdm-test-service'
      }
    })
  );
}
