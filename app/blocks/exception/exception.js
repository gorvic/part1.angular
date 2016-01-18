(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    /* @ngInject */
    function exception($q, logger) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function(e) {
                var thrownMessage;
                var newMessage;

                if (e.data && e.data[0].message) {
                    thrownMessage = '\n' + e.data[0].message;
                    newMessage = message + thrownMessage;
                }
                e.data.description = newMessage;
                logger.error(newMessage);
                return $q.reject(e);
            };
        }
    }
})();
