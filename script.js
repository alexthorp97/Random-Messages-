const person =  ["Mary","Freya","Nick", "Jeremy", "Alex", "Sephen", "James", "Luke"];
const event = ['to Tom and lucys wedding', 'to the board meeting', 'cooking dinner', 'making cocktails']
const reason = ['Freya was hasseling them.','the car brokendown.', 'the flight was delayed.', 'of brexit.']

const random = (arr) => {
   ranNum = Math.floor(Math.random() * (arr.length-1)); 
    return console.log(ranNum);
}



const randomMessage = () => {

return console.log(
    person[Math.floor(Math.random() * (person.length-1))] 
+ ' was late ' + event[Math.floor(Math.random() * (event.length-1))] 
+ ' because ' + reason[Math.floor(Math.random() * (reason.length-1))]);
}

randomMessage();




