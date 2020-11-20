class Snake{
    constructor(size){
      this.x = 0;
      this.size = size;
      this.y = 0;
      this.total = 0;
      this.xspeed = 1;
      this.yspeed = 0;
      this.tail = [];
    }
    
    update(){
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
      if (this.total >= 1) {
        this.tail[this.total - 1] = createVector(this.x, this.y);
      }
      this.x = this.x + this.xspeed * this.size;
      this.y = this.y + this.yspeed * this.size;
      this.x = constrain(this.x,0,width-this.size);
      this.y = constrain(this.y,0,height-this.size);
    
    }
    
    
    eat(pos){
      let d = dist(this.x,this.y,pos.x,pos.y);
      if(d<10) {
        this.total++;
        return true;
      }
      return false;
    }
    
      death() {
      for (let i = 0; i < this.tail.length; i++) {
        let pos = this.tail[i];
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 10) {
          console.log('starting over');
          this.total = 0;
          this.tail = [];
          return true;
        }
      }
        return false;
    }
    
    
    direction(x,y){
      this.xspeed=x;
      this.yspeed=y;
    }
    
    
    show(){
      fill(255);
      for(let i=0;i<this.total;i++){
        rect(this.tail[i].x,this.tail[i].y,this.size,this.size);
      }
      rect(this.x,this.y,this.size,this.size);
    }
  }
  