let canvas = {width: 1850, height:3050}



class VisualCard {
    constructor(card){
        this.card = card
    }
    
    x = 40
    y = 40
    w = 150
    h = 200
    r = 80
    o = 60
    a = 90
    b = 100
    isDrag = false


    xOffset = 0
    yOffset = 0

    dragging() {
        if (mouseX > this.x && mouseX < this.x + this.w
        &&  mouseY > this.y && mouseY < this.y + this.h) {
            this.xOffset = mouseX - this.x
            this.yOffset = mouseY - this.y
            this.isDrag = true
            return true
        }
        else {return false}
    }

    drag() {
        if (this.isDrag === true) {


            this.x = mouseX - this.xOffset
            this.y = mouseY - this.yOffset

            // console.log("isdrag = true")

            
        }
    }
    
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

    push()
    {
        this.drag()
        translate(this.x , this.y)
        // translate(-(150/2), -130)
        // this.move()



        
        fill("white");
        rect(0, 0, this.w, this.h, 7); 
    

        if (this.card.color == "red") {
            noStroke()
            fill(143 + this.b, this.a, this.a, this.o);
            ellipse((this.w/2)+15, (this.h/2)+18, this.r, this.r);
            fill(112 + this.b, this.a, this.a, this.o); 
            ellipse((this.w/2)+4, (this.h/2)+11, this.r, this.r); 
            fill(110 + this.b, this.a, this.a, this.o); 
            ellipse((this.w/2)-16, (this.h/2)-13, this.r, this.r);
            fill(94 + this.b, this.a, this.a, this.o);
            ellipse((this.w/2)+8, (this.h/2)-17, this.r, this.r);
            fill(99 + this.b, this.a, this.a, this.o); 
            ellipse((this.w/2)-13, (this.h/2)+10, this.r, this.r); 
            fill(128 + this.b, this.a, this.a, this.o);
            ellipse((this.w/2)+12, (this.h/2)+8, this.r, this.r);
            fill(130 + this.b, this.a, this.a, this.o); 
            ellipse((this.w/2)+13, (this.h/2)-14, this.r, this.r);   

        }

        if (this.card.color == "black") {

            noStroke()
            fill(143, 143, 143, this.o);
            ellipse((this.w/2)+15, (this.h/2)+18, this.r, this.r);
            fill(112, 112, 112, this.o); 
            ellipse((this.w/2)+4, (this.h/2)+11, this.r, this.r); 
            fill(110, 110, 110, this.o); 
            ellipse((this.w/2)-16, (this.h/2)-13, this.r, this.r);
            fill(94, 94, 94, this.o);
            ellipse((this.w/2)+8, (this.h/2)-17, this.r, this.r);
            fill(99, 99, 99, this.o); 
            ellipse((this.w/2)-13, (this.h/2)+10, this.r, this.r); 
            fill(128, 128, 128, this.o);
            ellipse((this.w/2)+12, (this.h/2)+8, this.r, this.r);
            fill(130, 130, 130, this.o); 
            ellipse((this.w/2)+13, (this.h/2)-14, this.r, this.r);     

        }


        

        fill(255, 255, 255, 255);
        textSize(110)
        textAlign(CENTER);
        text(this.getIcon(), (150/2), 133);

    
        //center
        fill(this.card.color);
        textSize(100)
        textAlign(CENTER);
        text(this.getIcon(), (150/2), 130);

        

    
        //TOP LEFT ~~~~~

        //letter
        textSize(30)
        textAlign(LEFT);
        text(this.getLetter(), 15, 30);
        //textFont('TimesnewRoman')
        // textStyle(BOLD)

        //symbol
        textSize(30)
        textAlign(LEFT);
        text(this.getIcon(), 15, 60);

    

        //bottom right ~~~~~

        //letter
        textAlign(RIGHT);
        text(this.getLetter(), 140, 190);
        //textFont('TimesnewRoman')

        //symbol
        textSize(30)
        textAlign(RIGHT);
        text(this.getIcon(), 140, 160);
    }   
    pop()
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



let newRow = -0.8

let reset = 1



for (i = 0; i < deck.length; i++) {
    const card = deck[i]
    let visCard = new VisualCard(card)
    
    if ( i % 4 === 0 ) {
        newRow++
        reset = 1
    }


    visCard.y = (visCard.h + 20) * newRow

    visCard.x = 180 * reset
    reset++

    visDeck.push(visCard)
}







var setup = function(){
    var myCanvas = createCanvas(canvas.width, canvas.height)
    //myCanvas.parent("display");

};

// let initDraw = visHand.length


// let initDraw = visDeck.length
let initRow = visDeck.length



var draw = function(){

    background("forestgreen")

    //show deck
    
    for (i = 0; i < visDeck.length; i++) {
        const visCard = visDeck[i]

        visCard.draw()
        
    }
    
};



//drag the hand

window.mousePressed = function() {
    for (let i = 0; i < visDeck.length; i++) {
        const visCard = visDeck[i];
        visCard.dragging()
        
    }

    //visHand.forEach(visCard=>visCard.dragging())

    
}


window.mouseReleased = function() {

    for (i = 0; i < visDeck.length; i++) {

        visDeck[i].isDrag = false

    }
    
}
