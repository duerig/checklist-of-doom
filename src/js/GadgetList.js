/*global: define */

define(['jquery', 'underscore', 'backbone',
        'js/BuildList'],
function ($, _, Backbone, BuildList)
{
  'use strict';

  var GadgetList = Backbone.Model.extend({

    defaults: {
      gadgets: [],
      builds: [],
      module: null
    },

    initialize: function () {
      this.set({ gadgets: [],
                 builds: [] });
    },

    addGadget: function (newGadget) {
      var module = this.get('module');
      var newBuild = new BuildList({ module: module });
      var i = 0;
      var templates = [];
      for (i = 0; i < newGadget.plans.length; i += 1)
      {
        templates.push(module.plans[newGadget.plans[i]]);
      }
      this.listenTo(newBuild, 'useTemplate', this.useTemplate);
      newBuild.addAllTemplates(templates);
      this.get('gadgets').push(newGadget);
      this.get('builds').push(newBuild);
      this.trigger('addGadget', newBuild, newGadget);
    },

    useTemplate: function (choice) {
      this.trigger('useTemplate', choice);
    }

  });

  return GadgetList;
});
