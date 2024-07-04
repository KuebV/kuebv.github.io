const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = "light"

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Content Loaded")
    const btn = document.querySelector(".toggle-mode");
    if (btn){
        btn.addEventListener("click", function () {
            if (prefersDarkScheme.matches) {
                document.body.classList.toggle("light-theme");
                var theme = document.body.classList.contains("light-theme")
                    ? "light"
                    : "dark";
            } else {
                document.body.classList.toggle("dark-theme");
                var theme = document.body.classList.contains("dark-theme")
                    ? "dark"
                    : "light";
            }
            console.log("Changing...")
        });

        console.log("Button Event Listening...")

    }
    else{
        console.log("Unable to load button")
    }
})
