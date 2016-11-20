(function() {
  'use strict';

  angular
    .module('hnApp')
    .component('newsContainer', {
      templateUrl: 'app/components/newsContainer/newsContainer.tmpl.html',
      controller: NewsContainerController
    });

  function NewsContainerController() {
  }
})();
