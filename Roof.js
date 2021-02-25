class Roof{

    constructor(){
    
        this.body = Bodies.rectangle(220,100,270,30,{isStatic:true});
        World.add(world,this.body);
    }

    display(){
        var roofPos = this.body.position;
        rectMode(CENTER);
        rect(roofPos.x,roofPos.y,250,30);
    }
}