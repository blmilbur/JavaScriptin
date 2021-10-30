let toggle=false;

document.body.querySelector(".MenuIcon").addEventListener("click", function() {

    toggle = !toggle;

    if (toggle) {
        document.body.querySelector(".Menu").style.right = "0%";
    } else {
        document.body.querySelector(".Menu").style.right = "-100%";
    }

})