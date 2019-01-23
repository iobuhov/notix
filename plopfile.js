const promptDirectory = require('inquirer-directory');
const { appendFileSync } = require('fs');
const { join, resolve } = require('path');
const { paths } = require('./tools/config');

const indexTemplate = 'tools/plop/generators/component/index.js.hbs';
const mainTemplate = 'tools/plop/generators/component/styled.js.hbs';

const featureDirs = [
  'actions',
  'components',
  'connectors',
  'constants',
  'records',
  'reducers',
]

const cmpfiles = [
  'index.js',
  '{{properCase name}}.jsx',
  '{{properCase name}}-styled.js'
]

const addEntry = (data, config, plop) => {
  const { path, template } = config;
  const dir = plop.getDestBasePath();
  const file = resolve(dir, path);
  const entry = plop.renderString(template, data);

  try {
    appendFileSync(file, entry, 'utf-8');
    return file.replace(resolve(dir), '');
  } catch(err) {
		if (typeof err === 'string') {
			throw err;
		} else {
			throw err.message || JSON.stringify(err);
		}
  }
}

module.exports = (plop) => {
  plop.setActionType('addEntry', addEntry);
  plop.setPrompt('directory', promptDirectory)
  plop.setGenerator('component', {
    description: 'Add styled component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please'
    }],
    actions: [{
      type: 'add',
      path: join(paths.lib, '{{dashCase name}}', '{{properCase name}}.js'),
      templateFile: mainTemplate,
    }, {
      type: 'add',
      path: join(paths.lib, '{{dashCase name}}', 'index.js'),
      templateFile: indexTemplate,
    }, {
      type: 'addEntry',
      path: join(paths.lib, 'index.js'),
      template: 'export * from \'./{{dashCase name}}\'\n'
    }],
  });
  plop.setGenerator('feature', {
    description: 'Generate new feature',
    prompts: [{
      type: 'input',
      name: 'feature',
      message: 'feature name please'
    },{
      type: 'directory',
      name: 'dir',
      message: 'feature path please',
      basePath: paths.app,
    }],
    actions: featureDirs.map(dirname => ({
      type: 'add',
      path: join(paths.app, `{{dashCase dir}}/{{dashCase feature}}/${dirname}/index.js`)
    })),
  });
  plop.setGenerator('cmp', {
    description: 'create component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please'
    }, {
      type: 'directory',
      name: 'dir',
      message: 'component path',
      basePath: paths.app,
    }],
    actions: cmpfiles.map(file => ({
      type: 'add',
      path: join(paths.app, '{{ dir }}', '{{properCase name}}', file),
    })),
  });
}
