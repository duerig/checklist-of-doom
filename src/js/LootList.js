/*global: define */

define(['jquery', 'underscore', 'backbone'],
function ($, _, Backbone)
{
  'use strict';

  var LootList = Backbone.Model.extend({

    defaults: {
      loot: {},
      sorted: [],
      module: null
    },

    initialize: function () {
      this.set({
        loot: {},
        sorted: [] });
    },

    changeLoot: function (type, count) {
      var loot = this.get('loot');
      var sorted = this.get('sorted');
      var module = this.get('module');
      if (loot[type] === undefined)
      {
        loot[type] = count;
        sorted.push(type);
        sorted.sort();
      }
      else
      {
        loot[type] = loot[type] + count;
      }
      this.trigger('changeLoot');
    },

    countLoot: function (type) {
      var result = 0;
      if (this.get('loot')[type])
      {
        result = this.get('loot')[type];
      }
      return result;
    },

    willWork: function (step) {
      var result = true;
      if (step.type && step.count)
      {
        var current = this.get('loot')[step.type];
        result = (current && current >= step.count);
      }
      return result;
    }

  });

  return LootList;
});
