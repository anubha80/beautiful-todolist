exports.getDate= function(){
    let options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    let today  = new Date();
    return today.toLocaleDateString("en-US", options);
}


exports.getDay= function(){
    let options = { weekday: 'long' };
    let today  = new Date();
    return today.toLocaleDateString("en-US", options);
}

// instead of module.exports we can say exports