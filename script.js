// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function updateTime(){
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMMM DD h:mm:ss a"))
    }
    
    updateTime();
    setInterval(updateTime, 1000);
      
    
    function timeCheck(){
      
      var hoursGet = document.getElementsByTagName("article");
      var hoursIndex = [];
      for (i = 0; i < hoursGet.length; i++) {
         hoursIndex.push(hoursGet[i]);
    
        if (dayjs().format("H") > parseInt(hoursIndex[i].id)){
          hoursIndex[i].classList.add("past");
        } else if (dayjs().format("H") < parseInt(hoursIndex[i].id)){
          hoursIndex[i].classList.add("future");
        } else {hoursIndex[i].classList.add("present")}
    
        }
      }
    
    timeCheck();
});
