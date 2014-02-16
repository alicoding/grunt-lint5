grunt-lint5
===

> HTML5 validation

Getting Started

This plugin requires Grunt ~0.4.1

If you haven't used Grunt before, be sure to check out the Getting Started guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-lint5 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-lint5');
```

Usage Examples

Default Options

In your project's Gruntfile, add a section named lint5 to the data object passed into grunt.initConfig().

```
grunt.initConfig({
  lint5: {
    views: "value" // The value in this key:value pair refer to where your template dir
    defaults: {
        // if you have used nunjucks and wanted to pass defaults value to the objects
        // for example:
        "email": "a@a.com",
        "username": "abcd"
      },
      templates: [
        "index.html", // files that you want to be check
        "layout.html"
      ],
      ignoreList: [
        // the format of ignoreList is in the array format
        "message to be ignored",
        "another message"
        // you can simply copy the message you got from the returned on the console
        //for example this
        "Bad value “” for attribute “action” on element “form”: Must be non-empty.",
        // you can also use a regular expression pattern inline, for example:
        "Attribute “[a-z1-9]+” not allowed on element “[a-z1-9]+” at this point"
      ]
    }
  })
```
