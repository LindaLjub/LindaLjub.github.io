   
//skapa en "canvas" variabel, var canvas.
    
var canvas = document.getElementById("canvas");
    
// skapar ett 2d ritobjekt.
var ctx = canvas.getContext("2d");
    
 // klockans radius. "Calculate the clock radius, using the height of the canvas:"   
var radius = canvas.height / 2;
    
//Using the canvas height to calculate the clock radius, makes the clock work for all canvas sizes.
ctx.translate(radius, radius);
    
//Reduce the clock radius (to 90%) to draw the clock well inside the canvas:
radius = radius * 0.90
    

  // VIKTIGT! The only thing you have to do (to start the clock) is to call the drawClock function at intervals.  eRSÄTTER drawClock nedanför. 
setInterval(drawClock, 1000);
    
    
    
// Skapar en funktion som ritar upp klockan. 
//drawClock();

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}
    
    
    
 function drawFace(ctx, radius) {
  var grad;
         
     
 // Draw the white circle: //Bakgrundsfärg, (vit cirkel).    
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
     
     
     
   //Create a radial gradient (95% and 105% of original clock radius):
   //Create 3 color stops, corresponding with the inner, middle, and outer edge of the arc:  
     //The color stops create a 3D effect.
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, 'black');
  grad.addColorStop(0.5, '#56ABF8');
  grad.addColorStop(1, '#98C8F3');
     
     
    
  //Define the gradient as the stroke style of the drawing object:   
  ctx.strokeStyle = grad;
  
     //Define the line width of the drawing object (10% of radius):
  ctx.lineWidth = radius*0.1;
     
    // Draw the circle: cirkeln runtom. gradient. 
  ctx.stroke();
     
     
//Draw the clock center: Mitten cirkeln 
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}
    
    

    
    
 //Nästa funktion
    
    
 function drawNumbers(ctx, radius) {
    var ang;
    var num;
     
     //Set the font size (of the drawing object) to 15% of the radius:
    ctx.font = radius*0.15 + "px arial";
     
    // Set the text alignment to the middle and the center of the print position:
    ctx.textBaseline="middle";
    ctx.textAlign="center";
     
     
//Calculate the print position (for 12 numbers) to 85% of the radius, rotated (PI/6) for each number:
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}   
    
    
    
  
    
    
 //Nästa funktion
    
    
  function drawTime(ctx, radius){
      
      //Use Date to get hour, minute, second:
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
     
      
      //Calculate the angle of the hour hand, and draw it a length (50% of radius), and a width (7% of radius):
      
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}  
    
 function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}   
    
    

    
  