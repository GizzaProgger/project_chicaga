(() => {
  let oldImgUrl = "";
  document.querySelector(".div-pole-otcritka img").addEventListener("mouseover", e => {
    oldImgUrl = e.target.getAttribute("src");
    e.target.setAttribute("src", "https://im0-tub-ru.yandex.net/i?id=bde4069236c02909b3fe6ae1e6643c92&n=13&exp=1");
  })
  document.querySelector(".div-pole-otcritka img").addEventListener("mouseout", e => {
    e.target.setAttribute("src", oldImgUrl);
  })
  let date = new Date();
  // Установить текущею дату
  document.querySelector(".text-field-data").value = date.toISOString().substring(0, 10); 
  function setTimeToCallInput(dateStr) {
    let date = dateStr ? new Date(dateStr) : new Date();
    let day = date.getDay();
    // Если воскресенье или суббота или пятница
    let workTime;
    if (day == 0 || day == 6 || day == 5) {
      workTime = "12:00, 16:30";
    } else {
      workTime = "12:00, 21:30";
    }
    let times = generateArrOptionFromWorkTime(workTime.split(",")[0], workTime.split(",")[1]);
    times.forEach(time => {
      document.querySelector("#time").insertAdjacentHTML("beforeend", `<option ${time.selected} value="${time.value}">${time.value}</option>`);
    });
  }
  function generateArrOptionFromWorkTime(start, end) {
    let res = [];
    let i = 0;
    start = new Date(2021, 0, 1, start.split(":")[0], start.split(":")[1])
    end = new Date(2021, 0, 1, end.split(":")[0], end.split(":")[1])
    let sum = start.getTime();
    let hulfHour = 1000 * 60 * 30;
    let now, minutes, hours;
    while (sum < end.getTime() + 1 && i < 24) {
      i++;
      now = new Date(sum);
      minutes = String(now.getMinutes());
      minutes = minutes.length < 2 ? minutes + "0" : minutes;
      hours = String(now.getHours());
      // Заказчик попросил обработать особый случай и вставлять 15:15 в форму
      if (minutes == "00" && hours == "15") {
        res.push({
          selected: "selected",
          value: `15:15`
        });  
      }
      res.push({
        selected: "",
        value: `${hours}:${minutes}`
      });
      sum += hulfHour;
    }
    return res;
  }
  setTimeToCallInput()
})();
