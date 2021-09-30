class ComputerArcher {
    constructor(x,y,w,h,angle){
        var options = {
            isStatic:true
        }

        this.width = w;
        this.height = h;
        this.angle = angle;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.image = loadImage('./assets/computerArcher.png');
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.angle;

        if(keyIsDown(UP_ARROW) && this.angle < 1.77){
            this.angle += 0.01;
        }

        if(keyIsDown(DOWN_ARROW) && this.angle > 1.1){
            this.angle -= 0.01;
        }
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}