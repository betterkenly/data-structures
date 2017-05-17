var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.gone = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.counter] = value;
	this.counter++;
};

Queue.prototype.dequeue = function() {
	var value = this.storage[this.gone];
	delete this.storage[this.gone];
	this.gone++;
	return value;
};

Queue.prototype.size = function() {
	var measure = this.counter - this.gone;
	return measure < 0? 0: measure;
}


