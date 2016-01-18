(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    //TODO: Использовать ngResource для REST
    dataservice.$inject = ['$http', '$q', '$location', '$log', 'exception', 'logger'];

    /* @ngInject */
    function dataservice($http, $q, $location, $log, exception, logger) {

        var service = {
            getAdvertises: getAdvertises,
            getAdvertise: getAdvertise,
            getCities: getCities,
            getCategories: getCategories,
            save: save,
            deleteAdvertise: deleteAdvertise
        };

        var apiBaseURL = 'http://localhost:8888';

        return service;

        function save(advertise) {

            if (advertise.id) {
                return updateAdvertise(advertise);
            } else {
                return createAdvertise(advertise);
            }

        }

        function updateAdvertise(advertise) {

            return $http.put(apiBaseURL + '/ads/' + advertise.id, advertise)
                .then(success)
                .catch(fail);

            function success(response) {
                logger.success('Advertise was successfully updated');
                $location.path('/advertises');
            }

            function fail(response) {
                return exception.catcher('XHR Failed updating advertise: ')(response);
            }

        }

        function createAdvertise(advertise) {

            return $http.post(apiBaseURL + '/ads', advertise)
                .then(success)
                .catch(fail);

            function success(response) {
                logger.success('Advertise was successfully created');
                $location.path('/advertises');
            }

            function fail(response) {
                return exception.catcher('XHR Failed creating advertise')(response);
            }

        }

        function deleteAdvertise(advertise) {

            return $http.delete(apiBaseURL + '/ads/' + advertise.id)
                .then(success)
                .catch(fail);

            function success(response) {
                logger.success('Advertise ' + advertise.title+ ' was successfully deleted');
                //$location.path('/advertises');
            }

            function fail(response) {
                return exception.catcher('XHR Failed updating advertise: ')(response);
            }

        }


        function getAdvertises() {
            return $http.get(apiBaseURL + '/ads')
                .then(success)
                .catch(fail);  //shorthand for promise.then(null, errorCallback)

            function success(response) {
                return response.data;
            }

            function fail(response) {
                return exception.catcher('XHR Failed for getAdvertises')(response);
            }
        }

        function getAdvertise(id) {

            return $http.get(apiBaseURL + '/ads/view?id=' + id)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(response) {
                return exception.catcher('XHR Failed for getAdvertise ' + id)(response);
            }
        }

        function getCities() {
            return $http.get(apiBaseURL + '/cities')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getCities')(response);
            }
        }

        function getCategories() {
            return $http.get(apiBaseURL + '/categories')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getCategories')(e);
            }
        }

    }
})();
