class paper {
    constructor(x,y,radius){
   var options = {
       isStatic:false,
       restitution:0.2,
       friction:0.3,
       dencity:1.0

   }   
   this.radius = radius
   this.body = Bodies.circle(x,y,radius,options)  ;
   world.add(world,this.body);

    }

display(){
    FileList("yellow");
    ellipseMode(RADIUS);
    ellipse(this.body.position.y,this.body.position.x,this.radius,this.radius);
}

}