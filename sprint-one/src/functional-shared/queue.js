var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.gone = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

	enqueue : function(value){
		var key = this.counter;
		this.storage[key] = value;
		this.counter++;
	},
	dequeue : function(){
		var value = this.storage[this.gone];
		delete this.storage[this.gone];
		this.gone ++;
		return value;
	},
	size : function(){
		var measure = this.counter - this.gone;
		return measure < 0? 0: measure;
	}
};


