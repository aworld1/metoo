$(document).ready(function(){
  $('.slider').slider();
});
function hideEverything() {
  $("#homepage").hide();
  $("#2010").hide();
  $("#2000").hide();
  $("#1990").hide();
  $("#1980").hide();
  $("#1970").hide();
  $("#1960").hide();
  $("#1950").hide();
  $("#1940").hide();
  $("#bibliography").hide();
}
function showHomePage() {
  hideEverything();
  $("#homepage").show();
}
function show2010() {
  hideEverything();
  $("#2010").show();
}
function show2000() {
  hideEverything();
  $("#2000").show();
}
function show1990() {
  hideEverything();
  $("#1990").show();
}
function show1980() {
  hideEverything();
  $("#1980").show();
}
function show1970() {
  hideEverything();
  $("#1970").show();
}
function show1960() {
  hideEverything();
  $("#1960").show();
}
function show1950() {
  hideEverything();
  $("#1950").show();
}
function show1940() {
  hideEverything();
  $("#1940").show();
}
function showBibliography() {
  hideEverything();
  $("#bibliography").show();
}
showHomePage();
