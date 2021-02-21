(function (exports) {
    function openModal(index) {
        console.log("image clicked..." + index);
        document.getElementById("imagegallery").style.display="block";
        const slides = document.getElementsByClassName("big");
        for (let i = 0; i <slides.length; i++) {
            slides[i].style.display ="none";
        }
        slides[index].style.display ="block";
    }

    function closeModal(){
        console.log("text");
        document.getElementById("imagegallery").style.display="none";
    }
    exports.setupSlides = function () {
        console.log("Setting up slides...");
        document.querySelectorAll('.slide').forEach((slide,index) => {
            slide.addEventListener('click', () => openModal(index));
        });
        document.querySelectorAll('#imagegallery img').forEach((slide) => {
            slide.addEventListener('click', closeModal);
        });
    }
})(window);
window.setupSlides();