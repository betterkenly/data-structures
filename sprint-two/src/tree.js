var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
debugger;
treeMethods.addChild = function(value) {
	var kid = Tree(value);
	this.children.push(kid);
};
// debugger;

treeMethods.contains = function(target) {
debugger;
	var search = function(obj){
		if( obj.value === target ){
			return true;
		}
			for( var i = 0 ; i < obj.children.length ; i++ ){
				var temp = search(obj.children[i]);
				if(temp === true){
					return true;
				}
			}
			return false;
			// return false;
	};
	if(search(this)){
		return true;
	}else{
		return false;
	}
};


var tree = Tree(5);
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
tree.contains(7);
