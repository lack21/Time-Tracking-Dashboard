// lear
// Time Tracking Dashboard

window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const period = document.querySelectorAll(".period");
  const headingText = document.querySelectorAll(".heading");
  const periodText = document.querySelectorAll(".period-text");

  buttons.forEach((item, index) => {
    item.addEventListener("click", () => {
      buttons.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      period.forEach((i) => (i.innerHTML = item.id));

      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          data.forEach((i, n) => {
            headingText[n].innerHTML = i.timeframes[item.id].current + "hrs";
            periodText[n].innerHTML = i.timeframes[item.id].previous + "hrs";
          });
        })
        .catch((error) => console.error(error));
    });
  });
});
