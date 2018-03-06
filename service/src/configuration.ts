// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

export interface Configuration {
  id: string;

  schemaVersion: string;

  labels?: {[key: string]: string};

  content?: any;

  contentType?: ConfigurationContent;

  targetCondition?: string;

  createdTimeUtc?: string;

  lastUpdatedTimeUtc?: string;

  priority?: number;

  statistics?: {[key: string]: string};

  etag?: string;
}

export interface ConfigurationContent {
  moduleContent: {[key: string]: TwinContent};
}

export interface TwinContent {
  [desiredPropertiesPath: string]: any;
}
