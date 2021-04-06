//h2 and .under-title-section fading in while scrolling

const h2 = document.querySelector('h2')
document.addEventListener('scroll', (e) => {
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    h2.style.setProperty('--percentage', `${scrolled * 550}%`)
})

const section = document.querySelector('.under-title-section')
document.addEventListener('scroll', (e) => {
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    section.style.setProperty('--percentage', `${scrolled * 550}%`)
})


//<-----covering bottom of the parallax image - doesn't work----->

//const parallax = document.querySelector('.parallax-cover')
//document.addEventListener('scroll', (e) => {
//  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
//parallax.style.setProperty('--percentage', `${scrolled * 10}%`)
//})



//fade out while scrolling

//var article = document.getElementById('article');

//function fadeOutOnScroll(element) {
//if (!element) {
//return;
//}

//var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
//var elementHeight = element.offsetHeight;
//var scrollTop = document.documentElement.scrollTop;

//var opacity = 1;

//if (scrollTop > distanceToTop) {
//opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
//}

//if (opacity >= 0) {
//element.style.opacity = opacity;
//}
//}

//function scrollHandler() {
//fadeOutOnScroll(article);
//}

//window.addEventListener('scroll', scrollHandler);



//sliding h3, h4, h4, h6, .div-h3, .div-h4, .div-h5, .div-h6 while scrolling

var $animation_elements = $('h3,h5,.div-h3,.div-h5,h4,h6,.div-h4,.div-h6');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
