/*global: define */

define(['jquery', 'underscore', 'backbone',
        'lib/text!template/BuildList.html'],
function ($, _, Backbone, buildListString)
{
  'use strict';

  var buildListTemplate = _.template(buildListString);

  var BuildListView = Backbone.View.extend({

    el: 'div',

    events: {
      'click .build-select': 'clickBuild'
    },

    initialize: function () {
      this.listenTo(this.model, 'addTemplate', this.render);
      this.listenTo(this.model, 'useTemplate', this.render);
    },

    render: function () {
      var templates = this.model.get('templates');
      var module = this.model.get('module');
      var rewardLoot = [];
      var rewardGadget = [];
      var i = 0;
      for (i = 0; i < templates.length; i += 1)
      {
        var reward = templates[i].reward;
        var lootText = '';
        if (reward.loot)
        {
          lootText = '<strong>Loot:</strong> ' +
            reward.loot.count + ' ' +
            module.loot[reward.loot.type].title;
        }
        var gadgetText = '';
        if (reward.gadget)
        {
          gadgetText = '<strong>Gadget:</strong> ' +
            module.gadgets[reward.gadget].title;
        }
        rewardLoot.push(lootText);
        rewardGadget.push(gadgetText);
      }
      var newEl = $(buildListTemplate({
        rewardLoot: rewardLoot,
        rewardGadget: rewardGadget,
        templates: templates,
        module: module
      }));
      newEl.listview();
      this.$el.html(newEl);
      this.$el.enhanceWithin();
/*
      var that = this;
      _.defer(function () {
//        that.$el.trigger('create');
//        console.log(that.$('ul'));
        that.$('ul').listview().listview('refresh', true);
      });
      _.defer(function () {
        that.$el.trigger('create');
      });
*/
/*
      _.defer(function () {
        that.$el.listview().listview('refresh');
      });
*/
/*
      var that = this;
      _.defer(function () {
        that.$el.listview('refresh');
      });
*/
/*
      this.$el.listview();
*/
/*
      _.defer(function() {
        $(document).trigger('create');
      });
*/
//        $('body').trigger('create');
    },

    clickBuild: function (event) {
      var index = parseInt($(event.currentTarget).data('index'), 10);
      this.model.useTemplate(index);
    }

  });

  return BuildListView;
});
