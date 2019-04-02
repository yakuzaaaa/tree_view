import Raphael from './raphael/raphael';

class Node {
  constructor(label, x, y) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.children = [];
  }

  addChild (node) {
    this.children.push(node);
  }
}

const root = new Node("Root", 100, 100);
root.addChild(new Node('child-1', 120, 200));
root.addChild(new Node('child-2', 120, 300));
root.addChild(new Node('child-3', 120, 400));
root.addChild(new Node('child-4', 120, 500));
root.addChild(new Node('child-5', 120, 600));
root.addChild(new Node('child-6', 120, 700));
root.addChild(new Node('child-7', 120, 800));
const root2 = new Node("Root-2", 100, 900);
const PIN_RADIUS = 10;
const tree = [
  root,
  root2,
];
const p = Raphael(100, 100, 1000, 1000);

function drawTree (tree) {
  tree.forEach(node => {
    const { x, y } = node;

    const path = p.path(["M", x, y, "C", x, y, x, y + 100, x + 20, y + 100]);
    resetPathHighlight(path);

    const pin = p.circle(x, y, PIN_RADIUS);
    pin.attr({
      fill: "rgb(75,75,75)"
    });

    path.mouseover(() => { highlightPath(path); });
    pin.mouseover(() => { highlightPath(path); });
    pin.mouseout(() => { resetPathHighlight(path); });
    path.mouseout(() => { resetPathHighlight(path); });

    if (node.children.length > 0)
      drawTree(node.children);
  });

  function highlightPath (path) {
    path.attr({
      'stroke-width': 6,
      'stroke': '#ff0000'
    });
  }

  function resetPathHighlight (path) {
    path.attr({
      'stroke-width': 4,
      'stroke': '#00ff00'
    });
  }
}

drawTree(tree);