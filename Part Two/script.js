

const $drawBtn = $('button') 

function clickHandler (evt){
    $.getJSON(`http://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then(data => {
        // console.log(data.cards)
        const card = data.cards[0].image
        console.log(data.cards[0].image)
        $('body').append(`<div><img src=${card} alt=""><?div>`)
    });
    
}

$drawBtn.on('click', clickHandler)
