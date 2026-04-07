import { DefaultLicense } from '@/lib/licenses';
import { PackageDescription } from "@/lib/types";

export const EmptyPackage: PackageDescription = {
  name: '',
  version: '',
  homepage: '',
  description: '',
  license: DefaultLicense,
  codeRepository: '',
  contIntegration: '',
  programmingLanguage: [],
  operatingSystem: [],
  keywords: [],
  dateCreated: '',
  datePublished: '',
  dateModified: '',
  downloadUrl: '',
  issueTracker: '',
  applicationCategory: '',
  developmentStatus: '',
  releaseNotes: '',
  documentation: '',
  discussion: '',
  spackPackage: '',
  guixPackage: ''
};

export const DefaultPackage: PackageDescription = {
  name: "StarPU",
  version: "1.4.12",
  homepage: "https://starpu.gitlabpages.inria.fr",
  description: "StarPU is a runtime library ...",
  license: DefaultLicense,
  codeRepository: "https://gitlab.inria.fr/starpu/starpu.git",
  contIntegration: "https://ci.inria.fr/starpu/",
  programmingLanguage: ["C++", "Python"],
  operatingSystem: ["Linux", "MacOS"],
  keywords: ["HPC"],
  dateCreated: "2009-03-01",
  datePublished: "2009-04-02",
  dateModified: "2025-12-04",
  downloadUrl: "https://files.inria.fr/starpu/starpu-1.4.11/starpu-1.4.11.tar.gz",
  issueTracker: "https://github.com/starpu-runtime/starpu/issues",
  applicationCategory: "HPC",
  developmentStatus: "active",
  releaseNotes: "https://files.inria.fr/starpu/starpu-1.4.11/log.txt",
  documentation: "https://starpu.gitlabpages.inria.fr/doc.html",
  discussion: "https://discord.gg/vKVJsuHB8U",
  guixPackage: "https://gitlab.inria.fr/guix-hpc/guix-hpc/-/blob/master/inria/storm.scm",
  spackPackage: "https://github.com/spack/spack-packages/tree/develop/repos/spack_repo/builtin/packages/starpu/package.py"
};
