# grunt-list-page

> The plugin creates an index contents file with a list of html files in your project

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-list-page --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-list-page');
```

## The "list_page" task

### Overview
In your project's Gruntfile, add a section named `list_page` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  list_page: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.fileTemplate
Type: `String`
Default value: `'template.html'`

Contents file template path.

#### options.title
Type: `String`
Default value: `'Mainpage'`

Contents file title.

#### options.listTemplate
Type: `String`
Default value: `'<li><a href="%href%">%name%</a></li>'`

Template for item in contents list.


### Usage Examples

#### Default Options

```js
grunt.initConfig({
  list_page: {
    options: {},
    files: {
      'index_file.html': ['src/*.html', 'src/*.htm'],
    },
  },
});
```

#### Custom Options

```js
grunt.initConfig({
  list_page: {
    options: {
      title: 'My best title',
    },
    files: {
      'index_file.html': ['src/*.html', 'src/*.htm'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
