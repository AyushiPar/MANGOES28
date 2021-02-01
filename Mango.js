class Mango{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }

        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);
        this.mangoi = loadImage("mango.png");
        this.x=x; 
        this.y=y; 
        this.r=width;

    }

    display(){ 
        var angle = this.body.angle;
        push() ;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.mangoi,0,0,this.r,this.r);
        pop(); 
    }
}

