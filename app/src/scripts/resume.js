// Hidden Navbar appears on Scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > 40) {
        $("header").addClass("header");
        $("header").slideDown();
    }
    else {
        $("header").removeClass("header");
        $("header").slideUp();
    }
});
