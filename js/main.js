require.config({
  paths: {
      'angular' : 'bower_components/angular/angular',
      'jQuery': 'bower_components/jquery/jquery'
  },
  shim: {
      ngResource: {
          deps: ['angular'],
          exports: 'angular'
      },
      ngCookies: {
          deps: ['angular'],
          exports: 'angular'
      },
      ngProgress: {
          deps: ['angular'],
          exports: 'angular'
      },
      ngRoute: {
      	deps: ['angular'],
        exports: 'angular'
      },
      angular: {
          exports : 'angular'
      }
  },
  baseUrl: 'js'
});

require(['app'], function (app) {
  app.init();
});