// On Scroll Navbar
$(window).scroll(function() {
    if ($(window).scrollTop() > 40) {
        $("header").addClass("show-on-scroll-navbar");
        // $("header").slideDown();
    }
    else {
        $("header").removeClass("show-on-scroll-navbar");
        // $("header").slideUp();
    }
});


// Mobile Navbar
function openNav() {
    $("#open-button").attr("src", "./src/assets/icons/XIcon/icons8-menu.gif");
    $("#on-click-mobile-navbar").css("display", "flex");
}

function closeNav() {
    $("#on-click-mobile-navbar").css("display", "none");
}


// Social Icons Animation on Hover
// Twitter
$("#socials-twitter").hover(function() {
    $("#socials-twitter-icon").attr("src", "./src/assets/icons/Twitter/icons8-twitter.gif");
}, function() {
    $("#socials-twitter-icon").attr("src", "./src/assets/icons/Twitter/icons8-twitter.svg");
});

// GitHub
$("#socials-github").hover(function() {
    $("#socials-github-icon").attr("src", "./src/assets/icons/GitHub/icons8-github.gif");
}, function() {
    $("#socials-github-icon").attr("src", "./src/assets/icons/Github/icons8-github.svg");
});

// Instagram
$("#socials-instagram").hover(function() {
    $("#socials-instagram-icon").attr("src", "./src/assets/icons/Instagram/icons8-instagram.gif");
}, function() {
    $("#socials-instagram-icon").attr("src", "./src/assets/icons/Instagram/icons8-instagram.svg");
});