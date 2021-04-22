let canvas = {width: 800, height:600}



class VisualCard {
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

    vx = 4
    vy = 4

    move(){

        this.x += this.vx;
        //this.y += this.vy;

        // if (this.x < 0 || this.x > canvas.width) {
        //     // this.vx = -this.vx
        //     this.x = 0 
        // }
        // if (this.y < 0 || this.y > this.canvas.height) {
        //     //this.vy = 0

        //     this.y=0
        // }
    }
    

    draw(){
        this.move()
        fill("white");
        rect(0, 0, 150, 200, 7); 
    
    
        //center
        fill(this.card.color);
        textSize(100)
        textAlign(CENTER);
        text(this.getIcon(), 70, 130);
    
        //TOP LEFT ~~~~~

        //letter
        textSize(30)
        textAlign(LEFT);
        text(this.getLetter(), 15, 30);

        //symbol
        textSize(30)
        textAlign(LEFT);
        text(this.getIcon(), 15, 60);

    

        //bottom right
        textAlign(RIGHT);
        text(this.getLetter(), 140, 190);

        
        
    }



}

let dealer = new Dealer();
let hand = dealer.getHand();
let visHand = []

for (i = 0; i < hand.length; i++) {
    const card = hand[i]
    let visCard = new VisualCard(card)
    visHand.push(visCard)
}



let pack = new PackOfCards();
let deck = pack.createDeck()

let visDeck = []

for ( i = 0; i < deck.length; i++) {
    const card = deck[i]
    let visCard = new VisualCard(card)
    visDeck.push(visCard)
}












var setup = function(){
    var myCanvas = createCanvas(1000, 800)
    //myCanvas.parent("display");
};


var draw = function(){
    background("forestgreen")

    // for (i = 0; i < visHand.length; i++) {
    //     const visCard = visHand[i]
    //     if (i === 0) {
    //         translate(40, 40)
    //     } else {translate(160, 0)}
    //     visCard.draw()
    // }

    

    for (i = 0; i < visDeck.length; i++) {
        const visCard = visDeck[i]
        if (i === 0) {translate(40, 40)} 
        else if (i % 6 === 0) {translate(-800, 240)}
        else {translate(160, 0)}
        visCard.draw()
        
    }
    
};


