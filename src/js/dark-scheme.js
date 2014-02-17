/*global: define */
define (['lib/text!template/dark-scheme-win.html'],
function (eclipseText) {
  var plans = {
    'start': {
      title: 'Inauspicious Beginnings',
      description: 'You lack money, notoriety, minions, or even a proper arch-nemesis. But you have a plan! The sun will darken. And every devious plan starts with a single lie.',
      reward: { plans: ['raygun', 'hardware', 'fire-alarm'], gadget: 'spy-scam' },
      steps: [
        { name: 'Hmm. Everyone knows a fool and their money are soon parted' },
        { name: 'But how to part them?' },
        { name: 'Aha! You will pretend to be part of a secret agency' },
        { name: '"Agent Smith speaking."' },
        { name: '"I\'m from a super secret spy agency, give me money."' },
        { name: '"Do you want to serve your country, son?"' },
        { name: 'The perfect scam! Mwahaha!' }
      ]
    },

    'spy-buck': {
      title: 'Bucks from Dupes',
      description: 'Once you have dupes convinced that you are a secret agent, you can start bilking them for money. It\'s as easy as stealing widgets from a baby.',
      reward: { loot: { type: 'buck', count: 20 } },
      steps: [
        { name: '"Excuse me ma\'am, that purse is evidence."', type: 'dupe', count: 1 },
        { name: '"Sir, that watch looks dangerous. Please hand it over."', type: 'dupe', count: 1 }
      ]
    },

    'spy-dupe': {
      title: 'Another Sucker',
      description: 'A new day, a new sucker. With your clever lie, you should be able to find new dupes whenever you need them.',
      reward: { loot: { type: 'dupe', count: 1 } },
      steps: [
        { name: 'Fix \'em with your mesma-stare...' },
        { name: '"Can I talk to you for a minute? It is a matter of national security."' }
      ]
    },

    'raygun': {
      title: 'Tools of the Trade',
      description: 'Nobody gives a villain respect until you\'ve made your first raygun. ',
      reward: { gadget: 'raygun', plans: ['brain-beam'] },
      steps: [
        { name: 'Tinker in your basement' },
        { name: 'Assemble the raygun frame', type: 'hardware', count: 2 },
        { name: 'Insert a sprocket crux', type: 'sprocket', count: 1 },
        { name: 'Callibrate the ray' },
        { name: 'Charge it overnight' },
        { name: 'Test it on a human subject', type: 'dupe', count: 1 },
        { name: 'Oooh. That\'s gonna leave a mark. Mwahaha!' }
      ]
    },

    'liquor-store': {
      title: 'Knock Over a Liquor Store',
      description: 'With your raygun in hand, you can now rob liquor stores to get bucks. This is much more efficient than the small scale scams you used before.',
      reward: { loot: { type: 'buck', count: 100 } },
      steps: [
        { name: 'Intimidate store owner' },
        { name: 'Clean out the till' },
        { name: 'Make your getaway' }
      ]
    },

    'jeweler': {
      title: 'Rob a Jewelry Store',
      description: 'Robbing a jewelry store means you can finally get your hands on some diamonds. But you will need help to do it.',
      reward: { loot: { type: 'diamond', count: 1 } },
      steps: [
        { name: 'Post a lookout', type: 'minion', count: 1 },
        { name: 'Station a getaway car', type: 'minion', count: 1 },
        { name: 'Distract the guard' },
        { name: 'Disable the cameras' },
        { name: 'Grab a diamond' }
      ]
    },

    'bank': {
      title: 'Bank Heist',
      description: 'With some minions to help, you are ready for the big time. Banks are where the money is. Time to go get some',
      reward: { loot: { type: 'buck', count: 3500 } },
      steps: [
        { name: 'Round up a crew of the usual suspects', type: 'minion', count: 3 },
        { name: 'Head down to a friendly local bank branch' },
        { name: 'Nice haul. Too bad that the minions ended up in jail' }
      ]
    },

    'hardware': {
      title: 'Find a Hardware Supplier',
      description: 'You need to locate a supplier that will accept your Gold Villain Discount Card. When trying to conquer the world, you need all the discounts you can get.',
      reward: { gadget: 'hardware-hut', plans: ['old-lady'] },
      steps: [
        { name: 'You could always go to Walmart' },
        { name: 'Nah. Too evil' },
        { name: 'Time to hit the yellow pages' },
        { name: 'Aha! Hardware Hut! This looks perfect.' },
        { name: 'Time to activate that Gold Villain Discount Card', type: 'buck', count: 5 }
      ]
    },

    'small-hardware': {
      title: 'Basic Hardware',
      description: 'There is a sale going on basic hardware at the Hardware Hut. Two for one discount with your Gold Villain Discount Card. Foolish hardware! I will buy you!',
      reward: { loot: { type: 'hardware', count: 2 } },
      steps: [
        { name: 'Grab the hardware' },
        { name: 'Swipe your Gold Villain Discount Card' },
        { name: 'Do you want to contribute to the Orphans of Deceased and Decapitated Minions fund? (x) No! ( ) Yes' },
        { name: 'Enter your Personal Evil Number', type: 'buck', count: 8 }
      ]
    },

    'medium-hardware': {
      title: 'Hardware Case Lot Sale',
      description: 'When you need a lot of hardware, you need to buy it by the case to save money.',
      reward: { loot: { type: 'hardware', count: 30 } },
      steps: [
        { name: 'Get an evil shopping cart. You know, the kind where one wheel drags and squeeks' },
        { name: 'Push it through the store to the cases of hardware' },
        { name: 'Smile as they all cringe at the sound of the squeeking' },
        { name: 'Use your Gold Villain Discount Card at checkout', type: 'buck', count: 100 }
      ]
    },

    'large-hardware': {
      title: 'Large Hardware Shipment',
      description: 'Why go to the store when you can ship hardware by the truckload directly to your lair? By my calculations, the extra efficiency can give you 10% more scheming time per year.',
      reward: { loot: { type: 'hardware', count: 200 } },
      steps: [
        { name: 'Go to hardware.hut' },
        { name: 'Enter your discount code and credit card information', type: 'buck', count: 500 },
        { name: 'Free shipping? Why thank you!' },
        { name: 'Send spam to 5000 strangers, just because. "Fr33 v1agra!!!!"' }
      ]
    },

    'transducer-deal': {
      title: 'Purchase a Phase Transducer',
      description: 'For select customers, the Hardware Hut also offers a great deal on a Phase Transducer. But only the richest villains can afford such cutting edge hardware.',
      reward: { loot: { type: 'transducer', count: 1 } },
      steps: [
        { name: 'Flash your Gold Villain Discount Card to get into the back room' },
        { name: 'Wipe your feet so you don\'t dirty the carpet' },
        { name: 'If you have to ask how much the transducer is, you can\'t afford it', type: 'buck', count: 4000 }
      ]
    },

    'old-lady': {
      title: 'The Old Lady Heist',
      description: 'Too many doors are closed to you. But if you have the right lockpick, they will open...',
      reward: { gadget: 'lockpick' },
      steps: [
        { name: 'Find an old lady', type: 'dupe', count: 1 },
        { name: 'Offer to help her across the street' },
        { name: '"Accidentally" spill her handbag' },
        { name: 'Grab a hairpin while you help her pick it up' },
        { name: 'Smirk at her naivete behind her back' }
      ]
    },

    'junkyard': {
      title: 'The Junk Yard Job: Sprockets',
      description: 'Why pay for a sprocket crux, when you can get it for free? With a lockpick in hand, you can break into the local junkyard after hours.',
      reward: { loot: { type: 'sprocket', count: 1 } },
      steps: [
        { name: 'Build a distraction device', type: 'hardware', count: 3 },
        { name: 'While the guard investigates, pick the lock' },
        { name: 'This is a perfectly good sprocket crux! Why would anyone have thrown that away?' }
      ]
    },

    'telescope': {
      title: 'Time to Focus',
      description: 'The local university has a large telescope. If you are to build a graviton gun, you will need the lens. But get a minion as a lookout first.',
      reward: { loot: { type: 'lens', count: 1 } },
      steps: [
        { name: 'Post a minion as lookout', type: 'minion', count: 1 },
        { name: 'Pick the lock on the astronomy building' },
        { name: 'Carefully unscrew the lens' }
      ]
    },

    'fire-alarm': {
      title: 'False Alarm',
      description: 'People are so gullible. They always leave a building when there is an alarm. All you have to do is trigger the alarm and nab whatever they leave behind.',
      reward: { loot: { type: 'buck', count: 100 }, plans: ['pirate-flag'] },
      steps: [
        { name: 'Make sure the coast is clear' },
        { name: 'Pull the fire alarm lever' },
        { name: 'Hide in the bathroom' },
        { name: 'Somebody left their wallet behind. Cha-ching!' }
      ]
    },

    'pirate-flag': {
      title: 'Show Them All!',
      description: 'Enough with the small time stunts. It is time to start establishing your cred in the evil community. Those pen pushers at city hall have it coming. Time to switch out the flag with a jolly roger. That\'ll show them.',
      reward: { plans: ['leaflets'] },
      steps: [
        { name: 'Buy a jolly roger at a novelty store', type: 'buck', count: 10 },
        { name: 'Sneak into city hall at night' },
        { name: 'Raise your pirate flag for the entire city to see!' },
        { name: 'Turn on the news and bask in your victory' },
        { name: 'A "small time prank"? A "band of teenagers"? "Juvenile"?' },
        { name: '"Those foolish newscasters! They think they can laugh at me?!? I\'ll show them!"' }
      ]
    },

    'leaflets': {
      title: 'Distribute Doomsday Leaflets',
      description: 'Inform the world of you coming wrath by distributing leaflets.',
      reward: { loot: { type: 'ultimatum', count: 1 } },
      steps: [
        { name: 'Stop by the copy shop', type: 'buck', count: 40 },
        { name: '"Sir, please take this leaflet. The world is in danger."' },
        { name: '"Madame, madame, a moment of your time."' },
        { name: 'Bah. The fools are throwing them away' },
        { name: 'You have warned them for the last time' },
        { name: 'Time to write an ultimatum' }
      ]
    },

    'brain-beam': {
      title: 'Brain Beam',
      description: 'Dupes are useful, but sometimes you need more enthusiastic and informed help. A brain beam can turn a dupe evil, making them a full-fledged minion.',
      reward: { gadget: 'brain-beam', plans: ['graviton-gun'] },
      steps: [
        { name: 'Create an amplifier helmet', type: 'hardware', count: 5 },
        { name: 'Add a beam generator to the helmet', type: 'sprocket', count: 1 },
        { name: 'Tune the beam for evil' },
        { name: 'Find a test subject', type: 'dupe', count: 1 }
      ]
    },
    'minion': {
      title: 'Join us!',
      description: 'Convince a dupe to join your cause. Together, you can rule the world. Well, the minion won\'t rule as such, but no need to explain that part to them.',
      reward: { loot: { type: 'minion', count: 1 } },
      steps: [
        { name: '"Thanks for coming, please sit in that chair. Make yourself comfortable."', type: 'dupe', count: 1 },
        { name: '"I\'m going to need you to put on this helmet. Don\'t worry. This is for science."' },
        { name: 'Aim the brain beam at the helmet.' },
        { name: '"Welcome to the dark side. Mwahahaha!"' }
      ]
    },
    
    'graviton-gun': {
      title: 'Graviton Gun',
      description: 'Now that you have laid the groundwork, it is time to work towards your ultimate goal. A graviton gun will let you manipulate gravity itself. With it, you can maneuver the moon directly in front of the sun and cause a total eclipse.',
      reward: { gadget: 'graviton-gun' },
      steps: [
        { name: 'Build a sturdy casing and reinforced scaffolding', type: 'hardware', count: 250 },
        { name: 'Only a very powerful energy source will be able to power this device', type: 'transducer', count: 1 },
        { name: 'Add  sprockets to convert the energy into a directed beam', type: 'sprocket', count: 2 },
        { name: 'Focus the beam with a lens', type: 'lens', count: 1 },
        { name: 'Perfect diamonds refract the beam into discrete gravitons', type: 'diamond', count: 2 }
      ]
    },
    'eclipse': {
      title: 'Eclipse the World',
      description: 'With your graviton gun, move the moon in front of the sun, blocking sunlight forever',
      reward: { win: 'eclipse' },
      steps: [
        { name: 'Deliver your ultimatum to the world', type: 'ultimatum', count: 1 },
        { name: 'Provide an interview for the 6 o\'clock news.' },
        { name: '"Well the graviton gun is really a marvel of science."' },
        { name: '"Is one million dollars really so much?"' },
        { name: '"Won\'t somebody please think of the children?"' },
        { name: 'Turn on the graviton gun' }
      ]
    }
 /*
    '': {
      title: '',
      description: '',
      reward: { },
      steps: [
        { name: '' },
        { name: '' },
        { name: '' }
      ]
    },
*/
  };

  var gadgets = {
    'spy-scam': {
      title: 'Fake Government Agency',
      description: 'The perfect cover. You can pretend to be a secret agent and get money and help from the gullible.',
      plans: ['spy-buck', 'spy-dupe']
    },
    'raygun': {
      title: 'Raygun Mk I',
      description: 'A concrete representation of your villainous aspirations. The raygun will allow you to perform higher-level larceny than words alone.',
      plans: [ 'liquor-store', 'jeweler' ]
    },
    'hardware-hut': {
      title: 'Hardware Hut',
      description: 'Ok. This isn\'t technically a gadget. But they do allow bulk orders of common hardware.',
      plans: [ 'small-hardware', 'medium-hardware', 'large-hardware', 'transducer-deal' ]
    },
    'lockpick': {
      title: 'Crude Lockpick',
      description: 'Your latest invention is a new improvised lockpick! Well, its a hairpin that you stole from some old lady. But it works.',
      plans: [ 'junkyard', 'telescope' ]
    },
    'brain-beam': {
      title: 'Brain Beam',
      description: 'This beam is tuned for evil. Combined with an amplifying helmet, it can be used to turn hapless dupes into enthusiastic minions.',
      plans: [ 'minion', 'bank' ]
    },
    'graviton-gun': {
      title: 'Graviton Gun',
      description: 'It is complete! A gun that will let you reverse the forces of gravitation itself! Now you can implement your final plan to eclipse the world and hold sunlight for ransom.',
      plans: [ 'eclipse' ]
    }
  };

  var loot = {
    'buck': {
      title: 'Bucks',
      description: 'The most liquid of all loot, bucks can be used to buy most anything else.'
    },
    'dupe': {
      title: 'Dupes',
      description: 'The ultimate cannon fodder, these people do your bidding without even realizing it.'
    },
    'minion': {
      title: 'Minions',
      description: 'These assistants are as useful as they are expendable. Minions can be used to expand the scope of your operations and rake in even more loot.'
    },
    'hardware': {
      title: 'Basic Hardware',
      description: 'The nuts and bolts of any brilliant plan are, quite literally, nuts and bolts. Basic hardware is required for most other things.'
    },
    'transducer': {
      title: 'Phase Transducers',
      description: 'The phase transducer is the most basic tool used for callibration and final finish of every precision project. Don\'t look into the beam.'
    },
    'sprocket': {
      title: 'Sprocket Cruxes',
      description: 'A sprocket crux, as everybody knows, is an essential piece in any raygun\'s hydraulic infuser coil. They are often thrown away by careless mechanics.'
    },
    'diamond': {
      title: 'Perfect Diamond',
      description: 'I could bore you with technical details about clarity and size. But let\'s just be honest here: Oooh! Sparkly!'
    },
    'lens': {
      title: 'Telescopic Lens',
      description: 'A precisely-ground lens well-suited to stargazing. Or evil. It can be used for evil too.'
    },
    'ultimatum': {
      title: 'Ultimatum to the World',
      description: 'This is your final ultimatum. The world will deliver one million dollars to you or face eternal darkness. Now to deliver it...'
    }
  };

  var module = {
    plans: plans,
    gadgets: gadgets,
    loot: loot,
    start: ['start'],
    win: {
      eclipse: eclipseText
    }
  };

  return module;
});
