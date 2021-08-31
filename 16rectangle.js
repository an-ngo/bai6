let Rectangle=function(width,height){
    this.width=width;
    this.height=height
    this.area=function(){
        return this.width*this.height;
    }
    this.chuvi=function(){
        return 2*(this.width+this.height);
    }
    this.display=function(){
        var ctx=document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.rect(0,0,this.width,this.height);
        ctx.stroke();
    }
}

let rectangle = new Rectangle(600,100)
rectangle.display();
rectangle.width=100;
rectangle.height=100;
document.write(rectangle.area());
document.write(rectangle.chuvi());