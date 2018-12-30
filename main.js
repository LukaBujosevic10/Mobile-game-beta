'use strict'
$(document).ready(function() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let element;
  let niz = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
             [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,2,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
             [1,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,1],
             [1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1],
             [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1],
             [1,0,0,0,0,0,0,2,0,1,0,0,0,0,0,1,0,0,0,1],
             [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,2,0,1],
             [1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
           ];
           let player = {
             position: {x: 275, y: 23},
             color: "pink",
            // lavirint_pozicija: {x : Math.round(this.position.x/15), y: Math.round(this.position.y/15)}
           }


           console.log(niz[0]);
  //ctx.fillStyle = "#FF0000";
  //ctx.fillRect(0, 0,context 200, 300);
  function  makeMaze() {
    for (var k = 0; k < 450; k=k+15) {
      for (var i = 0; i < 300; i = i+15) {
        element = niz[k/15][i/15];
        if (element == 0) {
            ctx.fillStyle = "#ffffff";
        }else if(element == 1){
          ctx.fillStyle = "#000000";
        }else{
          ctx.fillStyle = "lightblue";
        }
        ctx.fillRect(i, k, i+15, k+15);
      }
    }
    makingPlayer();
  }
  function makingPlayer() {
    ctx.beginPath();
  ctx.fillStyle = player.color;
  ctx.arc(player.position.x, player.position.y, 6, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  }
  makeMaze();
  if (window.DeviceOrientationEvent) {
          window.addEventListener("deviceorientation", deviceOrientationListener);
        } else {
          alert("Sorry, your browser doesn't support Device Orientation");
        }
        function deviceOrientationListener(event) {
  if (event.beta > 5 && player.position.x < 385) {
    player.position.y += 2;
    makeMaze();
  }
  if (event.beta < -5 && player.position.x < 15) {
    player.position.y -= 2;
    makeMaze();
  }
  if (event.gamma > 5 && player.position.y < 15) {
    player.position.x -= 2;
    makeMaze();
  }
  if (event.gamma < -5 player.position.y < 435) {
    player.position.x += 2;
    makeMaze();
  }


}
});
