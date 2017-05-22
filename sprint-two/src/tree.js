var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newChild = Tree(value);
	newChild.parent = this;
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

treeMethods.removeFromParent = function(target){
	var searchChild = function(tree){

		for (var i = 0; i < tree.children.length; i++) {
			if (tree.children[i].value === target) {
				tree.children[i].parent = null;
				tree.children.splice(i,1);

			} else {
				searchChild(tree.children[i]);
			}
		}
	}
	searchChild(this);
}
		//1
	// 2      3
 //  7       8   9


var tree = Tree(1);
debugger;
tree.addChild(2);
tree.addChild(3);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
tree.children[1].addChild(9);
tree.removeFromParent(9);

tree.contains(9);
