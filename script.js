//add active class on click
const dot = document.querySelector('.dot');
const sec = document.querySelector('.sec');
dot.onclick = function(){
    dot.classList.toggle('active')
    sec.classList.toggle('active')
    //toggle method allows us to addd/remove a class name from the targetted element by checking the elements class attributes.
    //it works similarly to an on/off electric switch button.
}

document.addEventListener("mousemove", function(e){
//mousemove event works when a pointer moves within th eweb tag or around the element. Everytime the pointer moves on the required part of the page, the the mousemove executes and operates the code.
    const dot = document.querySelector(".dot");
    dot.style.left = e.pageX + 'px';
    //pageX property returns the X(horizontal) coordinate(in pixels) at which the mouse was clicked, relative to left edge of the entire document
    dot.style.top = e.pageY + 'px';
    //pageY property returns the Y (vertical) coordinate in pixels of the event relative to the whole document. This property takes into account any vertical scrolling of thr page.

})