/*global: define */

define(['jquery', 'underscore', 'backbone', 'js/Plan'],
function ($, _, Backbone, Plan)
{
  'use strict';

  var PlanList = Backbone.Collection.extend({

    model: Plan,

    addPlan: function (template, loot, module) {
      var plan = new Plan({ template: template,
                            loot: loot,
                            module: module});
      this.add(plan);
      this.listenTo(plan, 'planComplete', this.giveReward);
    },

    giveReward: function (plan) {
      this.remove(plan);
      this.trigger('giveReward', plan);
    }

  });

  return PlanList;
});
