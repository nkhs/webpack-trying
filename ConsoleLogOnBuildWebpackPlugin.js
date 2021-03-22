const { validate } = require('schema-utils');
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string',
    },
  },
  // required:['test']
};


class ConsoleLogOnBuildWebpackPlugin {
  /**
    * @param {HtmlWebpackOptions} [options]
    */
  constructor(options) {
    /** @type {HtmlWebpackOptions} */
    this.userOptions = options || {};
    this.userOptions.showErrors
  }

  apply(compiler) {


    compiler.hooks.emit.tap('FileListPlugin2', (
      compilation, callback) => {
      // compilation.hoo
      compilation.hoo
    });

    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      // Create a header string for the generated file:
      var filelist = 'In this build:\n\n';

      // Loop through all compiled assets,
      // adding a new line item for each filename.
      for (var filename in compilation.assets) {
        filelist += '- ' + filename + '\n';
      }

      // Insert this list into the webpack build as a new file asset:
      compilation.assets['filelist.md'] = {
        source: function () {
          return filelist;
        },
        size: function () {
          return filelist.length;
        },
      };

      callback();
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;