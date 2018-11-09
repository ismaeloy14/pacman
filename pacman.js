var mapa = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0],
    [0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0],
    [0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var fantasma1;
var fantasma2;
var fantasma3;
var jugador;


var   ARRIBA = 1,
      IZQUIERDA = 2,
      ABAJO = 3,
      DERECHA = 4;
/*
    Arrow keys codigos
    IZQ: 37
    DER: 39
    ARR: 38
    ABJ: 40
*/

function mostrarMapa(){
    var map = "";
    for (var x=0;x<mapa.length;x++){
        for (var y=0;y<mapa[x].length;y++){
            /*if (mapa[x][y]==1){
                mapa[x][y] = "";
                map+=mapa[x][y] + " ";
            }*/

            if (y==(mapa[x].length)-1){
                map+=mapa[x][y]+"\n";
            }
            else{
                map+=mapa[x][y]+" ";
            }
        }
        
    }
    console.log(map);
}



mostrarMapa();
posFantasmaIni();
pacman();

function posFantasmaIni(){
    //var map="";
    
        var avanza = false;
        
        do{
            var x = Math.floor(Math.random() * mapa.length);
            var y = Math.floor(Math.random() * mapa[0].length);
            //calcular direccion
            direccionIniFan1 = direction();
            
            
            if (mapa[x+1][y]==0){
                direccionIniFan1 = direction();
            }
            else if (mapa[x][y+1]==0){
                direccionIniFan1 = direction();
            }
            else if (mapa[x-1][y]==0){
                direccionIniFan1 = direction();
            }
            else if (mapa[x][y-1]==0){
                direccionIniFan1 = direction();
            }
            
            
                if (mapa[x][y]==1){
                    fantasma1 = mapa[x][y];
                    mapa[x][y]="F";
                    avanza = true;
                }
        }while(avanza==false);
    
        do{
            var x = Math.floor(Math.random() * mapa.length);
            var y = Math.floor(Math.random() * mapa[0].length);
            
            direccionIniFan2 = direction();
            
            if (mapa[x+1][y]==0){
                direccionIniFan2 = direction();
            }
            else if (mapa[x][y+1]==0){
                direccionIniFan2 = direction();
            }
            else if (mapa[x-1][y]==0){
                direccionIniFan2 = direction();
            }
            else if (mapa[x][y-1]==0){
                direccionIniFan2 = direction();
            }
                if (mapa[x][y]==1){
                    fantasma2 = mapa[x][y];
                    mapa[x][y]="F";
                    avanza = true;
                }
            }while(avanza==false);

        do{
            var x = Math.floor(Math.random() * mapa.length);
            var y = Math.floor(Math.random() * mapa[0].length);
            
            direccionIniFan3 = direction();
            
            if (mapa[x+1][y]==0){
                direccionIniFan3 = direction();
            }
            else if (mapa[x][y+1]==0){
                direccionIniFan3 = direction();
            }
            else if (mapa[x-1][y]==0){
                direccionIniFan3 = direction();
            }
            else if (mapa[x][y-1]==0){
                direccionIniFan3 = direction();
            }
                if (mapa[x][y]==1){
                    fantasma3 = mapa[x][y];
                    mapa[x][y]="F";
                    avanza = true;
                }
            }while(avanza==false); 
        
    mostrarMapa();
}





function pacman (){

    var avanza = false;
    do{
            var x = Math.floor(Math.random() * mapa.length);
            var y = Math.floor(Math.random() * mapa[0].length);
        
            direccionJugador = direction();
        
            if (mapa[x+1][y]==0){
                direccionJugador = direction();
            }
            else if (mapa[x][y+1]==0){
                direccionJugador = direction();
            }
            else if (mapa[x-1][y]==0){
                direccionJugador = direction();
            }
            else if (mapa[x][y-1]==0){
                direccionJugador = direction();
            }
                if (mapa[x][y]==1){
                    jugador = mapa[x][y];
                    mapa[x][y]="Z";
                    avanza = true;
                }
            }while(avanza==false);
        
        
    mostrarMapa();
    
}


var a = setInterval(move,2000);
clearInterval(a);

function move(){
    
}

function direction(){
    Math.floor(Math.random() * (5-1)+1);
}


/*

function detectorArrow(e) {                                
                              
      console.log(e);      //a la consola podeu veure l'objecte que té dos atributs on s'hi indica la tecla pitjada.                                       
      }                                                            
   var element = document.getElementById("all");                  
   element.addEventListener("keydown", notificaObservador);



 */

        //keyMap[];
    
    /*keyMap[KEY.ARROW_LEFT] = IZQUIERDA;
    keyMap[KEY.ARROW_UP] = ARRIBA;
    keyMap[KEY.ARROW_RIGHT] = DERECHA;
    keyMap[KEY.ARROW_DOWN] = ABAJO;*/

/*var KEY{
  ARROW_LEFT: 2,
  ARROW_UP: 3,
  ARROW_RIGHT: 4,
  ARROW_DOWN: 5,
}*/



//mostrarMapa(mapa);