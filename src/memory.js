class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards=[]
    this.pairsClicked=0
    this.pairsGuessed=0

  }

  shuffleCards() {

    if(!this.cards) return undefined
  
    for (let index = this.cards.length-1; index >0; index--) {
                
            let j =Math.floor(Math.random()*(index +1 ))
            let temp=this.cards[index]
            this.cards[index]=this.cards[j]
            this.cards[j]=temp
    }
  return this.cards

  }

  checkIfPair(card1, card2) {
    this.pairsClicked+=1
    if(card1===card2) {
      this.pairsGuessed+=1
      return true
    }
    else{
      return false
    }
  }

  checkIfFinished() {
    
    if(this.pairsGuessed<this.cards.length/2) return false 
    else return true  
  
  }
}
