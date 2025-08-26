const heartIcons = document.querySelectorAll(".heart-icon");
const heartIconText = document.querySelector("#heart-icon-text");

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        let count = parseInt(heartIconText.textContent);
        heartIconText.textContent = count + 1;
    });
}
