angular.module('app.services', [])

.service('Books', ['$http', 'baseAPIUrl', function($http, baseAPIUrl){

  function getList () {
    return $http.get(baseAPIUrl + '/books')
      .then(function (response) {
        return response.data;
      });
  }
  
  function getItem (id) {
    return $http.get(baseAPIUrl + '/book/' + id)
      .then(function (response) {
        return response.data[0]; //!WTF! Why array? 
      });
  }
  
  angular.extend(this, {getList: getList, getItem: getItem});
}]);
