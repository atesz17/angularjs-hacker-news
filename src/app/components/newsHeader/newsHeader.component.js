(function() {
  'use strict';

  angular
    .module('hnApp')
    .component('newsHeader', {
      templateUrl: 'app/components/newsHeader/newsHeader.tmpl.html',
      controller: NewsHeaderController
    });

  function NewsHeaderController() {
  }
})();
