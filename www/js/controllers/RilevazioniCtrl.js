app.controller('RilevazioniCtrl', function ($scope, $stateParams, ionicMaterialInk, $http) {
    //ionic.material.ink.displayEffect();
    //ionicMaterialInk.displayEffect();

/*
        $scope.generateData = function(){
          var sevenRandNumbers = function(){
            var numberArray = [];
            for (var i=0;i<7;i++){
              numberArray.push(Math.floor((Math.random()*100)+1));
            }
            return numberArray;
          };
          var valori = {
            labels : ["08:00","09:00","10:00","11:00","12:00","13:00","14:00"],
            datasets : [
              {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [20.1,20.2,20.5,20.9,21,22.2]
              }
            ]
          };
          


        $scope.generateData();



*/

        var full = 'https://tagweb.herokuapp.com';
        var labels = [];
        var dataset = {                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : []};
        var datasets = [dataset];

        var valori = {labels,datasets};

        $http.get(full+'/getLastMarked/8').success(
                function(data){
                    data.reverse();
                    for (i=0 ; i < data.length; i++){
                        valori.labels[i] = new Date(data[i].ts).getHours();
                        valori.datasets[0].data[i] = parseFloat(data[i].data.temp);
                    }
                    $scope.myChart = {"data": valori, "options": {} };
        
                }).error(
                  function(error){
                  console.log("errore "+error);
                });



});