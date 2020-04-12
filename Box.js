class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
  score(){ 
if(this.body.velocity>=10){
  score++
  
  } 
  console.log(this.body.velocity)
  }
};
