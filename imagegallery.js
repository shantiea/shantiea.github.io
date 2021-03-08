(function (exports) {
    let slideIndex = 0;

    function nextSlide(){
        openModal(slideIndex + 1);
    }
    function previousSlide(){
        openModal(slideIndex - 1);
    }
    function openModal(index) {
        console.log("image clicked..." + index);
        document.getElementById("imagegallery").style.display="block";
        const slides = document.getElementsByClassName("big");
        const captionText = document.getElementById("caption");
        slideIndex = ((index % slides.length) + slides.length) % slides.length;
        for (let i = 0; i <slides.length; i++) {
            slides[i].style.display ="none";
        }
        slides[slideIndex].style.display ="block";
        captionText.innerHTML = slides[slideIndex].alt;
    }

    function closeModal(){
        console.log("text");
        document.getElementById("imagegallery").style.display="none";
    }
    exports.setupSlides = function () {
        console.log("Setting up slides...");
        document.querySelector("#prevButton").addEventListener("click",previousSlide);
        document.querySelector("#nextButton").addEventListener("click",nextSlide);
        document.querySelectorAll('.slide').forEach((slide,index) => {
            slide.addEventListener('click', () => openModal(index));
        });
        document.querySelectorAll('#imagegallery img').forEach((slide) => {
            slide.addEventListener('click', closeModal);
        });
    }
})(window);
window.setupSlides();