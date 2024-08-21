//function increase(x) {
//    var increaseTab = document.getElementById('x');
//    var tab = document.getElementById('redTab');
//    increaseTab.classList.add('activeTab');
//    tab.classList.add('redTabTwo');
//}



function tabMove(evt, phoneImg, topChangeRed, infoChng) {
  var tabcontent, tablinks, redTabMove, infoCheck;
  redTabMove = document.getElementById('redTab');
  tabcontent = document.getElementsByClassName("phoneScreen");
  infoCheck = document.getElementsByClassName('infoSwitch');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
    
    for (i = 0; i < infoCheck.length; i++) {
    infoCheck[i].style.display = "none";
  }
   
    
  tablinks = document.getElementsByClassName("singleTabs");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
  }
  document.getElementById(infoChng).style.display = "block"; 
  document.getElementById(phoneImg).style.display = "block";
  evt.currentTarget.className += " activeTab";
  redTabMove.className = "";
  redTabMove.classList.add(topChangeRed);
}

//function openCity(evt, cityName) {
//  var i, tabcontent, tablinks;
//  tabcontent = document.getElementsByClassName("tabcontent");
//  for (i = 0; i < tabcontent.length; i++) {
//    tabcontent[i].style.display = "none";
//  }
//  tablinks = document.getElementsByClassName("tablinks");
//  for (i = 0; i < tablinks.length; i++) {
//    tablinks[i].className = tablinks[i].className.replace(" active", "");
//  }
//  document.getElementById(cityName).style.display = "block";
//  evt.currentTarget.className += " active";
//}