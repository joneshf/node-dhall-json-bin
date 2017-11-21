'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');
var packageJSON = require('./package.json');

var base = 'https://github.com/dhall-lang/dhall-json/releases/download/';

var binary = new BinWrapper({skipCheck: true})
  .src(base + packageJSON.version + '/osx.tar.gz', 'darwin')
  .src(base + packageJSON.version + '/linux.tar.gz', 'linux')
  .dest(path.join(__dirname, 'vendor'));

binary.use('dhall-to-json').run(function(err) {
  if (err != null) {
    console.error(err);
    process.exit(1);
  }

  binary.use('dhall-to-yaml').run(function(err) {
    if (err != null) {
      console.error(err);
      process.exit(1);
    }
  });
});
