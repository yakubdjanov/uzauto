// курсор start//
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
        $(".js-btn-top").addClass("show")
    } else {
        $(".js-btn-top").removeClass("show")
    }
})

$(".js-btn-top").click(function (e) {
    e.preventDefault();
    $("html").animate({
        scrollTop: 10
    }, 1)
})
// курсор end//

// меню start//
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// меню end//

// slider
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className = "active";
}
// slider