var score=0;
var time=0;
sketch=quick_draw_data_set;
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
background("Cyan");
canvas.mouseReleased(classifyCanvas); 
synth = window.speechSynthesis; 
}
function draw(){
    strokeWeight(17);
stroke(0);

if(mouseIsPressed) { line(pmouseX, pmouseY, mouseX, mouseY);
  setTimeout(function(){
    time=time+1;
  document.getElementById("times").innerHTML=time;
  },1000); } 
check_sketch()

}
function classifyCanvas() { 
    classifier.classify(canvas, gotResult); }
    function gotResult(error, results) {
        if (error) {
          console.error(error);
        }
        console.log(results);
        document.getElementById('doodly').innerHTML = 'Label: ' + results[0].label;
      
        document.getElementById('percentile').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
      
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
      }
      function clearcanvas(){
        background("Cyan");
        score=score+1;
      }
      function updateCanvas(){
        Math.floor(quick_draw_data_set)
      }