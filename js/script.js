document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("background"),
        t = document.querySelectorAll(".tab"),
        n = ["1.gif", "2.png", "3.jpg", "4.png", "5.png", "6.png", "7.jpg", "8.png", "9.jpg"],
        a = localStorage.getItem("lastImage"),
        o = a;
    for (; o === a; ) o = n[Math.floor(Math.random() * n.length)];
    localStorage.setItem("lastImage", o),
        (e.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/wallpaper/${o}')`),
        (e.style.backgroundSize = "cover"),
        (e.style.backgroundPosition = "center"),
        t.forEach((e) => {
            (e.style.backgroundColor = "rgba(4, 37, 40, 0.8)"), (e.style.color = "#ffffff");
        });
});
const discordIcon = document.getElementById("discord-icon"),
    copyMessage = discordIcon.querySelector(".copy-message");
function calculateAge(e) {
    let t = new Date(),
        n = new Date(e),
        a = t.getFullYear() - n.getFullYear(),
        o = n.getMonth(),
        r = n.getDate();
    return (t.getMonth() < o || (t.getMonth() === o && t.getDate() < r)) && a--, a;
}
function updateAge(e) {
    document.getElementById("age").textContent = calculateAge(e);
}
discordIcon.addEventListener("click", (e) => {
    e.preventDefault();
    let t = document.createElement("textarea");
    (t.value = "ecztassy"), document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t), (copyMessage.style.opacity = 1);
}),
    discordIcon.addEventListener("mouseout", () => {
        setTimeout(() => {
            copyMessage.style.opacity = 0;
        }, 1500);
    }),
    (copyMessage.style.opacity = 0);
const birthdate = "2007-12-17";
function hasBirthdayPassed(e) {
    let t = new Date(),
        n = new Date(e).getMonth(),
        a = new Date(e).getDate();
    return t.getMonth() > n || (t.getMonth() === n && t.getDate() >= a);
}
updateAge(birthdate),
    hasBirthdayPassed(birthdate) && updateAge(birthdate),
    setInterval(() => {
        hasBirthdayPassed(birthdate) && updateAge(birthdate);
    }, 864e5);
const tabs = document.querySelectorAll(".tab");
tabs.forEach((e) => {
    let t = e.getAttribute("data-section");
    e.addEventListener("mouseover", () => {
        e.textContent = t;
    }),
        e.addEventListener("mouseout", () => {
            e.textContent = "";
        });
}),
    document.addEventListener("click", function (e) {
        var t = document.getElementById("menuLinks"),
            n = document.querySelector(".hamburger-menu-img");
        t.contains(e.target) || e.target === n || (t.style.display = "none");
    });
