document.addEventListener("DOMContentLoaded", function(event)
{
    document.documentElement.setAttribute("data-theme", "light");

    var themeSwitcher = document.getElementById("theme-switcher");

    themeSwitcher.onclick = function()
    {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var switchToTheme = currentTheme === "dark" ? "light" : "dark"
        document.documentElement.setAttribute("data-theme", switchToTheme);
    }

    const switcher = document.getElementsByClassName("theme-switcher-container") [0];
    const button = document.getElementsByClassName("button") [0];
    switcher.addEventListener("click", () =>
    {
        button.classList.toggle("inactive");
        switcher.classList.toggle("container-inactive");
    });
});