var Y = 0;
var destination = 0;
var speed = 7;
var scroller;

//top to element/end
function initScroll(elementId) {
    destination = document.getElementById(elementId).offsetTop;	//get offset position of element

    scroller = setTimeout(function(){initScroll(elementId)}, 0.5); //executes function initScroll, in an interval of 1 second

    Y += speed;

    if (Y >= destination) {		//keep going till its reach destination(position of the element)
        clearTimeout(scroller);	//stops initScroll function from running
    }

    window.scroll(0, Y); //scrolls down from 0 to y pixels

}

window.onscroll = function () {Y = this.pageYOffset;}	//lets you continuously click onto another element and scrolls down without it breaking

//end to top/element
function toTop(elementId) {
    destination = document.getElementById(elementId).offsetTop;

    scroller = setTimeout(function (){toTop(elementId);}, 0.5);

    Y -= speed;

    if (Y <= destination) {
        clearTimeout(scroller);
    }

    window.scroll(0, Y);
}
