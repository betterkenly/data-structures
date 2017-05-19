var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newChild = Tree(value);
	this.children.push(newChild);
};
// debugger;

treeMethods.contains = function(target) {

	var search = function(tree){
		if (tree.value === target) {
			return true;
		}
		for (var i = 0 ; i < tree.children.length ; i++) {
			var temp = search(tree.children[i]);
			if (temp === true) {
				return true;
			}
		}
		return false;
	}
	return search(this) === true? true: false;
};


var tree = Tree(5);
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
tree.contains(7);
