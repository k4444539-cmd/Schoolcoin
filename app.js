document.addEventListener("DOMContentLoaded", () => {
  // ===== 1. Створення / зчитування користувача =====
  let user = localStorage.getItem("user");

  if (!user) {
    user = JSON.stringify({
      name: "Player",
      balance: 5
    });
    localStorage.setItem("user", user);
  }

  const userData = JSON.parse(user);

  // ===== 2. Відображення балансу =====
  const balanceEl = document.getElementById("balance");
  if (balanceEl) {
    balanceEl.textContent = userData.balance;
  }

  // ===== 3. Перемикання сторінок =====
  window.showPage = function (page, btn) {
    // Знімаємо активний клас з усіх кнопок
    document.querySelectorAll("footer button").forEach((b) =>
      b.classList.remove("active")
    );

    // Додаємо активний клас натиснутій кнопці
    btn.classList.add("active");

    // Змінюємо контент
    const content = document.querySelector("main");
    if (page === "home") {
      content.innerHTML = `
        <div class="leaderboard">
          <h2>Top 10 Players</h2>
          <div class="player"><span>${userData.name}</span><span>${userData.balance} coins</span></div>
          <div class="player"><span>Student #2</span><span>4 coins</span></div>
          <div class="player"><span>Student #3</span><span>3 coins</span></div>
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
          <h2>Profile</h2>
          <p>Name: ${userData.name}</p>
          <p>Balance: ${userData.balance} coins</p>
        </div>
      `;
    }
  };

  // ===== 4. Стартова сторінка =====
  showPage("home", document.querySelector("footer button"));
});
