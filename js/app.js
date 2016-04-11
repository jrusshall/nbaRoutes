var app = angular.module('nbaRoutes', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    $urlRouterProvider
      .otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'js/home/homeTmpl.html',
        controller: 'homeCtrl'
    })
    .state('teams', {
        url: '/teams/:team',
        templateUrl: 'js/teams/teamTmpl.html',
        controller: 'teamCtrl',
        resolve: {
          teamData: function(teamService, $stateparams) {
            return teamService.getTeamData($stateParams.team);
          }
        }
    })
});
