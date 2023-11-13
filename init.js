let darkmodetoggle = document.querySelector('#darkmodetoggle');

darkmodetoggle.addEventListener('change', ()=> {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('lightbtn');
  document.body.classList.toggle('lighttext');
  document.body.classList.toggle('darkimgicon');
  document.querySelector("sectionlinkedin").classList.toggle("darkimg");})


  var app = angular.module('MyApp', [])
        app.controller('MyController', function ($scope) {
            //This will hide the DIV by default.
            $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
        });