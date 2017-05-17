var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var gone = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var value = storage[gone];
    delete storage[gone];
    gone++;
    return value;
  };

  someInstance.size = function() {
    var measure = counter - gone;
    if( measure < 0 ){
      return 0;
    }else{
      return measure;
    }
  };

  return someInstance;
};
