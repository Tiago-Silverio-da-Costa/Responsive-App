let show = true;

const menuSection = document.querySelector(".menu-section")
const menutoggle = menuSection.querySelector(".menu-toggle")

menutoggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})