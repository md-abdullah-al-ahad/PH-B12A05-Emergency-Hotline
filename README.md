# PH-B12A05-Emergency-Hotline

# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById() will return a single element not an array which is obvious because ids are unique. If the element is not found, it will return null.

getElementsByClassName() will return an collection of element which can be accessed as a regular array through indexing (0...n-1). As class name is not unique there can be multiple element with the same class and therefore it returns all of them. One particular thing about this method is that it will return a live collection that is if dom changes it will return the live ccollection which querySelectorAll() will not do.

querySelector() will return the first element matched with the given input in the (""). It can select any css element but we have to specify what it is. For example, if it is a id we have to use '#' if it is a class we have to use '.'. It can also choose other css selectors.

querySelectorAll() will return all the matched css selector only difference between querySelector that this will return a list of elements and the previous will return a single element. We can use all the css selector similar to querySelector(). If the dom is updated it will not be added in the list as it works as a static list.

# How do you create and insert a new element into the DOM?

Ans: To create a new element in the dom we can use the createElement() property. For example,
const newE = document.createElement("div");
this will create a new div element.

Then we can add classnames in the div element with the .className property. We can use the other things like textContent to modify the text inside the element. We can use innerHTML which is more easy.

To insert the created element in the dom we can use the appendChild() property. For example if we want to insert the new div element inside the main element of the html. We can write,

document.body.appendChild(newE);

# What is Event Bubbling and how does it work?

Ans: If an element is nested down in html. For example I have body, then a div inside it and then another div inside it and then a button. If I add event listener to all of the element and then click the button the button will be clicked but next the parent of it will be clicked then its parent will also be clicked this is how it will bubble up untill it will reach the root. To prevent this we can use the stopPropagation() method.

# What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is a way to use event bubbling to be more efficient. Instead of using a lot of eventListener to all the child item like I did in my assignment, We can use one event listener to the parent element and then check for the click of the child this way instead of looping through all the child elements to check the click we add event listener to the parent and when the click of the child bubble to the parent we check it and do our necessary functionality.

# What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() and stopPropagation() do different things in javascript. prefentDefault() is used to prevent the default behaviour of an element. For example, if a button is inside a form if we click the form the default behaviour is to reload the page and submit. If we want to prevent this we use this property. It does not prevent the bubbling up of an event.

On the other hand, stopPropagation() is used to prevent bubbling from happening to the parent element. If we add this to the element we want to have event listener if we don't want it to bubble up to its parent, we use stopPropagation(). It does not prevent the default behaviour of an element.
