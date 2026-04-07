import { PackageDescription } from '@/lib/types';

type FieldDescription = {
  fieldVar: any,
  fieldName: string,
}

export function EmitPackage(desc: PackageDescription, emitDefault: boolean): string {
  // define how to transform a field which is a list of strings
  const fieldLists: FieldDescription[] = [
    { fieldVar: desc.programmingLanguage, fieldName: "programmingLanguage" },
    { fieldVar: desc.operatingSystem, fieldName: "operatingSystem" },
    { fieldVar: desc.keywords, fieldName: "keywords" },
  ];
  const stringToString = (str: string): string => {
    return `"${str}" `;
  };
  const fieldListToString = (fieldVar: any, fieldName: string): string => {
    let xresult = "";
    if (fieldVar.length) {
      const result = fieldVar.map(stringToString);
      xresult = `    "${fieldName}": [ ${result}],\n`;
    }
    return xresult;
  }

  // define how to transform a field which is a string
  const fieldstrings: FieldDescription[] = [
    { fieldVar: desc.name, fieldName: "name"},
    { fieldVar: desc.description, fieldName: "description"},
    { fieldVar: desc.version, fieldName: "version"},
    { fieldVar: desc.codeRepository, fieldName: "codeRepository"},
    { fieldVar: desc.contIntegration, fieldName: "contIntegration"},
    { fieldVar: desc.dateCreated, fieldName: "dateCreated"},
    { fieldVar: desc.datePublished, fieldName: "datePublished"},
    { fieldVar: desc.dateModified, fieldName: "dateModified"},
    { fieldVar: desc.downloadUrl, fieldName: "downloadUrl"},
    { fieldVar: desc.issueTracker, fieldName: "issueTracker"},
    { fieldVar: desc.applicationCategory, fieldName: "applicationCategory"},
    { fieldVar: desc.developmentStatus, fieldName: "developmentStatus"},
    { fieldVar: desc.releaseNotes, fieldName: "releaseNotes"},
  ];
  const fieldstringToString = (fieldVar: any, fieldName: string): string => {
    let xresult = "";
    if (fieldVar.length) {
      xresult = `    "${fieldName}": "${fieldVar}",\n`;
    }
    return xresult;
  }

  // define how to transform a specific numpex field which is a string
  const fieldNumpexes: FieldDescription[] = [
    { fieldVar: desc.documentation, fieldName: "documentation"},
    { fieldVar: desc.discussion, fieldName: "discussion"},
    { fieldVar: desc.guixPackage, fieldName: "guix_package"},
    { fieldVar: desc.spackPackage, fieldName: "spack_package"},
  ];
  const fieldNumpexstringToString = (fieldVar: any, fieldName: string): string => {
    let xresult = "";
    if (fieldVar.length) {
      xresult += `      {\n`;
      xresult += `        "@type": "Role",\n`;
      xresult += `        "roleName": "numpex-catalog:${fieldName}",\n`;
      xresult += `        "url": "${fieldVar}"\n`;
      xresult += `      },\n`;
    }
    return xresult;
  }

  // create the codemeta contents
  let xresult = "";
  // First the licence
  if (desc.license) {
    xresult +=`    "license": "https://spdx.org/licenses/${desc.license.variableName}",\n`;
  }
  // Then the fields defined as a string
  fieldstrings.forEach(field => { xresult += fieldstringToString(field.fieldVar, field.fieldName)});
  if (desc.homepage.length) {
    xresult += `    "codemeta:isSourceCodeOf": { "id": "${desc.homepage}" },\n`;
  }
  // Then the fields defined as a list of strings
  fieldLists.forEach(field => { xresult += fieldListToString(field.fieldVar, field.fieldName)});
  // Then the specific numpex fields
  if (desc.discussion.length + desc.documentation.length + desc.guixPackage.length + desc.spackPackage.length) {
    xresult += `    "numpex-catalog:annotatedLink": [\n`;
    fieldNumpexes.forEach(field => { xresult += fieldNumpexstringToString(field.fieldVar, field.fieldName)});
    xresult += `    ]\n`;
  }

  return `{
    "@context": [
	"https://doi.org/10.5063/schema/codemeta-2.0",
	{
	    "numpex-catalog": "https://numpex.github.io/sw-catalog/terms-1.0/index.jsonld#",
	    "Role": "https://schema.org/Role",
	    "roleName": "https://schema.org/roleName",
	    "url": "https://schema.org/url"
	}
    ],
    "@type": "SoftwareSourceCode",
${xresult}
}
`;
}
