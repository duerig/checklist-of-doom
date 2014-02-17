/*global: define */

define(['jquery', 'underscore', 'backbone'],
function ($, _, Backbone) {
  'use strict';

  var Plan = Backbone.Model.extend({

    defaults: {
      template: null,
      isDone: false,
      stepsDone: [],
      doneCount: 0,
      loot: null,
      module: null
    },

    initialize: function () {
      this.set({ stepsDone: [] });
      var i = 0;
      for (i = 0; i < this.get('template').steps.length; i += 1)
      {
        this.get('stepsDone').push(false);
      }
    },

    isOpenTask: function (index) {
      var result = false;
      if (index !== null && index !== undefined)
      {
        var done = this.get('stepsDone');
        var step = this.get('template').steps[index];
        if (index >= 0 && index < done.length)
        {
          result = ! done[index] && this.get('loot').willWork(step);
        }
      }
      return result;
    },

    completeTask: function (index) {
      if (index !== null && index !== undefined)
      {
        var done = this.get('stepsDone');
        if (index >= 0 && index < done.length)
        {
          var step = this.get('template').steps[index];
          done[index] = true;
          this.set({ doneCount: this.get('doneCount') + 1 });
          if (step.count > 0)
          {
            this.get('loot').changeLoot(step.type, - step.count);
          }
          this.trigger('updateSteps');

          this.checkDone();
        }
      }
    },

    checkDone: function () {
      if (this.get('doneCount') >= this.get('stepsDone').length)
      {
        this.set({ isDone: true });
        this.trigger('planComplete', this);
      }
    }

  });

  return Plan;
});
