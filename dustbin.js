var box1,box2,box3;
class DustBin{
   
    constructor(){
       
        box1=Bodies.rectangle(width/2,630,200,10,{isStatic:true});
        World.add(world,box1);
       box2=Bodies.rectangle((width/2)-100,585,10,100,{isStatic:true});
        World.add(world,box2);
        box3=Bodies.rectangle((width/2)+100,585,10,100,{isStatic:true});
        World.add(world,box3);
        
    }
    
    display(){
        push();
       rectMode(CENTER);
       fill('orange');
        rect(box1.position.x,box1.position.y,200,10);
        rect(box2.position.x,box2.position.y,10,100);
        rect(box3.position.x,box3.position.y,10,100);
        pop();  
    }
        
};