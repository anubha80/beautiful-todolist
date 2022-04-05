module.exports.getDate= getDate;

function getDate(){
    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    var today  = new Date();
    var finaldate= today.toLocaleDateString("en-US", options);
    return finaldate;
}

module.exports.getDay= getDay;

function getDay(){
    var options = { weekday: 'long' };
    var today  = new Date();
    var finaldate= today.toLocaleDateString("en-US", options);
    return finaldate;
}