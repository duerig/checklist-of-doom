/*
 * PlanListView.js
 *
 */

/*global: define */

define(['jquery', 'underscore', 'backbone', 'js/PlanView'],
function ($, _, Backbone, PlanView) {
  'use strict';

  var PlanListView = Backbone.View.extend({
    tagName: 'div',

    events: {
      'click #add-plan': 'clickAddPlan'
    },

    initialize: function () {
      this.listenTo(this.collection, 'add', this.addPlan);
      this.listenTo(this.collection, 'remove', this.removePlan);
    },

    render: function () {
      var that = this;
      this.collection.each(function (plan) {
        that.addPlan(plan);
      });
    },

    addPlan: function (newPlan) {
      var view = new PlanView({ model: newPlan });
      view.render();
      this.$el.append(view.el);
      this.$el.trigger('create');
    },

    removePlan: function (oldPlan) {
      oldPlan.trigger('removeFromPlans');
    }
  });

  return PlanListView;
});
