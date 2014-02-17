/*global: define */

define(['jquery', 'underscore', 'backbone',
        'lib/text!template/LootList.html'],
function ($, _, Backbone, lootListString)
{
  'use strict';

  var lootListTemplate = _.template(lootListString);

  var LootListView = Backbone.View.extend({

    el: 'ul',

    initialize: function () {
      this.listenTo(this.model, 'changeLoot', this.render);
    },

    render: function () {
      this.$el.html(lootListTemplate({
        loot: this.model.get('loot'),
        sorted: this.model.get('sorted'),
        module: this.model.get('module')
      }));
//      this.$el.listview().listview('refresh');
      var that = this;
//      _.defer(function () {
        that.$el.trigger('create');//listview().listview('refresh');
//      });

/*
      var that = this;
      if (this.isRendered)
      {
        _.defer(function () {
          that.$el.listview('refresh');
        });
      }
      else
      {
        this.$el.trigger('create');
        this.isRendered = true;
      }
*/
    }

  });

  return LootListView;
});
