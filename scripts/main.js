let typedTextOptions = {
    strings: ['webapps.','applications.','UIs.','designs.','changes.',"solutions."],
    typeSpeed: 120,
    backSpeed: 90,
    loop: true
}
let typedTextInstance = new Typed('.ideas',typedTextOptions);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});
let carouselOptions = {
    onCycleTo: null,
    enableTouch: false,
    numVisible: 3
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, carouselOptions);    
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });


let scrollspyOptions = {
    
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, scrollspyOptions);
});


