'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-playkit-js-plugin:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'my-plugin'});
  });

  it('creates files', () => {
    assert.file([
      '.babelrc',
      '.editorconfig',
      '.eslintrc.json',
      '.flowconfig',
      '.gitignore',
      '.karma.conf.js',
      'package.json',
      'README.md',
      'webpack.config.js',
      '.travis.yml',
      'test/setup/karma.js',
      'test/setup/load-specs.js',
      'test/setup/prepare-test-environment.js',
      'src/my-plugin.js',
      'test/src/my-plugin.spec.js'
    ]);
  });
});
