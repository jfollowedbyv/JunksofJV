console.log("Portfolio Loaded");

// Example navbar shadow on scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(255, 255, 255, 0.8)";
    }else{
        navbar.style.background = "transparent";
    }

});