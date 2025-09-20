document.addEventListener("DOMContentLoaded", () => {
  const registration = document.getElementById("registration");
  const registerBtn = document.getElementById("registerBtn");
  const fullnameInput = document.getElementById("fullname");
  const codeInput = document.getElementById("code");
  const content = document.getElementById("content");
  const balanceEl = document.getElementById("balance");

  let user = localStorage.getItem("user");

  // Якщо користувача ще нема → показуємо форму
  if (!user) {
    registration.style.display = "flex";
  } else {
    showMainScreen(JSON.parse(user));
  }

  // Обробка кнопки "Готово"
  registerBtn.addEventListener("click", () => {
    const fullname = fullnameInput.value.trim();
    const code = codeInput.value.trim();

    if (fullname && code) {
      const userData = {
        name: fullname,
        code: code,
        balance: 5
      };

      // Зберігаємо в localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // Ховаємо popup і запускаємо головний екран
      registration.style.display = "none";
      showMainScreen(userData);
    } else {
      alert("Заповніть всі поля!");
    }
  });

  // ===== Функція показу головного екрану =====
  function showMainScreen(userData) {
    balanceEl.textContent = userData.balance;
    showPage("home", document.querySelector("footer button.active"));
  }

  // ===== Перемикання сторінок =====
  window.showPage = function (page, btn) {
    document.querySelectorAll("footer button").forEach((b) =>
      b.classList.remove("active")
    );
    btn.classList.add("active");

    const userData = JSON.parse(localStorage.getItem("user"));

    if (page === "home") {
      content.innerHTML = `
        <div class="leaderboard">
          <h2>Топ 10 гравців</h2>
          <div class="player"><span>1. ${userData.name}</span><span>${userData.balance} SC</span></div>
          <div class="player"><span>2. Оля</span><span>120 SC</span></div>
          <div class="player"><span>3. Макс</span><span>110 SC</span></div>
        </div>
      `;
    } else if (page === "cases") {
      content.innerHTML = `
        <div class="leaderboard">
          <h2>Cases</h2>
          <p>Coming soon...</p>
        </div>
      `;
    } else if (page === "profile") {
      content.innerHTML = `
        <div class="leaderboard">
          <h2>Профіль</h2>
          <p>Ім'я: ${userData.name}</p>
          <p>Баланс: ${userData.balance} SC</p>
        </div>
      `;
    }
  };
});
