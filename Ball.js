class Ball{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:1.5,
            friction:0
        }
        this.body = Bodies.circle(x,y,12,this.options);
        this.radius = 12;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill(random(255));
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}