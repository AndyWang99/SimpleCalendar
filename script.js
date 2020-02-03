function layOutDay(events) {
  document.getElementById("def").innerHTML = events;
}

function initTimes() {
  let divTimes = document.getElementById("times");
  // start at 9am, go to 9pm
  let start = 8;
  let end = 20;
  for (let i = start; i <= end; i++) {
    // create hourly timestamp
    let hourlyDiv = document.createElement("div");
    let hourlyDivTime = document.createElement("div");
    // i % 24 since it is possible for i > 24 since i is at most start + end
    hourlyDivTime.innerHTML = (i % 12) + 1 + ":00";
    hourlyDivTime.className = "times-hourly-time";
    hourlyDiv.appendChild(hourlyDivTime);

    let hourlyDivAMPM = document.createElement("div");
    // 12PM is 11.
    if (i < 11) {
      hourlyDivAMPM.innerHTML = "AM";
    } else {
      hourlyDivAMPM.innerHTML = "PM";
    }
    hourlyDivTime.className = "times-AMPM";
    hourlyDiv.appendChild(hourlyDivAMPM);
    hourlyDiv.className = "times-hourly";
    divTimes.appendChild(hourlyDiv);

    // create 30 min mark timestamp, when not on last iteration
    if (i < end) {
      let halfHourDivTime = document.createElement("div");
      halfHourDivTime.innerHTML = (i % 12) + 1 + ":30";
      divTimes.appendChild(halfHourDivTime);
    }
  }
}

window.onload = function() {
  initTimes();
};
