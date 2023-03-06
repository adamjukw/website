function mastFunc(){ 
    var booga = 4
    
    function ban() {
        booga = 5
        alert("hi");
    }

    function clering(x){
        x = x+booga
        return x;
    }
 // declare variables
    const FPS = 30;
    var xfib, xxfib, yfib, yyfib;
    xfib = 0
    xxfib = 1
    yfib = 0
    yyfib =1

    var bs = 30;
    var bx, by;
    var trbx, brbx;
    var trby, brby;

    var bbx, bby;

    var xv, yv;
    var xxv, yyv;

    var canvas, context;

    if (clering(5)== 10){
        return;
    }

    // load canvas
    canvas = document.getElementById("gameCanvas");
    context = canvas.getContext("2d");

    // ball starting position
    bx = canvas.width / 1.25; 
    by = canvas.height / 2;
    bbx = canvas.width / 4;
    bby = canvas.height / 2;

    // set up interval (game loop)
    const Inter = setInterval(update, 100 / FPS);

    // set interval if not touching
    // var with range of + or - size of square
    // if other pos in that range then stop


        


    // random ball starting speed (between 25 and 100 pps)
    xv = Math.round(Math.floor(Math.random() * 76 + 25) / FPS);
    yv = Math.round(Math.floor(Math.random() * 76 + 25) / FPS);
    xxv = Math.round(Math.floor(Math.random() * 76 + 25) / FPS);
    yyv = Math.round(Math.floor(Math.random() * 76 + 25) / FPS);

    // random ball direction
    if (Math.floor(Math.random() * 2) == 0) {
        xxv = -xxv;
    }
    if (Math.floor(Math.random() * 2) == 0) {
        yyv = -yyv;
    }

    // update function
    function update() {
        // detect collision
        
        // move the ball
        bx += xv;
        by += yv;
        bbx += xxv;
        bby += yyv;
        trbx = bx + bs;
        brbx = bx -bs;
        
        trby = by + bs;
        brby = by -bs;
        
        //bounce the ball off each wall
        if (bx - bs / 2 < 0 && xv < 0) {
            xv = -xv;
        }
        if (bx + bs / 2 > canvas.width && xv > 0) {
            xv = -xv;
        }
        if (by - bs / 2 < 0 && yv < 0) {
            yv = -yv;
        }
        if (by + bs / 2 > canvas.height && yv > 0) {
            yv = -yv;
        }
        

        if (bbx - bs / 2 < 0 && xxv < 0) {
            xxv = -xxv;
        }
        if (bbx + bs / 2 > canvas.width && xxv > 0) {
            xxv = -xxv;
        }
        if (bby - bs / 2 < 0 && yyv < 0) {
            yyv = -yyv;
        }
        if (bby + bs / 2 > canvas.height && yyv > 0) {
            yyv = -yyv;
        }
        
        // draw background and ball
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "blue";
        context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
        context.fillStyle = "red";
        context.fillRect(bbx -bs /2, bby - bs / 2, bs, bs);

        if (bby >= brby && bby <= trby && bbx >= brbx && bbx <= trbx){
            context.clearRect(0,0, canvas.width, canvas.height)
            clearInterval(Inter);
            context.fillStyle = "black";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "green";
            context.fillRect(bbx-bs/2, bby - bs / 2, bs, bs);

            const interSpiral = setInterval(updateSpiral, 1000 / FPS);
        
        }
        console.log(by,bby, bx, bbx)
    }
    function updateSpiral(){
        bbx += 2
        bby += 2
        bx -= 2
        by -= 2
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "green";
        context.fillRect(bbx, bby, bs/4, bs/4);
        context.fillStyle = "green";
        context.fillRect((bbx+5)*1.1, bby*1.1, bs/4, bs/4);
        context.fillStyle = "green";
        context.fillRect(bx, by, bs/4, bs/4);
        

    }

}


