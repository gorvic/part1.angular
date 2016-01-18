angular
    .module('angulardevApp', [
        'app.advertises',
        'app.core'
    ])
    .config(
        function ($stateProvider, $urlRouterProvider) {
            //$stateProvider
            //    .run(function ($state) {
            //        $state.go('advertises'); //make a transition to movies state when app starts
            //    });
            //any url that doesn't exist in routes redirect to '/advertises'
            //$urlRouterProvider.otherwise('/advertises');

            //http://stackoverflow.com/a/23198743

        })
    .controller('MainController', function () {

    })
;
//TODO: 0. Использовать TODO и подобный функционал в редакторах
//TODO: 1. тестирование на jasmine
//TODO: 2. тестирование на protractor
//TODO: 3. разобраться с git flow и его применением в WS
//TODO: 4. разобраться полностью с promise ($q, native, angular)
//TODO: 5. сделать во второй части login/logout w/ Laravel + сделать pagination в списке
//TODO: 6. build процедуры с grunt
//TODO: 7. автоматический линтинг и JSCS
//TODO: 8. Аналог функционала по хоткеям, ливтемплейтам, макросам, плагинам в Саблайме
//TODO: 9. Выучить CSS3("Специалист") + bootstrap
//TODO: 10. Разобраться хорошо с ui-router
//TODO: 11. Перехватить categories через parent_id
//TODO: 12. Хорошо освежить regexp







