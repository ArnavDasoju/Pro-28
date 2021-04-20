class stone
{
constructor(x,y){
this.image = loadImage("sprites/stone.png")

var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2
}

}
display() {
this.body.position.x = mouseX;
this.body.position.y = mouseY;


}



}