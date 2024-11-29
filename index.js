


// window.onscroll = function() {scrollRotate()};
// function scrollRotate() {
//   var navimg = document.getElementById("roll");
//   console.log("yes am scrolling")
//   navimg.style.transform = "rotate("+ (window.pageYOffset/5) + "deg)"
// }


$(function() {
  var rotation = 0, 
      scrollLoc = $(document).scrollTop();
  $(window).scroll(function() {
      var newLoc = $(document).scrollTop();
      var diff = scrollLoc - newLoc;
      rotation += diff, scrollLoc = newLoc;
      var rotationStr = "rotate(" + rotation + "deg)";
      $("#roll").css({
          "-webkit-transform": rotationStr,
          "-moz-transform": rotationStr,
          "transform": rotationStr
      });
  });
})

