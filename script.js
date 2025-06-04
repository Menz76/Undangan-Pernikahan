const eventDate = new Date("2025-07-20T10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerText = "Acara sedang berlangsung!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerText =
    `Menuju hari bahagia: ${days}h ${hours}j ${minutes}m ${seconds}d`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
