const heartIcons = document.querySelectorAll(".heart-icon");
const heartIconText = document.querySelector("#heart-icon-text");
const heartIconText2 = document.querySelector("#heart-icon-text-2");
const copyButtons = document.querySelectorAll(".copy-button");
const copyButtonText = document.querySelector("#copy-text");
const copyButtonText2 = document.querySelector("#copy-text-2");
const callButtons = document.querySelectorAll(".call-button");
const historyContainer = document.querySelector(".history-container");
const cardHistory = document.querySelector(".card-history");
const clearButton = document.querySelector("#clear-button");
const coinText = document.querySelector("#coin-text");
const coinText2 = document.querySelector("#coin-text-2");
const hamburgerIcon = document.querySelector("#hamburger-icon");
for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        let count = parseInt(heartIconText.textContent);
        heartIconText.textContent = count + 1;
        heartIconText2.textContent = count + 1;
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
        copyButtonText2.textContent = count + 1;
    });
}

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function () {
        const coin = parseInt(coinText.textContent);
        if (coin < 20) {
            alert(
                "❌ আপনার পর্যাপ্ত কয়েন নেই! কল করার জন্য কমপক্ষে ২০টি কয়েন প্রয়োজন"
            );
            return;
        }
        coinText.textContent = coin - 20;
        coinText2.textContent = coin - 20;
        const card = callButtons[i].closest(".card-parent");
        const number = card.querySelector(".number-text").textContent.trim();
        const serviceName = card
            .querySelector(".service-name-text")
            .textContent.trim();
        const serviceNameEnglish = card
            .querySelector(".service-name-text-english")
            .textContent.trim();
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        const newHistory = document.createElement("div");
        newHistory.className =
            "bg-gray-50 shadow-sm px-4 py-4 flex justify-between items-center rounded-lg left-section";
        newHistory.innerHTML = `
            <div class="left-section">
                <p class="mandurai-font history-service-name">${serviceName}</p>
                <p class="history-number">${number}</p>
            </div>
            <div class="right-section">
                <p class="history-time">${localTime}</p>
            </div>
        `;
        cardHistory.append(newHistory);
        alert(`📞 Calling ${serviceNameEnglish} ${number}...`);
    });
}

clearButton.addEventListener("click", function () {
    cardHistory.innerHTML = "";
});
