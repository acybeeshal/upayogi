 
 //for the nav bar to make fix and close the dropdown button after the click
 document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide(); // Collapse the navbar
        }
      });
    });
  });

  //for the our team to make the 
    const container = document.getElementById("teamScroll");

  function scrollLeft() {
    container.scrollBy({ left: 300, behavior: "smooth" });
  }

  function scrollRight() {
    container.scrollBy({ left: 300, behavior: "smooth" });
  }