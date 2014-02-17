/*global: define */

define(['jquery', 'underscore', 'backbone'],
function ($, _, Backbone)
{
  'use strict';

  var BuildList = Backbone.Model.extend({

    defaults: {
      templates: [],
      module: null,
      shouldRemove: false
    },

    initialize: function () {
      this.set({ templates: [] });
    },

    addTemplate: function (newTemplate) {
      this.get('templates').push(newTemplate);
      this.trigger('addTemplate');
    },

    addAllTemplates: function (list) {
      var templates = this.get('templates');
      _.each(list, function (item) {
        templates.push(item);
      });
      this.trigger('addTemplate');
    },

    useTemplate: function (index) {
      var choice = this.get('templates')[index];
      if (this.get('shouldRemove'))
      {
        this.get('templates').splice(index, 1);
      }
      this.trigger('useTemplate', choice);
    }
  });

  return BuildList;
});
