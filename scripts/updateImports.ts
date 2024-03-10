import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

project.resolveSourceFileDependencies();

function isAbsoluteImport(value: string) {
  const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

  return layers.some((layer) => value.startsWith(layer));
}

project.getSourceFiles().forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();

    if (isAbsoluteImport(moduleSpecifier)) {
      importDeclaration.setModuleSpecifier(`@/${moduleSpecifier}`);
    }
  });
});

project.save();
