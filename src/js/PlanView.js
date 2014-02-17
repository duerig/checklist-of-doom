/*global: define */

define(['jquery', 'underscore', 'backbone',
        'lib/text!template/Plan.html'],
function ($, _, Backbone, planString) {
  'use strict';

  var taskWait = 50;
  var taskProgress = 10;

  var planTemplate = _.template(planString);

  var PlanView = Backbone.View.extend({

    el: '<div data-role="collapsible" data-collapsed="false" data-theme="b" data-content-theme="c">',

    events: {
      'mousedown .plan-step': 'beginTask',
//      'mouseup .plan-step': 'endPress',
//      'mouseout .plan-step': 'endPress',
      'touchstart .plan-step': 'beginTask'
//      'touchend .plan-step': 'endPress'
    },

    initialize: function () {
      this.workingOn = null;
      this.workTimer = null;
      this.listenTo(this.model, 'updateSteps', this.render);
      this.listenTo(this.model, 'planComplete', this.remove);
      this.listenTo(this.model.get('loot'), 'changeLoot', this.render);
    },

    render: function () {
      var template = this.model.get('template');
      var lootCount = [];
      var lootTitle = [];
      var i = 0;
      for (i = 0; i < template.steps.length; i++)
      {
        var current = template.steps[i];
        if (current.type)
        {
          lootCount.push(this.model.get('loot').countLoot(current.type));
          lootTitle.push(this.model.get('module').loot[current.type].title);
        }
        else
        {
          lootCount.push(0);
          lootTitle.push('');
        }
      }
      if (this.isRendered)
      {
        var stepEls = this.$('li.plan-step');
        for (i = 0; i < template.steps.length; i += 1)
        {
          var step = template.steps[i];
          var stepDone = this.model.get('stepsDone')[i];
          var el = $(stepEls[i]);
          if (stepDone)
          {
            el.find('img').attr('src', 'images/checked.png');
            el.css('background', 'url(images/green.png)');
            el.css('background-size', '100% 100%');
            el.css('background-position', '0 0');
            el.css('background-repeat', 'no-repeat');
            el.find('#loot').hide();
          }
          else
          {
            el.find('img').attr('src', 'images/unchecked.png');
            if (step.count > 0)
            {
              el.find('#loot').html('<strong>Have ' + lootCount[i] + ' / ' + step.count + ' ' + lootTitle[i] + '</strong>');
              if (lootCount[i] < step.count)
              {
                el.find('#loot').addClass('require-deny');
                el.find('#loot').removeClass('require-ok');
              }
              else
              {
                el.find('#loot').addClass('require-ok');
                el.find('#loot').removeClass('require-deny');
              }
            }
            el.css('background', '#fff');
          }
        }
      }
      else
      {
        this.$el.html(planTemplate({
          lootCount: lootCount,
          lootTitle: lootTitle,
          template: this.model.get('template'),
          stepsDone: this.model.get('stepsDone')
        }));
        this.$el.enhanceWithin();
        this.isRendered = true;
      }        
//      var that = this;
//      _.defer(function () {
//        that.$el.trigger('create');//listview().listview('refresh');
//      });
//      this.$el.listview().listview('refresh');

//      }
    },

    beginTask: function (event) {
//      event.preventDefault();
      var newWorkingOn = parseInt($(event.currentTarget).data('index'), 10);
      if (this.model.isOpenTask(newWorkingOn) &&
          this.workingOn !== newWorkingOn)
      {
        this.endTask(event);
        this.workingOn = newWorkingOn;
        this.workEl = $(event.currentTarget);
        this.workEl.css('background', 'url(\'images/green.png\')');
        this.workEl.css('background-size', '0% 100%');
        this.workEl.css('background-position', '0px 0px');
        this.workEl.css('background-repeat', 'no-repeat');
        this.workTimer = setTimeout(_.bind(this.updateTask, this), taskWait);
      }
//      return false;
    },

    endPress: function (event) {
      event.preventDefault();
      if (this.model.isOpenTask(this.workingOn))
      {
        this.endTask();
      }
      return false;
    },

    endTask: function () {
      clearTimeout(this.workTimer);
      this.workTimer = null;
      if (this.workEl && this.model.isOpenTask(this.workingOn))
      {
        this.workEl.css('background', '#fff');
        this.workEl = null;
      }
      this.workCount = 0;
      this.workgingOn = null;
    },

    updateTask: function () {
      if (this.model.isOpenTask(this.workingOn))
      {
        var width = this.workCount * taskProgress;
        if (width >= 100)
        {
          width = 100;
        }
        this.workEl.css('background-size', width + '% 100%');
        this.workTimer = setTimeout(_.bind(this.updateTask, this), taskWait);
        this.workCount += 1;
        if (width === 100)
        {
          this.model.completeTask(this.workingOn);
          this.endTask();
        }
      }
    }

  });

  return PlanView;
});
