/*
21. Merge Two Sorted Lists
Easy
Topics
Companies
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.


*/
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
};

class mergeSortedList {
    mergeTwoList(list1, list2) {
        // array to temp store values
        let arr = [];
        // push values of first list linkedlist
        while (list1 !== null) {
            arr.push(list1.data);
            list1 = list1.next;
        }
        // push values of list2 linkedlist
        while (list2 !== null) {
            arr.push(list2.data);
            list2 = list2.next;
        }
        // sort the values now that are pushed in the array
        arr.sort((a, b) => a - b);
        // create a new list with sorted data
        let temp = new Node(-1);
        let head = temp;
        for (let value of arr) {
            temp.next = new Node(value);
            temp = temp.next;
        }
        head = head.next; // skip the initial placeholder node
        // return the linked list
        return head;
    }
};

// Create a hard-coded linked list:
// 2 -> 4 -> 8 -> 9
let a = new Node(2);
a.next = new Node(4);
a.next.next = new Node(8);
a.next.next.next = new Node(9);

// Create another hard-coded linked list:
// 1 -> 3 -> 8 -> 10
let b = new Node(1);
b.next = new Node(3);
b.next.next = new Node(8);
b.next.next.next = new Node(10);

let mergedList = new mergeSortedList().mergeTwoList(a, b);

while (mergedList !== null) {
    console.log(mergedList.data);
    mergedList = mergedList.next;
}



console.log('~~~~~~~~~~~~~ Linkedlist ~~~~~~~~~~~~~~~~~~~~~~~~~');
// Not needed for this problem, just for practice. 
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
};

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count ++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }
};

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(6);
let node4 = new ListNode(7);
node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);

console.log(list.head.next.data)

let first = list.getFirst();
console.log("the first node:",first);

let last = list.getLast();
console.log("the last node:",last);

let currentSize = list.size();
console.log("The current size of our list:", currentSize);


console.log('~~~~~~~~~~~~~~~~ Recursive Approach Merging 2 LinkedList ~~~~~~~~~~~~~~~');

class ListNode2 {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

let mergeTwoListsRecursive = function(list1, list2) {
    if (list1 === null) {
         return list2;
     }
     if (list2 === null) {
         return list1;
     }
     
     if (list1.val < list2.val) {
         list1.next = mergeTwoListsRecursive(list1.next, list2);
         return list1;
     } else {
         list2.next = mergeTwoListsRecursive(list1, list2.next);
         return list2;
     }
     
};

let list1 = new ListNode2(2);
list1.next = new ListNode2(4);
list1.next.next = new ListNode2(8);
list1.next.next.next = new ListNode2(9);

let list2 = new ListNode2(1);
list2.next = new ListNode2(3);
list2.next.next = new ListNode2(8);
list2.next.next.next = new ListNode2(10);


let mergedList2 = mergeTwoListsRecursive(list1, list2);
console.log('recursive linked list: ');
while (mergedList2 !== null) {
    console.log(mergedList2.val);
    mergedList2 = mergedList2.next;
}