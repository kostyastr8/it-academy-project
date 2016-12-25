module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                options: {
                    compress: true,
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
                    ]
                },
                files: {
                    './styles/compiled.css': './styles/styles.less'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'styles/compiled.css': ['styles/compiled.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['less:dev']);

};
