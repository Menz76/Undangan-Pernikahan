// Countdown
const eventDate = new Date("2025-07-20T08:00:00").getTime();
const timerEl = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    timerEl.innerHTML = "Acara sedang berlangsung!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timerEl.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}, 1000);

// RSVP (dummy handling)
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("rsvpMessage").innerText = "Terima kasih atas konfirmasinya!";
  this.reset();
});
