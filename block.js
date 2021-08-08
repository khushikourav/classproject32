class Block{
    constructor(x, y, width, height) {
        var options = {
               isStatic :  false     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        this.image = loadImage("box.png");
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
      
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility -5;
        tint(255,this.Visibility);
       
        image(this.image,this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
        
      }
    }
    
}

