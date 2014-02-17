/*
 * main.js
 *
 */

/*global: require */

require.config({
  'baseUrl': '..',
  'paths': {
    'jquery': 'lib/require-jquery',
    'underscore': 'lib/underscore-min',
    'backbone': 'lib/backbone-min',
    'jquery-mobile': 'lib/jquery.mobile-1.4.0-alpha.2.min'
  },
  'shim': 
  {
    backbone: {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    'jquery-mobile': {
      'deps': ['jquery']
    },
    underscore: {
      'exports': '_'
    },
  }   
});

require(['jquery', 'underscore', 'backbone',
         'js/Game',
         'js/tutorial', 'js/dark-scheme'],
function ($, _, Backbone,
          Game,
          tutorialModule,
          darkSchemeModule) {
  'use strict';

  var game;

  function initialize()
  {
    $('#app').show();

    if (window.location.hash &&
        window.location.hash !== '#' &&
        window.location.hash !== '' &&
        window.location.hash !== '#intro-page')
    {
      window.location = 'index.html';
    }

    $(document).on('pagechange', function () {
      $.each($('ul.listview'), function(index, val) {
          _.defer(function () {
            $(val).listview().listview('refresh', true); 
          });
      });
      _.defer(function () {
        $('#gadget-list').enhanceWithin();
      });
    });

    $('#tutorial-button').click(function () {
//      $(document).one('pageinit', function () {
        _.defer(function () {
          game = new Game(tutorialModule);
        });
//      });
    });

    $('#dark-scheme-button').click(function () {
//      $(document).one('pageinit', function () {
        _.defer(function () {
          game = new Game(darkSchemeModule);
        });
      });
//    });
    $('#restart-button').click(function () {
      window.location = "index.html";
      window.location.reload(true);
    });
  }

  $(document).on('mobileinit', initialize);

  require(['jquery-mobile'], function() {
    // Do nothing
  });
});
