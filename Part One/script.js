// alert ('working')

async function getNum(){
r = await axios.get('http://numbersapi.com/1?json')
console.log(r)
}
// getCard()

let nums = [1,3,6,9]
async function getNums(){
    r = await axios.get(`http://numbersapi.com/${nums}?json`)
    for (let key in r.data){
        $('body').append(`<p>${r.data[key]}</p>`)
    } 
    }


    
async function getFacts () {
let facts = await Promise.all(
        [axios.get('http://numbersapi.com/1?json'),
        axios.get('http://numbersapi.com/1?json'),
        axios.get('http://numbersapi.com/1?json'),
        axios.get('http://numbersapi.com/1?json')],
)
        facts.forEach(fact => $('body').append(`<p>${fact.data.text}</p>`))
}     




