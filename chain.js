class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        //this.sling1 = loadImage('Plucking mangoes/sling1.png');
        //this.sling2 = loadImage('sprites/sling2.png');
        //this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }




    }






}