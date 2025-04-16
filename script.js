let cor;
let posicaoohoriontal;//x
let posicaovertical;//y
function setup() {
  createCanvas(400, 400);
  background(220);(color(100,0,0));
  cor =color(random(0,255),random(0,255),random(0,255));
}
function draw() {
  fill(cor);
  circle(posicaohorizontal,posicaovertical,50);
  if (mouseX<poicaohoriontal){
  posicaohoriontal=posicaohorizontal-1;  
  }  
  if(mouseX>posicaohorizontal){
  posicaohorizontal = posicaohorizontal +1;    
}
if(mouseY<posicaovertical){posicaovertical--;
}
if(mouseY>posicaoverticaL)
{posicaovertical++;
}
if(mouseIsPressed){
cor=color(random(0,255),random(0,255),random(0,255),random(0,100));  
}
  

  
                                                            
                                          

