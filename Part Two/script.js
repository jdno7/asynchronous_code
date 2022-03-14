
const $drawBtn = $('button') 


async function getCard (){
    res = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
    console.log(res.data.cards[0].value, res.data.cards[0].suit)
}
async function getTwoCards (){
    res = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
    res2 = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
    console.log(res.data.cards[0].value, res.data.cards[0].suit)
    console.log(res2.data.cards[0].value, res.data.cards[0].suit)
}

const deck = {
    async init () {
        res = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        this.deckId = (res.data.deck_id)
    },
    async shuffle () {
        res = await axios.get(`http://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/?remaining=true`)
        this.remaining = res.data.remaining
        // console.log(res.data.remaining)
    },
    async getCard () {
        res = await axios.get(`http://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        // console.log(res.data.cards[0].image)
        return res.data.cards[0].image
    }
}

async function createDeck (){
   await deck.init()
   deck.shuffle()
}




async function clickHandler (evt){
    const card = await deck.getCard()
    $('body').append(`<div><img src=${card}></div>`)
    // console.log(deck.remaining)
    if (deck.remaining === 0) {
        alert('Game Over, Re-Shuffle?')
        location.reload()
    }
    else {
        deck.shuffle()
    }
}

$drawBtn.on('click', clickHandler)

createDeck()