// https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/31394/JavaScript-solution-with-iteration

function inorderTraversal(root) {
    const stack = [];
    const res = [];
  
    while (root || stack.length) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        res.push(root.val);
        root = root.right;
      }
    }
  
    console.log(res)
    return res;
  }

inorderTraversal([1, null, 2, 3])