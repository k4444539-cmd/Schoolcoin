document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram?.WebApp;
    const statusEl = document.getElementById("status");
    const userEl = document.getElementById("user");
    const sendBtn = document.getElementById("sendBtn");

    if (tg) {
        tg.ready();
        statusEl.textContent = "Відкрито через Telegram ✅";
        userEl.textContent = JSON.stringify(tg.initDataUnsafe.user, null, 2);
        sendBtn.disabled = false;

        sendBtn.addEventListener("click", () => {
            tg.sendData("Test data from Mini App");
        });
    } else {
        statusEl.textContent = "Відкрито поза Telegram ❌";
    }
});
