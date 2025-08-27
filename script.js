const heartIcons = document.querySelectorAll(".heart-icon");
const heartIconText = document.querySelector("#heart-icon-text");
const copyButtons = document.querySelectorAll(".copy-button");
const copyButtonText = document.querySelector("#copy-text");
const callButtons = document.querySelectorAll(".call-Button");
const historyContainer = document.querySelector(".history-container");
const cardHistory = document.querySelector(".card-history");

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

document.addEventListener("DOMContentLoaded", function () {
    const callButtons = document.querySelectorAll(".call-button");

    for (let i = 0; i < callButtons.length; i++) {
        callButtons[i].addEventListener("click", function () {
            const card = callButtons[i].closest(".bg-white");
            const number = card
                .querySelector(".mt-3.text-2xl.font-bold")
                .textContent.trim();
            const serviceName = card
                .querySelector(".service-name-text")
                .textContent.trim();
            const now = new Date();
            const localTime = now.toLocaleTimeString();
            const newHistory = document.createElement("div");
            newHistory.className =
                "bg-gray-50 shadow-sm px-4 py-4 flex justify-between items-center rounded-lg left-section";
            newHistory.innerHTML = `
                <div>
                    <p class="mandurai-font history-service-name">${serviceName}</p>
                    <p class="history-number">${number}</p>
                </div>
                <div class="right-section">
                    <p class="history-time">${localTime}</p>
                </div>
            `;
            const cardHistory = document.querySelector(".card-history");
            cardHistory.append(newHistory);
        });
    }
});
