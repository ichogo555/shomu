var canvas = document.getElementById("can1");
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = '../img/nagumo11.jpg';

img.onload = function(ex) {
  ctx.drawImage(img,0,0)

ctx.shadowColor = 'red';
ctx.shadowBlur = 10;
ctx.shadowOffsetY = 10;
ctx.shadowOffsetX = 10;

ctx.font="100px Arial bold";
ctx.fillStyle = 'white';
ctx.fillText("南雲穂波",150,770);
};

var canvas = document.getElementById("can2");
var context = canvas.getContext('2d');

context.font="100px Arial bold";
context.fillStyle = 'black';
context.fillText("南雲穂波",150,770);





// var canvas = document.getElementById("can3");
// var contex = canvas.getContext('2d');

// var img3 = new Image();
// img3.src = '../img/one.jpg';

// img3.onload = function(ex) {
//   contex.drawImage(img3,0,0)
// };


// var canvas = document.getElementById("can4");
// var ctx1 = canvas.getContext('2d');

// var img4 = new Image();
// img4.src = '../img/one2.jpg';

// img4.onload = function(ex) {
//   ctx1.drawImage(img4,50,30,550,430,0,0,800,1000);
// };


// var canvas = document.getElementById("can5");
// var ctx2 = canvas.getContext('2d');

// var img5 = new Image();
// img5.src = '../img/one3.jpg';

// img5.onload = function(ex) {
//   ctx2.drawImage(img5,0,0);
// }


// var canvas = document.getElementById("can6");
// var ctx3 = canvas.getContext('2d');

// var img6 = new Image();
// img6.src= '../img/ageru.png';

// img6.onload = function(ex) {
//   ctx3.drawImage(img6,-100,-100)
// }




