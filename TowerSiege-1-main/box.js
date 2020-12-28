class box {
    constructor(x, y, width, height) {
      var options={
      "restitution":1,
       'density':.5   ,
      'friction':0.7}
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.v=255
      World.add(world, this.body);
    }
    display(){
       if(this.body.speed<2.5){
        var pos =this.body.position;
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill(255);
      rotate(angle)
      rect(0,0,this.width, this.height);
      }
      else{World.remove(world,this.body)
        push()
      tint(255,this.v)
    this.v=this.v-5
      }
      pop()
      
    }
    score(){
      if(this.v<0 && this.v>-105){
        score++
      }}
  };

  
