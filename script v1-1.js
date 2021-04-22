class VisualCard{
    constructor(card){
        this.card = card
    }
    
    x=40
    y=40
    
    getIcon() {
        //this.card.suit
        //    ♥ ♦ ♠ ♣
    
        if (this.card.suit === "Diamonds") {
            return "♦";
        } else if (this.card.suit === "Hearts") {
            return "♥";
        } else if (this.card.suit === "Spades") {
            return "♠";
        } else if (this.card.suit === "Clubs") {
            return "♣";
        } 
    
    }

    getLetter() {

        if (this.card.name === "Jack") {
            return "J";
        } else if (this.card.name === "Queen") {
            return "Q"
        } else if (this.card.name === "King") {
            return "K"
        } else if (this.card.name === "Ace") {
            return "A"
        } else {return this.card.name}

    }
    

    draw(){
       translate(this.x, this.y)
    
       fill("white");
        rect(0,0, 150, 200, 7); 
    
    
    
        fill(this.card.color);
        textSize(100)
       textAlign(CENTER);
        text(this.getIcon(),70, 130);
    
        textSize(30)
        textAlign(LEFT);
        text(this.getLetter(), 15,30);
    
        textAlign(RIGHT);
        text(this.getLetter(), 140, 190);
    
    }



}

let dealer = new Dealer();
     
let card = dealer.getCard();
    
let visCard= new VisualCard(card)
    
    
    
    
var setup = function(){
    createCanvas(1000, 800)
    
};


var draw = function(){
    background("forestgreen")
    visCard.draw();
};


