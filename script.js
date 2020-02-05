function layOutDay(events) {
  if (events.length != 0) {
    let divEvents = document.getElementById("events");
    let overlapped = [];
    for (let i = 0; i < events.length; i++) {
      overlapped[i] = false;
    }
    for (let i = 0; i < events.length; i++) {
      let event = events[i];
      for (let j = i + 1; j < events.length; j++) {
        if (
          (event.start > events[j].start && event.start < events[j].end) ||
          (event.end > events[j].start && event.end < events[j].end)
        ) {
          overlapped[i] = true;
          overlapped[j] = true;
        }
      }
    }

    let alternatingHalves = false;
    for (let i = 0; i < events.length; i++) {
      let eventDiv = document.createElement("div");
      eventDiv.className = "event";
      eventDiv.style.height = events[i].end - events[i].start + "px";
      eventDiv.style.position = "absolute";
      eventDiv.style.top = events[i].start;
      if (overlapped[i]) {
        eventDiv.style.width = "calc(50% - 16.5px)";
        if (alternatingHalves) {
          eventDiv.style.left = "calc(50% - 1.5px)";
        }
        if (i + 1 < events.length && overlapped[i + 1]) {
          alternatingHalves = !alternatingHalves;
        } else {
          alternatingHalves = false;
        }
      }

      let subjectDiv = document.createElement("div");
      subjectDiv.className = "subject";
      subjectDiv.innerHTML = "Sample Item";
      eventDiv.appendChild(subjectDiv);

      let bodyDiv = document.createElement("div");
      bodyDiv.className = "body";
      bodyDiv.innerHTML = "Sample Location";
      eventDiv.appendChild(bodyDiv);

      divEvents.appendChild(eventDiv);
    }
  }
}

function initTimes() {
  let divTimes = document.getElementById("times");
  // start at 9am, go to 9pm
  let start = 8;
  let end = 20;
  for (let i = start; i <= end; i++) {
    // create hourly timestamp
    let hourlyDiv = document.createElement("p");

    let hourlyDivTime = document.createElement("span");
    hourlyDivTime.innerHTML = (i % 12) + 1 + ":00";
    hourlyDivTime.className = "times-hourly-time";
    hourlyDiv.appendChild(hourlyDivTime);

    let hourlyDivAMPM = document.createElement("span");
    // 12PM is 11.
    if (i < 11) {
      hourlyDivAMPM.innerHTML = "AM";
    } else {
      hourlyDivAMPM.innerHTML = "PM";
    }
    hourlyDivAMPM.className = "times-AMPM";
    hourlyDiv.appendChild(hourlyDivAMPM);

    hourlyDiv.className = "times-hourly";
    divTimes.appendChild(hourlyDiv);

    // create 30 min mark timestamp, when not on last iteration
    if (i < end) {
      let halfHourDivTime = document.createElement("p");
      halfHourDivTime.innerHTML = (i % 12) + 1 + ":30";
      halfHourDivTime.className = "times-half-hourly";
      divTimes.appendChild(halfHourDivTime);
    }
  }
}

window.onload = function() {
  initTimes();
};
