(function () {
    window.addEventListener("DOMContentLoaded", (event) => {
        let burger = document.getElementById("burger"),
            nav = document.getElementById("main-nav");

        burger.addEventListener("click", function (e) {
            this.classList.toggle("is-open");
            nav.classList.toggle("is-open");
        });

        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides =
                document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 5000); // Change image every 2 seconds
        }
    });
})();