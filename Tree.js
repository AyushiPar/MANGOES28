class Tree{
    constructor(){
        var options={
            isStatic:true,
        }

        this.body = Bodies.rectangle(430,50, 20, 20, options);
        World.add(world,this.body);
        this.treei = loadImage("tree.png");
    }

    display(){
        image(this.treei,430,50,450,450);
    }
}