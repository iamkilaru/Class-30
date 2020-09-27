class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visible = 255;
  }

  display(){
    var pos = this.body.position;
    console.log(this.body.speed);

    if(this.body.speed<=3){
      super.display();
    } 
    else {
      push();
      this.visible = this.visible-5;
      tint(255,this.visible);
      image(this.image,pos.x,pos.y,50,50);
      pop();
      World.remove(world, this.body);
    }
  }

};
 
//tint - adding a transparent layer over something