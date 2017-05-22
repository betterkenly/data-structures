

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //-->limitedArray;
  // this will eventually return an obj with prototype pro
};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // if the same person come back and want to insert another value, we replace the previous one
  var currentSlot = this._storage.get(index);
  if (!currentSlot) {
  	// currentSlot = [];
  	this._storage.set(index,[[k,v]]);
  }else{
    var exist = false;
    for (var i = 0 ; i < currentSlot.length ; i++) {
      if (currentSlot[i][0] === k) {
        exist = true;
        currentSlot[i] = [k,v];
      }
    }
    if (!exist) {
      currentSlot.push([k,v]);
    }
  }


};

HashTable.prototype.retrieve = function(k) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentSlot = this._storage.get(index);
  if (!currentSlot) {
  	return undefined;
  } else {
  	var result;
  	_.each(currentSlot, function(arr){
  		
  		if (arr[0] === k){
  			result = arr[1];
  		}
  	});
  	return result;
  }

};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
 ///[ , , [[k2,v2],[k1,v1]], ]; 
  var currentSlot = this._storage.get(index);
  _.each(currentSlot,function(each, i){
  	if (each[0] === k) {
  		currentSlot.splice(i,1);
  	}
  });

}
// debugger;
// [ , , ,[[k,v],[k,v]] , , , ];
var newHT = new HashTable();
newHT.insert('Steven', 'Tyler'); 
newHT.insert('Steven', 'fuck');
newHT.retrieve('Steven');
// newHT.insert('Steven', 'fuck');
// newHT.insert('Steven', 'Tyler');
// newHT.remove('Steven');

/*
 * Complexity: What is the time complexity of the above functions?
 */
// [, , , , , ,[[]] , ]

// [ , , ,[ [k, v], ], , , , , , ,]