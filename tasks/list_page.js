/*
 * grunt-list-page
 * https://github.com/denis-zavgorodny/grunt-list-page
 *
 * Copyright (c) 2016 Denis Zavgorodny
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    var path = require('path');
    grunt.registerMultiTask('list_page', 'The plugin creates an index file with a list of html files', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            fileTemplate: 'template.html',
            title: "Mainpage",
            listTemplate: '<li><a target="_blank" href="%href%">%name%</a></li>'
        });

        var fileTemplate = grunt.file.read(__dirname + "/" + options.fileTemplate);
        fileTemplate = fileTemplate.replace('#title#', options.title);

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                var baneName = path.basename(filepath);
                // Read file source.
                var content = grunt.file.read(filepath);
                var re =/<title(?:.*)>(.+)<\//gm;
                var title = re.exec(content);
                if(title != null) {
                    return options.listTemplate.replace('%href%', baneName).replace('%name%', title[1]?title[1]:baneName);    
                }
                return options.listTemplate.replace('%href%', baneName).replace('%name%', baneName);    
            }).join("");

            // Handle options.
            

            // Write the destination file.
            grunt.file.write(f.dest, fileTemplate.replace('#list#', src));

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
