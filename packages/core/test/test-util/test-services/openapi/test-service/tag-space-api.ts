/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '../../../../../src';
import { TagSpaceApi } from './openapi/api';


export const TestServiceTagSpaceApi = {
  tagWithSpace: () => new OpenApiRequestBuilder<TagSpaceApi, 'tagWithSpace'>(
    TagSpaceApi,
    'tagWithSpace'
  )
};
