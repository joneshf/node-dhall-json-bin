'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');
var packageJSON = require('./package.json');

var base = 'https://github.com/joneshf/dhall-json/releases/download/';

new BinWrapper()
  .src(base + packageJSON.version + '/osx.tar.gz', 'darwin')
  .src(base + packageJSON.version + '/linux.tar.gz', 'linux')
  .dest(path.join('bin'))
  .use('')
  .run(function() {});
