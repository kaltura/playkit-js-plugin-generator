'use strict';
const Generator = require('yeoman-generator');
const _ = require('lodash');

module.exports = class extends Generator {
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your plugin name?',
      default: 'my-plugin-name'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
      this.props.pluginName = _.kebabCase(_.toLower(props.name));
      this.props.className = _.upperFirst(_.camelCase(props.name));
    }.bind(this));
  }

  writing() {
    this.fs.copy(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc')
    );

    this.fs.copy(
      this.templatePath('_editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('_eslintrc.json'),
      this.destinationPath('.eslintrc.json')
    );

    this.fs.copy(
      this.templatePath('_flowconfig'),
      this.destinationPath('.flowconfig')
    );

    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('_karma.conf.js'),
      this.destinationPath('karma.conf.js')
    );

    this.fs.copy(
      this.templatePath('_travis.yml'),
      this.destinationPath('.travis.yml')
    );

    this.fs.copy(
      this.templatePath('_test/_setup/_karma.js'),
      this.destinationPath('test/setup/karma.js')
    );

    this.fs.copy(
      this.templatePath('_test/_setup/_load-specs.js'),
      this.destinationPath('test/setup/load-specs.js')
    );

    this.fs.copy(
      this.templatePath('_test/_setup/_prepare-test-environment.js'),
      this.destinationPath('test/setup/prepare-test-environment.js')
    );

    this.fs.copy(
      this.templatePath('_test/_eslintrc.json'),
      this.destinationPath('test/.eslintrc.json')
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        pluginName: this.props.pluginName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'), {
        pluginName: this.props.pluginName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js'), {
        pluginName: this.props.pluginName,
        className: this.props.className
      }
    );

    this.fs.copyTpl(
      this.templatePath('_src/_index.html'),
      this.destinationPath('src/index.html'), {
        pluginName: this.props.pluginName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_src/_plugin.js'),
      this.destinationPath('src/' + this.props.pluginName + '.js'), {
        className: this.props.className,
        pluginName: this.props.pluginName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_test/_src/_plugin.js'),
      this.destinationPath('test/src/' + this.props.pluginName + '.spec.js'), {
        className: this.props.className,
        pluginName: this.props.pluginName
      }
    );
  }

  install() {
    this.yarnInstall();
  }
};
