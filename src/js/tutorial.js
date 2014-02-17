/*global: define */
define (['lib/text!template/tutorial-win.html'],
function (tutorialText) {
  var plans = {
    'basic': {
      title: 'Learning basic tasks',
      description: 'Everyone has to start somehwere, even evil overlords. This plan will start you out down the path to organized world domination.',
      reward: { plans: ['loot', 'spend'] },
      steps: [
        { name: 'Tap tasks like this perform them' },
        { name: 'They will complete on their own but you can only do one thing at once' },
        { name: 'Shoot a minion, just because' },
        { name: 'Steps can be completed in any order' },
        { name: 'When all the steps in a plan are completed, the plan is done' },
        { name: 'Laugh maniacally. You know you want to' }
      ]
    },
    'loot': {
      title: 'Getting Loot',
      description: 'Plans can unlock other plans, but can also result in all-important Loot. Every time you follow a plan, you get more Loot.',
      reward: { loot: {type: 'widget', count: 1},
                plans: ['loot-2']},
      steps: [
        { name: 'Plans give you loot or gadgets or unlock other plans' },
        { name: 'When you finish this, you will get a widget' },
        { name: 'Take your widget' }
      ]
    },
    'loot-2': {
      title: 'Steal More Widgets',
      description: 'The old way of getting widgets is too slow. It will be much faster to steal them...',
      reward: { loot: {type: 'widget', count: 2},
                plans: ['loot-3']},
      steps: [
        { name: 'Find a baby' },
        { name: 'Take its widgets' },
        { name: 'Because you can!!!' }
      ]
    },
    'loot-3': {
      title: 'Widget Scam',
      description: 'I\'m not a bad person. I just enjoy being evil. Is that so wrong?',
      reward: { loot: {type: 'widget', count: 4},
                plans: ['loot-2']},
      steps: [
        { name: '"Look! Over there! A tap-dancing penguin!"' },
        { name: '"All your widgets are belong to me. Sucker."' }
      ]
    },
    'spend': {
      title: 'Spending Loot',
      description: 'Some steps in a plan can require loot to complete. Once the loot is spent, it is gone.',
      reward: { plans: ['gadget'] },
      steps: [
        { name: 'This first step requires nothing to complete' },
        { name: 'You can\'t do this step without a widget', type: 'widget', count: 1 },
        { name: 'This step requires even more widgets', type: 'widget', count: 3 },
        { name: 'Curse you widgets! So sweet, yet so easy to spend!' }
      ]
    },
    'gadget': {
      title: 'Building Gadgets',
      description: 'Gadgets are special items that permanently give you access to new kinds of plans. This plan lets you build your first gadget, a widgematic.',
      reward: { gadget: 'widgematic', plans: ['winning'] },
      steps: [
        { name: 'Search the classifieds for a used Widgematic' },
        { name: 'Aha! A widgematic is available in the trades section' },
        { name: 'Trade some widgets', type: 'widget', count: 5 },
        { name: 'This gadget will appear in the Gadgets tab' },
        { name: 'Gadgets let you add even more plans from the Gadgets tab' }
      ]
    },
    'winning': {
      title: 'Winning the Tutorial',
      description: 'Plans, gadgets, and loot. You know it all. Just use your knowledge to win the tutorial.',
      reward: { win: 'tutorial' },
      steps: [
        { name: '(1) Accumulate a pile of widgets', type: 'widget', count: 5 },
        { name: '(2) Gather a couple foobars', type: 'foobar', count: 2 },
        { name: '(3) ???' },
        { name: '(4) Mwahaha! Victory!' }
      ]
    },

    'widgematic': {
      title: 'Condense Widgets into Foobars',
      description: 'Use the widgematic to condense widgets into cutting edge foobars.',
      reward: { loot: {type: 'foobar', count: 1 } },
      steps: [
        { name: 'Add some widgets', type: 'widget', count: 3 },
        { name: 'Turn the crank' },
        { name: 'Kick it' }
      ]
    }
  };

  var gadgets = {
    'widgematic': {
      title: 'Widgematic Mk III (slightly used)',
      description: 'Acquired in a brilliant caper involving *ahem* classified ads and *ahem* trading.',
      plans: ['widgematic']
    }
  };

  var loot = {
    'widget': {
      title: 'Widgets',
      description: 'The most generic of loot, widgets are perfect currency for a tutorial.'
    },
    'foobar': {
      title: 'Foobars',
      description: 'A little less generic and a lot more dense than a standard widget. These fine foobars will complement any evil lair.'
    }
  };

  var module = {
    plans: plans,
    gadgets: gadgets,
    loot: loot,
    start: ['basic'],
    win: {
      tutorial: tutorialText
    }
  };

  return module;
});
