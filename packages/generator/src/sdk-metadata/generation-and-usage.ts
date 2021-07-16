import {
  getSdkVersion,
  getLinks,
  apiSpecificUsageText,
  genericUsageText,
  getGenerationSteps,
  Links,
  InstructionWithTextAndHeader,
  usageHeaderText
} from '@sap-cloud-sdk/generator-common';
import type { GenerationAndUsage } from '@sap-cloud-sdk/generator-common';
import { VdmServiceMetadata } from '../vdm-types';
import { genericGetAllCodeSample } from './code-samples/generic-get-all-code-sample';

export async function getGenerationAndUsage(
  service: VdmServiceMetadata
): Promise<GenerationAndUsage> {
  return {
    ...(await getGenericGenerationAndUsage()),
    apiSpecificUsage: getApiSpecificUsage(service)
  };
}

// will be used to generate metadata for failed and unknown case.
export async function getGenericGenerationAndUsage(): Promise<GenerationAndUsage> {
  return {
    genericUsage: getGenericUsage(),
    apiSpecificUsage: undefined,
    links: getODataLinks(),
    generationSteps: getGenerationSteps(
      'npm install -g @sap-cloud-sdk/generator',
      'generate-odata-client --inputDir path/to/service-spec --outputDir path/to/',
      linkGenerationDocumentation
    ),
    generatorVersion: await getSdkVersion(),
    generatorRepositoryLink:
      'https://www.npmjs.com/package/@sap-cloud-sdk/generator'
  };
}

export function getGenericUsage(): InstructionWithTextAndHeader {
  return {
    instructions: genericGetAllCodeSample(
      'BusinessPartner',
      '@sap/cloud-sdk-vdm-business-partner-service'
    ),
    text: genericUsageText,
    header: usageHeaderText
  };
}

export function getApiSpecificUsage(
  service: VdmServiceMetadata
): InstructionWithTextAndHeader {
  if (service.entities.length > 0) {
    const codeSample = genericGetAllCodeSample(
      service.entities[0].className,
      service.npmPackageName
    );
    return {
      instructions: codeSample,
      text: apiSpecificUsageText,
      header: usageHeaderText
    };
  }
  // TODO handle cases if no entity is there in the follow up ticket.
  if (service.functionImports.length > 0) {
    return {
      instructions: '',
      text: apiSpecificUsageText,
      header: usageHeaderText
    };
  }
  return {
    instructions: '',
    text: apiSpecificUsageText,
    header: usageHeaderText
  };
}

export const linkGenerationDocumentation =
  'https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-odata-client';

export function getODataLinks(): Links {
  return getLinks(
    'https://sap.github.io/cloud-sdk/docs/js/features/odata/execute-odata-request',
    'https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-odata-client'
  );
}
