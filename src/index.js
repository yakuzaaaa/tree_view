import Raphael from './raphael/raphael';

class Node {
  constructor(label) {
    this.label = label;
    this.children = [];
  }

  addChild(node) {
    this.node.push(node);
  }
}

const root = new Node("Root");
root.addChild(new Node('child-1'));
root.addChild(new Node('child-2'));
root.addChild(new Node('child-3'));
root.addChild(new Node('child-4'));
root.addChild(new Node('child-5'));
root.addChild(new Node('child-6'));
root.addChild(new Node('child-7'));

const tree =  [
  root  
];

function drawTree(tree) {
  const p = Raphael(0,0, 400, 400);
  tree.forEach(node => {
    p.circle(50, 50, 20);
  });
}
console.log("Hi");
drawTree(tree);