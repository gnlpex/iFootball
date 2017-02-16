angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('iFOOTBALLMANAGER', {
    url: '/page1',
    templateUrl: 'templates/iFOOTBALLMANAGER.html',
    controller: 'iFOOTBALLMANAGERCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu', {
    url: '/page7',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('competitions', {
    url: '/page8',
    templateUrl: 'templates/competitions.html',
    controller: 'competitionsCtrl'
  })

  .state('standings', {
    url: '/page9',
    templateUrl: 'templates/standings.html',
    controller: 'standingsCtrl'
  })

  .state('liveScore', {
    url: '/page10',
    templateUrl: 'templates/liveScore.html',
    controller: 'liveScoreCtrl'
  })

  .state('fixtures', {
    url: '/page11',
    templateUrl: 'templates/fixtures.html',
    controller: 'fixturesCtrl'
  })

  .state('commentaries', {
    url: '/page12',
    templateUrl: 'templates/commentaries.html',
    controller: 'commentariesCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});