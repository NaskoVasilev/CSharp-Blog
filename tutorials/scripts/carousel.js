var slideIndex = 1;
$(".prev").click(() => {
    slideIndex -= 1;
    showSlides(slideIndex);
});
$(".next").click(() => {
    slideIndex += 1;
    showSlides(slideIndex);
});

showSlides(slideIndex);

function currentSlide(n) {
    slideIndex = n
    showSlides(slideIndex);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { 
        slideIndex = 1 
    }
    if (n < 1) { 
        slideIndex = slides.length 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}