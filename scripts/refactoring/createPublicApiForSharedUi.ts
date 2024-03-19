import { Project } from 'ts-morph';
import path from 'path';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sharedUiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const getSharedUiDir = project.getDirectory(sharedUiPath);

project.resolveSourceFileDependencies();

getSharedUiDir?.getDirectories().forEach((dir) => {
  const indexFilePath = `${dir.getPath()}/index.ts`;
  const indexFile = dir.getSourceFile(indexFilePath);

  if (!indexFile) {
    const sourceCode = `export * from './${dir.getBaseName()}';`;

    const file = dir.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

    file.save();
  }
});

function isAbsoluteImport(value: string) {
  const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

  return layers.some((layer) => value.startsWith(layer));
}

project.getSourceFiles().forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
    const withoutAlias = moduleSpecifier.replace('@/', '');
    const segments = withoutAlias.split('/');

    const isSharedLayer = segments[0] === 'shared';
    const isUiSlice = segments[1] === 'ui';

    const importFromSharedUi = isSharedLayer && isUiSlice;

    if (isAbsoluteImport(withoutAlias) && importFromSharedUi) {
      importDeclaration.setModuleSpecifier(`@/${segments.slice(0, 3).join('/')}`);
    }
  });
});

project.save();
