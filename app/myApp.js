/**
 * Created by Administrator on 2017/9/27/027.
 */
var app=angular.module("myApp",["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when('/login',{
        templateUrl:"html/login.html",
        controller:"loginCont"
    }).when('/content',{
        templateUrl:"html/content.html",
        controller:"contentCont"
    }).when('/contentPage', {
        templateUrl:"html/contentPage.html",
        controller:"contentPageCont"
    }).when('/contentPage/workPlan',{
        templateUrl:"html/workPlan.html",
        controller:"workPlanCont"
    }).when('/contentPage/workName',{
        templateUrl:"html/workName.html",
        controller:"workNameCont"
    }).otherwise({
        redirectTo:"/login"
    })
}]);
