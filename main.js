'use strict'
$(document).ready(function() {
  let poz_x;
  let poz_y;
  let ostatak_x;
  let ostatak_y;
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let pravac;
  let element;
/*  let niz = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
             [1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1],
             [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
             [1,0,0,2,1,2,0,0,0,0,2,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,2,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
             [1,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,1],
             [1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1],
             [1,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
             [1,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1],
             [1,0,0,0,0,0,0,2,0,1,0,0,0,0,0,1,0,0,0,1],
             [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
             [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,2,0,0,0,1,0,0,0,0,1,0,2,0,1],
             [1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,1,1,1,1],
             [1,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,1],
             [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
             [1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,1],
             [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
           ];
*/
         let niz = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                      [1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
                      [1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
                      [1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
                      [1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1],
                      [1,0,0,0,0,0,1,0,0,0,0,0,0,2,1,0,0,0,1],
                      [1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1],
                      [1,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
                      [1,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1],
                      [1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1],
                      [1,0,0,0,0,0,0,2,0,1,0,0,2,0,0,1,0,0,0,1],
                      [1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1],
                      [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,1],
                      [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
                      [1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1],
                      [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1],
                      [1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1],
                      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
                      [1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1],
                      [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1],
                      [1,0,0,0,0,0,2,0,0,0,1,0,0,0,0,1,1,2,1,1],
                      [1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,3,0,1],
                      [1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,1],
                      [1,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,1],
                      [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
                      [1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                      [1,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1],
                      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    ];

           let player = {
             position: {x: 275, y: 23},
             color: "yellow",
           }


           console.log(niz[0]);

  function  makeMaze() {
    for (var k = 0; k < 450; k=k+15) {
      for (var i = 0; i < 300; i = i+15) {
        element = niz[k/15][i/15];
        if (element == 0) {
            ctx.fillStyle = "#ffffff";
        }else if(element == 1){
          ctx.fillStyle = "#000000";
        }else if(element == 2){
          ctx.fillStyle = "lightblue";
        }else if (element == 3) {
          ctx.fillStyle = "red";
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

    izracunavanje();
    provera_specijalnih_polja();


  if (event.beta > 2) {
    if (niz[poz_y+1][poz_x] == 1) {
      if (ostatak_y < 8) {
        promena_y(brzina(event));
      }
    }else {
      promena_y(brzina(event));
    }
    makeMaze();
  }
  if (event.beta < -2) {
    if (niz[poz_y-1][poz_x] == 1) {
      if (ostatak_y >= 8) {
        promena_y(brzina(event) * (-1));
      }
    }else {
        promena_y(brzina(event) *(-1));
    }
    makeMaze();
  }
  if (event.gamma > 2) {
    if (niz[poz_y][poz_x+1] == 1) {
      if (ostatak_x < 8) {
        promena_x(brzina(event))
      }
    }else {
        promena_x(brzina(event));
    }

    makeMaze();
  }
  if (event.gamma < -2) {
    if (niz[poz_y][poz_x-1] == 1) {
      if (ostatak_x > 7) {
        promena_x(brzina(event) * (-1));
      }
    }else {
        promena_x(brzina(event) * (-1));
    }

    makeMaze();
  }


}
window.addEventListener("keydown", tastatura);

function tastatura() {
  izracunavanje();
  provera_specijalnih_polja();
  if (event.keyCode == 39) {
    if (niz[poz_y][poz_x+1] == 1) {
      if (ostatak_x < 8) {
        promena_x(2);
      }
    }else {
      promena_x(2);
    }
   makeMaze();
  }
  if (event.keyCode == 37) {
    if (niz[poz_y][poz_x-1] == 1) {
      if (ostatak_x > 7) {
        promena_x(-2);
      }
    }else {
      promena_x(-2);
    }
   makeMaze();
  }
//njnjnjnjnjnjnjn
  if (event.keyCode == 40) {
    if (niz[poz_y+1][poz_x] == 1) {
      if (ostatak_y < 8) {
        promena_y(2);
      }
    }else {
      promena_y(2);
    }

    makeMaze();
  }
  if (event.keyCode == 38) {
   if (niz[poz_y-1][poz_x] == 1) {
      if (ostatak_y >= 8) {
        promena_y(-2);
      }
    }else {
      promena_y(-2);
    }
    makeMaze();
  }
 }
function izracunavanje() {
   poz_x =  Math.floor(player.position.x/15);
   poz_y = Math.floor(player.position.y/15);
   ostatak_x = player.position.x%15;
   ostatak_y = player.position.y%15;
}
function promena_y(broj){
  player.position.y+=broj;
//  $("#wrap").html("<h3>"+player.position.x+" i "+ player.position.y"</h3>");
}
function promena_x(nbroj){
  player.position.x+=nbroj;
  //$("#wrap").html('<h3>'+player.position.x+" i "+ player.position.y+'</h3>');
}
function provera_specijalnih_polja() {
  if (niz[poz_y][poz_x] == 2) {
    player.position.x = 275;
    player.position.y = 23;
  }else if (niz[poz_y][poz_x] == 3) {
    console.log('pobedio si');
  }
}
function brzina(smer) {
  let ab_beta = Math.abs(smer.beta);
  let ab_gama = Math.abs(smer.gama);
  if((ab_beta >= 10 && ab_beta < 20) ||(ab_gama >= 10 && ab_gama < 20)){
    return 2;
  }else if ((ab_beta >= 20 && ab_beta < 40) ||(ab_gama >= 20 && ab_gama < 40)) {
    return 3;
  }else if( ab_beta >= 40 || ab_gama >= 40){
    return 4;
  }else if((ab_beta >= 2 && ab_beta < 10) ||(ab_gama >= 2 && ab_gama < 10)){
    return 1;
  }else if(ab_beta < 2 || ab_gama < 2){
    return 0;
  }
      $('#wrap').html('<p>'+brzina(smer)+'</p>');
}
});
