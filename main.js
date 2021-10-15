//what is api 
//application programing interface
// const promise = new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     reject(new Error("erro occured"));
//     resolve({user:"Sam"})},3000);
    
// }) ;

// promise.then(user=>console.log(user)).catch(err=>console.log(err.message));

//challenge :
// make a new directory in your javascript folder (mkdir kanye-quotes)
// in this directory I want you to make an application where I can click on a "Get Quote" button
// using the api below, when I click on the button I want to recieve a random Kanye West quote on the page
// https://api.kanye.rest

// EXT
// style it, add titles/images etc
// host it on github pages
const heading = document.querySelector("h1");
const button = document.querySelector("button");
button.addEventListener('click',(event)=>{
    //what do we want to happen when the button is clicked
    event.preventDefault();
    heading.classList.add("highlight");    
    return fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(json=>heading.innerText=json.quote)
    .catch(err=>console.log(err))

});

// const getRandomNumber =()=>{
// return fetch('https://random-word-api.herokuapp.com/word?number=10')
//     .then(res=>res.json())
//     .then(json=>heading.innerText=json[0])
//     .catch(err=>console.log(err))

// }
// getRandomNumber();