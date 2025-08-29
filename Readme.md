What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById returns a single element that consists the id. getElementsByClassName returns all the elements that have that class. querySelector returns first matching css element, and querySelectorAll returns all of them.

How do you create and insert a new element into the DOM?
Ans: we can create a new element using createElement. we can insert it in the DOM by selecting and then adding the created element using apend child.

What is Event Bubbling and how does it work?
Ans: Event bubbling is the phenomenon of a event happening to a parent, then the parents parent and so on when an event happens to the child element.

What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation is adding event listener to parent to handle childs events via event bubbling. Its helpful due to helping reduce eventlisteners.

What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stops the default browser behaviour of an element, stopPropagation() stops event bubble from propagrating.