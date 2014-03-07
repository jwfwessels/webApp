(function() {

    require(["app/data", "helper/util", "helper/logger"], function (data, util, logger) {
        //This function is called when scripts/helper/util.js is loaded.
        //If util.js calls define(), then this function is not fired until
        //util's dependencies have loaded, and the util argument will hold
        //the module value for "helper/util".
        alert('util module : ' + util.doubleItMethod(10));


        //This function is called when scripts/app/data.js is loaded.
        //If data.js calls define(), then this function is not fired until
        //data's dependencies have loaded, and the util argument will hold
        //the module value for "app/data".
        alert('data module [0] : ' + data.storedData[0]);
        alert('data module [1] : ' + data.storedData[1]);

        logger.logThePair();
    });

})();