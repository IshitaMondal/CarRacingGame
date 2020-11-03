class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Join");
        this.greeting = createElement("h3");
    }
    display(){
        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(displayWidth/2-50,0);

        
        this.input.position(displayWidth/2-40, displayHeight/2-80);

       
        this.button.position(displayWidth/2+30, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            
            playerCount = playerCount+1;
            player.index = playerCount;
            player.updateCount(player.index);

            player.update();

            
            this.greeting.html("Welcome "+player.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4);
        });
        
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    displayRank(){
        background(bg);

        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(displayWidth/2-50,0);

        var message1 = createElement("h3");
        message1.html("CONGRATULATIONS "+ player.name);
        message1.position(displayWidth/2-100, displayHeight/2-5);

        var message2 = createElement("h3");
        message2.html("You have attaind the rank "+player.rank);
        message2.position(displayWidth/2-100, displayHeight/2+15);
    }
}