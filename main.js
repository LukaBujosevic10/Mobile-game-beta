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



           console.log(niz[0]);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 200, 300);
  function  makeMaze() {
    for (var k = 0; k < 360; k=k+12) {
      for (var i = 0; i < 240; i = i+12) {
        element = niz[k/12][i/12];
        if (element == 0) {
            ctx.fillStyle = "#ffffff";
        }else if(element == 1){
          ctx.fillStyle = "#000000";
        }else{
          ctx.fillStyle = "#ff0000";
        }
        ctx.fillRect(i, k, i+12, k+12);
      }
    }

  }
  makeMaze();
});
