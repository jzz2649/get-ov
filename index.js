module.exports = function getV(obj) {
  return function(){
    var arr = Array.prototype.slice.call(arguments);
    return arr.reduce(function(result, props){
      return result ? result[props] : undefined;
    }, obj);
  }
};
