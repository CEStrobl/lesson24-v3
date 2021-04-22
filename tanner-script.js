class VisualCard {
    constructor(card) {
      this.card = card;
    }
    x = 20;
    y = 20;
  
    isDragging = false;
  
    drag() {
      if (this.isDragging) {
        this.x = mouseX;
        this.y = mouseY;
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
  
    draw(card) {
      this.drag();
      push();
      {
        translate(this.x, this.y);
  
        fill("white");
        rect(0, 0, 150, 200, 7);
        //:hearts: :diamonds: :spades: :clubs:
  
        fill(this.card.color);
        textSize(100);
        textAlign(CENTER);
        text(this.getIcon(), 75, 110);
  
        textAlign(LEFT);
        text(this.card.name, 0, 75);
  
        textAlign(RIGHT);
        text(this.card.name, 150, 195);
      }
      pop();
    }
  }
  
  let dealer = new Dealer();

  let hand = dealer.getHand();
  let visHand = []

  for (i = 0; i < hand.length; i++) {
    const card = hand[i]
    let visCard = new VisualCard(card)

    visCard.x = 180 * i

    visHand.push(visCard)
  }


  
//   let card = dealer.getCard();
  
//   let visCard = new VisualCard(card);
  
//   let visCard2 = new VisualCard(card);
  
  var setup = function () {
    createCanvas(1500, 2000);
  };
  var draw = function () {
    background("forestgreen");

    for (i = 0; i < visHand.length; i++) {
        const visCard = visHand[i];
        visCard.draw();
    }

    // visCard.draw();
    
  };
  
  window.mousePressed = function () {
    visHand[0].isDragging = true;
  };
  
  window.mouseReleased = function () {
    visHand[0].isDragging = false;
  };