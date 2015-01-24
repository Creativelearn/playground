define(["jquery", "app", "marionette", "backbone"],
    function($, app, Marionette, Backbone) {

        var module = app.module("examples", function() {

            app.on("menu-render", function(context) {
                var result = "<li class='dropdown' data-step='6' data-intro='Or check out examples for various reporting options.'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>Examples <b class='caret'></b></a><ul class='dropdown-menu'><li class='dropdown-header'>examples</li>";
                module.examples.forEach(function(t) {
                    result += "<li><a href='#/playground/" + t.shortid + "'>" + t.name + "</a></li>";
                });

                result += "</ul>";
                result += "</li>";
                context.result += result;
            });

            app.on("entity-registration", function(context) {
                $entity.Template.addMember("isExample", { 'type': "Edm.Boolean" });
            });

        });

        app.onStartListeners.add(function(cb) {
            app.dataContext.templates.filter( function(t) { return t.isExample == true && t.version == 1; }).toArray().then(function(res) {
                module.examples = _.sortBy(res, function(t) {
                    return t.name;
                });
                
                cb();
            });
        });

        app.on("entity-registration", function(context) {
            $entity.Template.addMember("isExample", { type: "Edm.Boolean" });
        });

        return module;
    });
