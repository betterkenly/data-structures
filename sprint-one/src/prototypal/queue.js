var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.gone = 0;

  return someInstance;
};

var queueMethods = {};

  queueMethods.enqueue = function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  };

  queueMethods.dequeue = function() {
    var value = this.storage[this.gone];
    delete this.storage[this.gone];
    this.gone++;
    return value;
  };

  queueMethods.size = function() {
    var measure = this.counter - this.gone;
    if( measure < 0 ){
      return 0;
    }else{
      return measure;
    }
  };
//prototypal



