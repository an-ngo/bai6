function Circle(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius=radius;
    }

    
    function getRandomHex(){
        return Math.floor(Math.random()*255);
    }

    function getRandomColor(){
        var red=getRandomHex();
        var green=getRandomHex();
        var blue = getRandomHex();
        return "rgb("+red+","+blue+","+green+")";
    }
    
    function createCircle(){
        var ctx=document.getElementById("myCanvas").getContext("2d");
        var radius=Math.floor(Math.random()*80)
        var x=Math.random()*window.innerWidth;
        var y=Math.random()*window.innerHeight;
        var circle = new Circle(x,y,radius);
        var color=getRandomColor();
        ctx.beginPath();
        ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        ctx.fillStyle=color;
        ctx.fill();
        //ctx.stroke();
    }

    

    function createAndDeleteCircle(){
        var ctx=document.getElementById("myCanvas").getContext("2d");
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        var radius=Math.floor(Math.random()*80)
        var x=Math.random()*window.innerWidth;
        var y=Math.random()*window.innerHeight;
        var circle = new Circle(x,y,radius);
        var color=getRandomColor();
        ctx.beginPath();
        ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        ctx.fillStyle=color;
        ctx.fill();
        
    }
    //var myVar=createAndDeleteCircle();
    //var myVar=setInterval(createAndDeleteCircle,1000);
    setInterval(createAndDeleteCircle,1000);
    //createCircle();
    // for(let i=0;i<20;i++){
    //     createCircle();
    // }