const { appendFileSync } = require('fs');
const { join, resolve } = require('path');
const { paths } = require('./tools/config');

const indexTemplate = 'tools/plop/generators/component/index.js.hbs';
const mainTemplate = 'tools/plop/generators/component/styled.js.hbs';

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
}
