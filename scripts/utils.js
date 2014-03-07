var Utils = {};

//runs from 0-11
Utils.getDaysInMonth = function(date) {
    d = new Date(date);
    year = d.getFullYear();
    month = d.getMonth();
    console.log(d.toDateString() + " " + year + " " + month);
    return (month >= 0 && month < 12) ? new Date(year, month + 1, 0).getDate() : "not in range";
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * Returns a random number between min and max
 */

Utils.getRandomArbitary = function(min, max) {
    return Math.random() * (max - min) + min;
};

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */

Utils.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Utils.getRandomDateInCurrentMonth = function() {
    var day = Utils.getRandomInt(1, Utils.getDaysInMonth(new Date().getFullYear(), new Date().getMonth()));
    var d = new Date();

    d.setDate(day);
    return d;
};

//note sunday is 0!
Utils.getStartingDateOffset = function(year, month) {
    var d = new Date(year, month);
    result = d.getDay();
    result = (result !== 0) ? result : 7;
    return result - 1;
};

//returns week of the month that date falls in
Utils.getWeekOfMonth = function(date) {
    var d = new Date(date);
    day = d.getDate();
    offset = Utils.getStartingDateOffset(d.getFullYear(), d.getMonth()) - 1;
    result = Math.ceil((day + offset) / 7);
    return result;
};


console.log("loaded Utils");
