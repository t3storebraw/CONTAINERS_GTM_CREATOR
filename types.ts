
export interface GtmParameter {
  type: string;
  key: string;
  value?: string;
  list?: { type: string; map: GtmParameter[] }[];
  map?: GtmParameter[];
}

export interface GtmTag {
  accountId: string;
  containerId: string;
  tagId: string;
  name: string;
  type: string;
  parameter: GtmParameter[];
  fingerprint: string;
  firingTriggerId?: string[];
  parentFolderId?: string;
}

export interface GtmTrigger {
  accountId: string;
  containerId: string;
  triggerId: string;
  name: string;
  type: string;
  customEventFilter?: {
    type: string;
    parameter: GtmParameter[];
  }[];
  filter?: {
    type: string;
    parameter: GtmParameter[];
  }[];
  fingerprint: string;
  parentFolderId?: string;
}

export interface GtmVariable {
  accountId: string;
  containerId: string;
  variableId: string;
  name: string;
  type: string;
  parameter: GtmParameter[];
  fingerprint: string;
  parentFolderId?: string;
}

export interface GtmContainer {
  path: string;
  accountId: string;
  containerId: string;
  name: string;
  publicId: string;
}
export interface GtmContainerVersion {
  container: GtmContainer;
  tag?: GtmTag[];
  trigger?: GtmTrigger[];
  variable?: GtmVariable[];
}

export interface GtmExport {
  exportFormatVersion: number;
  containerVersion: GtmContainerVersion;
}

export interface AnalysisResult {
    webContainer: GtmExport;
    serverContainer: GtmExport;
}
