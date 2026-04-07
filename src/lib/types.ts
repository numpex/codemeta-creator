export type License = {
  variableName: string,
  name: string,
  uri: string
}

export type stringList = Array<string>;

export type PackageDescription = {
  name: string,
  version: string,
  description: string,
  homepage: string,
  codeRepository: string,
  contIntegration: string,
  dateCreated: string,
  datePublished: string,
  dateModified: string,
  downloadUrl: string,
  issueTracker: string,
  applicationCategory: string,
  developmentStatus: string,
  releaseNotes: string,
  license: License,
  programmingLanguage: stringList,
  operatingSystem: stringList,
  keywords: stringList,
  documentation: string,
  discussion: string,
  guixPackage: string,
  spackPackage: string,
}

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
