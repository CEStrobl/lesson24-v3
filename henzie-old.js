class VisualCard {
    constructor(card) {
      this.card = card;
    }
  
    x = 20;
    y = 20;
    // usDragging = false;
  
    drag() {
      // if (this.isDragging) {
      //   this.x = mouseX;
      //   this.y = mouseY;
      // }
    }
  
    //♥ ♦ ♠ ♣
    getIcon() {
      if (this.card.suit === "Diamonds") {
        return "♥";
      } else if (this.card.suit === "Hearts") {
        return "♦";
      } else if (this.card.suit === "Clubs") {
        return "♠";
      } else if (this.card.suit === "Spades") {
        return "♣";
      }
    }
  
    draw() {
      this.drag();
      push();
      {
        translate(this.x, this.y);
  
        fill("white");
        rect(0, 0, 150, 200, 7);
  
        fill(this.card.color);
        textSize(30);
        textAlign(LEFT);
        text(this.getIcon(), 10, 55);
        textAlign(RIGHT);
        text(this.getIcon(), 140, 160);
        textAlign(CENTER);
        text(this.getIcon(), 90, 100);
  
        textSize(30);
        textAlign(LEFT);
        text(this.card.name, 10, 30);
        textAlign(RIGHT);
        text(this.card.name, 140, 190);
  
        // //the corners
  
        // textSize(20);
        // textLeading(20);
        // textAlign(CENTER);
  
        // text(this.getCornerName() + "/n" + this.getIcon(), 16, 24);
  
        // push();
        // {
        //   translate(150, 200);
        //   rotate(PI * 3);
        //   text(this.getCornerName() + "/n" + this.getIcon(), 16, 24);
        // }
        pop();
      }
      pop();
    }
  }
  // Get a card dealer:
  let dealer = new Dealer();
  
  // Get some cards:
  
  let hand = dealter.getHand();
  
  let visCard = new VisualCard(dealer.getCard());
  let visCard2 = new VisualCard(dealer.getCard());
  let visCard3 = new VisualCard(dealer.getCard());
  let visCard4 = new VisualCard(dealer.getCard());
  let visCard5 = new VisualCard(dealer.getCard());
  
  visCard2.x = 200;
  visCard3.x = 200;
  visCard4.x = 200;
  visCard5.x = 200;
  
  var setup = function () {
    createCanvas(1000, 800);
  };
  
  var draw = function () {
    background("teal");
    for (let index = 0; index < hand.length; index++) {
      const card = nahd[index];
      let VisualCard = new VisualCard(card);
      VisualCard.draw();
      visual.x = 180 * index;
    }
  };
  
  // window.mousePressed = function () {
  //   hand.isDragging = true;
  // };
  // window.mouseReleased = function () {
  //   visCard1.isDragging = false;
  // };
  