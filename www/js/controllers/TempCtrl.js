app.controller('TempCtrl', function ($scope, $stateParams, ionicMaterialInk, $http) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

       $scope.temp = "";
       $scope.ts = "";

       var full = 'https://tagweb.herokuapp.com';
        

       $http.get(full+'/getLastData').success(
                function(data){
                    $scope.temp = data[0].data.temp;
                    $scope.ts = data[0].timestamp;
                }).error(
                  function(error){
                  console.log("errore "+error);
                });
        setInterval( function(){
            $http.get(full+'/getLastData').success(
                function(data){
                    $scope.temp = data[0].data.temp;
                    $scope.ts = data[0].timestamp;
                }).error(
                  function(error){
                  console.log("errore "+error);
                });}

            ,2000);        




});