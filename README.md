grunt-lint5
===

> HTML5 validation

Validating HTML5 document using Mozilla's HTML5 Validator instance.

Getting Started

This plugin requires Grunt ~0.4.2

If you haven't used Grunt before, be sure to check out the Getting Started guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

``` js
npm install grunt-lint5 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

``` js
grunt.loadNpmTasks('grunt-lint5');
```

Usage Examples

Default Options

In your project's Gruntfile, add a section named lint5 to the data object passed into grunt.initConfig().

``` js
grunt.initConfig({
  lint5: {
    dirPath: "path/to/template"
    defaults: {
        "email": "a@a.com",
        "username": "abcd"
      },
      templates: [
        "index.html",
        "layout.html"
      ],
      ignoreList: [
        "message to be ignored",
        "another message"
        "Bad value “” for attribute “action” on element “form”: Must be non-empty.",
        "Attribute “[a-z1-9]+” not allowed on element “[a-z1-9]+” at this point"
      ]
    }
  });
```

### dirPath

Value for this option is path to your tempalate files.

### templates

Value for this option is expected to be array of template files to lint.

### ignoreList

Value for this option is expected to be array of messages that you want to ignore.
All messages can be copy from the error log directly, and it can be regular expression as an example above.


-----------------------

##### All issues and suggestion please submit an issue here or tweet me [@alicoding](http://twitter.com/alicoding).