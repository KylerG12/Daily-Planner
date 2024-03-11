$(function () {
  var saveButton = $(".saveBtn");
  var saved = [];
  saveButton.on("click", function (event) {
    var input;
    var hour;
    var saver = [];
    input = $(event.currentTarget).parent().children("textarea").val();
    hour = $(event.currentTarget).parent().attr("id");
    saver.push({ input, hour });
    saved.push(saver);
    saving();
  });
  function saving() {
    var arrayS = JSON.stringify(saved);
    localStorage.setItem("Planner", arrayS);
  }
  function loading() {
    var load = localStorage.getItem("Planner");
    var reload = JSON.parse(load);
    console.log(reload);

    for (var i = 0; i < reload.length; i++) {
      console.log(reload[i][0].hour);
      $(`#${reload[i][0].hour}`).children().eq(1).text(`${reload[i][0].input}`);
    }
  }

  function updateTime() {
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMMM DD h:mm:ss a"));
  }

  updateTime();
  setInterval(updateTime, 1000);

  function timeCheck() {
    var hoursGet = document.getElementsByTagName("article");
    var hoursIndex = [];
    for (i = 0; i < hoursGet.length; i++) {
      hoursIndex.push(hoursGet[i]);

      if (dayjs().format("H") > parseInt(hoursIndex[i].id)) {
        hoursIndex[i].classList.add("past");
      } else if (dayjs().format("H") < parseInt(hoursIndex[i].id)) {
        hoursIndex[i].classList.add("future");
      } else {
        hoursIndex[i].classList.add("present");
      }
    }
  }

  timeCheck();

  if (localStorage.getItem("Planner")) {
    loading();
  }
});
