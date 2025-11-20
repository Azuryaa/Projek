setInterval(() => {
  let date = new Date();
  let clock = document.getElementById("jam");

  let h = String(date.getHours()).padStart(2, "0");
  let m = String(date.getMinutes()).padStart(2, "0");
  let s = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${h}:${m}:${s}`;
}, 1000);
