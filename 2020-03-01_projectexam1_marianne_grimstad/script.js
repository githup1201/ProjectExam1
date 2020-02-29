function myFunction() {
    var x = document.getElementById('myTopnav'); 
      if (x.className === 'topnav') { 
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }    
}


/*(function($){
        $().timeline({
        orientation: 	'vertical',
        issuesSpeed: 	300,
        datesSpeed: 	100,
        arrowKeys: 		'true',
        startAt:		3
			})
		});*/

/* index page
----------------------*/

let launchArray = [];
const resultsContainer = document.querySelector(".content-timeline")

fetch("https://launchlibrary.net/1.4/launch")
   .then (function(response) {
      return response.json();
 })

   .then (function(json) {
     loopThroughLaunches(json);
 })
    
   .catch (function(error) {
      console.log(error);
 });

function loopThroughLaunches(launchObject) {
    
   launchArray = launchObject.launches;
    
    var tx = "Launch Date: ";
    var tx2 = "End Date: ";
    
    
    resultsContainer.innerHTML += '<div class="launches">' + "<h3> " + launchArray[0].name + "</h3>" + "<p> " + tx.fixed() + launchArray[0].net + "</p>" + "<p> " + tx2.fixed() + launchArray[0].windowend + " UTC" + "</p> "  + '</div';
    
    const resultContainer = document.getElementById("launch-container")
    
    resultContainer.innerHTML += '<div class="launches">' + "<h3> " + launchArray[1].name + "</h3>" + "<p> " + tx.fixed() + launchArray[1].net + "</p>" + "<p> " + tx2.fixed() + launchArray[1].windowend + " UTC" + "</p> "  + '</div';
    
    const resContainer = document.getElementById("container-launch")
    
    resContainer.innerHTML += '<div class="launches">' + "<h3> " + launchArray[2].name + "</h3>" + "<p> " + tx.fixed() + launchArray[2].net + "</p>" + "<p> " + tx2.fixed() + launchArray[2].windowend + " UTC" + "</p> "  + '</div';
    
    const resulContainer = document.getElementById("launch-contain")
    
    resulContainer.innerHTML += '<div class="launches">' + "<h3> " + launchArray[3].name + "</h3>" + "<p> " + tx.fixed() + launchArray[3].net + "</p>" + "<p> " + tx2.fixed() + launchArray[3].windowend + " UTC" + "</p> "  + '</div';
    
    const resulsContainer = document.getElementById("launch-contains")
    
    resulsContainer.innerHTML += '<div class="launches">' + "<h3> " + launchArray[4].name + "</h3>" + "<p> " + tx.fixed() + launchArray[4].net + "</p>" + "<p> " + tx2.fixed() + launchArray[4].windowend + " UTC" + "</p> "  + '</div';
        
    };
    
/* pictureoftheday page
---------------------------*/
  
 let picture = {};
 const picresultContainer = document.querySelector(".pic-content")

 fetch("https://api.nasa.gov/planetary/apod?api_key=ScY4oaYg3Y74gvvR0a5l05DeUJWOI8Qhge8K1XjL")
   .then (function(res) {
      return res.json();
 })

   .then (function(json) {
      showObject(json);
 })
    
   .catch (function(error) {
      console.log(error);
 });

function showObject(pictureObject) {
 picture = pictureObject;
    
 picresultContainer.innerHTML += '<div class="pictures">' + "<p> " + "Date: " + picture.date + "</p>" + "<p> "  + "</p> "  + "<img src=" + picture.hdurl  + ">" +  '</div';
    
 const pictureContainer = document.getElementById("picture-text")
 
 pictureContainer.innerHTML += '<div class="description">' + "<h3> " + picture.title + "</h3>" + "<p> " + picture.explanation + "</p> "  + '</div';
    
};


/* Events page
-----------------------*/

let eventArray = [];
const eventresContainer = document.querySelector(".event-content")


  fetch("https://launchlibrary.net/1.4/launch/next/5")
   .then (function(response) {
      return response.json();
 })

   .then (function(json) {
     loopThroughEvents(json);
 })
    
   .catch (function(error) {
      console.log(error);
 });


 function loopThroughEvents(eventObject) { 
   eventArray = eventObject.launches;
 
    for (i = 0; i < 3; i++) {
     
    var txt = "Launch Date: ";
    var txt2 = "Agency: ";
    var txt3 = "Location: ";
    var txt4 = "Description: ";
    
    eventresContainer.innerHTML += '<div class="events">' + "<h3> " + eventArray[i].name + "</h3>" + "<p> " + txt.fontcolor("#2988CE") + eventArray[i].net + "</p>" + "<p> " + txt2.fontcolor("#2988CE") + eventArray[i].lsp.name + "</p> " + "<p> " + txt3.fontcolor("#2988CE") + eventArray[i].location.name + "</p> "  + "<p> " + txt4.fontcolor("#2988CE") + eventArray[i].missions[0].description + "</p> " + '</div';
     
 };
     
    const eventresultContainer = document.getElementById("event-right")
     
     for (i = 3; i < 5; i++) {
     
     var text = "Launch Date: ";
     var text2 = "Agency: ";
     var text3 = "Location: ";
     var text4 = "Description: "; 
         
     eventresultContainer.innerHTML += '<div class="events">' + "<h3> " + eventArray[i].name + "</h3>" + "<p> " + text.fontcolor("#2988CE") + eventArray[i].net + "</p>" + "<p> "  + text2.fontcolor("#2988CE") + eventArray[i].lsp.name + "</p> " + "<p> " + text3.fontcolor("#2988CE") + eventArray[i].location.name + "</p> "  + "<p> " + text4.fontcolor("#2988CE") + eventArray[i].missions[0].description + "</p> " + '</div'; 
};

}








    
