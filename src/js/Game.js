/*global: define */

define(['jquery', 'underscore', 'backbone',
        'js/PlanList', 'js/PlanListView',
        'js/BuildList', 'js/BuildListView',
        'js/LootList', 'js/LootListView',
        'js/GadgetList', 'js/GadgetListView'],
function ($, _, Backbone,
          PlanList, PlanListView,
          BuildList, BuildListView,
          LootList, LootListView,
          GadgetList, GadgetListView)
{
  'use strict';

  var noteDuration = 1000;

  function Game(module)
  {
    this.module = module;

    this.plans = new PlanList();
    var planView = new PlanListView({
      collection: this.plans,
      el: $('#plan-list')
    });

    this.builds = new BuildList({ module: module,
                                  shouldRemove: true });
    var buildView = new BuildListView({
      model: this.builds,
      el: $('#build-list')
    });

    this.gadgets = new GadgetList({ module: module });
    var gadgetView = new GadgetListView({
      model: this.gadgets,
      el: $('#gadget-list')
    });

    this.loot = new LootList({ module: module });
    var lootView = new LootListView({
      model: this.loot,
      el: $('#loot-list')
    });

    var startTemplates = [];
    var i = 0;
    for (i = 0; i < module.start.length; i += 1)
    {
      startTemplates.push(module.plans[module.start[i]]);
    }

    this.builds.addAllTemplates(startTemplates);

    _.extend(this, Backbone.Events);
    this.listenTo(this.plans, 'giveReward', this.giveReward);
    this.listenTo(this.builds, 'useTemplate', this.useTemplate);
    this.listenTo(this.gadgets, 'useTemplate', this.useTemplate);
  }

  Game.prototype.giveReward = function (plan)
  {
    var rewardMessage = 'Plan Complete';
    var reward = plan.get('template').reward;
    var win = plan.get('template').win;
    if (reward)
    {
      var i = 0;
      if (reward.plans)
      {
        for (i = 0; i < reward.plans.length; i += 1)
        {
          var template = this.module.plans[reward.plans[i]];
          this.builds.addTemplate(template);
        }
      }
      if (reward.loot)
      {
        this.loot.changeLoot(reward.loot.type, reward.loot.count);
        rewardMessage = 'Acquired ' + reward.loot.count + ' ' +
              this.module.loot[reward.loot.type].title;
      }
      if (reward.gadget)
      {
        this.gadgets.addGadget(this.module.gadgets[reward.gadget]);
        rewardMessage = 'Tremble before my ' +
          this.module.gadgets[reward.gadget].title;
      }
      if (reward.win)
      {
        $('#win-content').html(this.module.win[reward.win]);
        window.location = '#win-page';
      }
    }
    if (! reward || ! reward.win)
    {
      $.mobile.loading('show', {
        theme: 'a',
        html: '<br><h1>' + rewardMessage + '</h1><br>',
        textVisible: true,
        textonly: true
      });
      setTimeout(hideNote, noteDuration);
    }
  };

  Game.prototype.useTemplate = function (template)
  {
    this.plans.addPlan(template, this.loot, this.module);
  };

  function hideNote()
  {
    $.mobile.loading('hide');
  }

  return Game;
});
