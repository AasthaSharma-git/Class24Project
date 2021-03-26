class Paper{
    constructor(x){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
           
        }
        this.body=Bodies.circle(x,200,20,options);
        
        World.add(world,this.body)
    }
    display(){
        
        var pos=this.body.position;
        push();
        fill('white');
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20);
        pop();
    }
};