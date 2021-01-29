class Sand{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:5.0,
            density:1.0
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r/2,options);

        World.add(world,this.body)
    }
    display(){
        push();
        strokeWeight(3);
        stroke("grey");
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
}