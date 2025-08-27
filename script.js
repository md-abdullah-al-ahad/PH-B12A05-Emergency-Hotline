const heartIcons = document.querySelectorAll(".heart-icon");
const heartIconText = document.querySelector("#heart-icon-text");
const copyButtons = document.querySelectorAll(".copy-button");
const copyButtonText = document.querySelector("#copy-text");
for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        let count = parseInt(heartIconText.textContent);
        heartIconText.textContent = count + 1;
    });
}

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
        const card = copyButtons[i].closest(".card-parent");
        const number = card.querySelector(".number-text").textContent.trim();
        navigator.clipboard.writeText(number);
        alert(`নাম্বার কপি হয়েছে - ${number}`);
        let count = parseInt(copyButtonText.textContent);
        copyButtonText.textContent = count + 1;
    });
}
