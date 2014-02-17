/*global: define */

define(['jquery', 'underscore', 'backbone',
        'js/BuildListView', 'lib/text!template/Gadget.html'],
function ($, _, Backbone, BuildListView, gadgetString)
{
  'use strict';

  var gadgetTemplate = _.template(gadgetString);

  var GadgetListView = Backbone.View.extend({

    el: 'div',

    initialize: function () {
      this.listenTo(this.model, 'addGadget', this.addGadget);
    },

    addGadget: function (newBuild, newGadget) {
      var newNode = $(gadgetTemplate(newGadget));
      this.$el.append(newNode);
      newNode.enhanceWithin();
      var view = new BuildListView({
        model: newBuild,
        el: newNode.find('#gadget-build')
      });
      view.render();
//      var that = this;
//      _.defer(function () {
//        this.$el.trigger('create');//listview().listview('refresh');
//      });
    }
  });

  return GadgetListView;
});
