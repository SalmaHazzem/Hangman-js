let letters='abcdefghijklmnopqrstuvwxyz';
let lettersArray=Array.from(letters);


let lettersContainer=document.querySelector('.letters');

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    let theLetter =document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className='letterBox';
    lettersContainer.appendChild(span); 

});

// the object that will contain the categories of the game
// that the user will gess from

let words ={
    programming:['java','php','python'],
    movies:['rosie','legand','island','revenant'],
    people:['salma','mohammed','mama','ahmed','rana','abdlaziz']
}

//now we will create var that will contain the arrays
let allKeys= Object.keys(words);

//now we want to get words of that arrays so first we want to get the array
//now we will create random numbers that the indexes of arrays

let randomPropNumber = Math.floor(Math.random()*allKeys.length);
//now we get random acsses on indexes of arrays
//to get specific array name
let randomPropName = allKeys[randomPropNumber];
//now we want to get elements of array
let randomPropValue = words[randomPropName];
//now we want to get random word will first to get indexes of words of an array say programming wo want to geat random index on it 
let randomValueNumber = Math.floor(Math.random()*randomPropValue.length);
//the chosen word
let randomValueValue = randomPropValue[randomValueNumber];
console.log(randomValueValue)


//will create an array from the chosen word
let lettersAndSpace =Array.from(randomValueValue);
let gessContainer = document.querySelector('.gess');
lettersAndSpace.forEach(ele => {
let span = document.createElement('span');
gessContainer.appendChild(span);
});


let gessSpans= document.querySelectorAll('.gess span');
let draw =document.querySelector('.draw');
let count =0;
let arr=[];

document.addEventListener('click', e => {
    let theStatus = false;
    if(e.target.className == 'letterBox'){
       e.target.classList.add('clicked');
   let  theClickedElement =e.target.innerHTML.toLowerCase();

  let theChosenWord = Array.from(randomValueValue.toLowerCase());
  theChosenWord.forEach((wordLetter,wordIndex) =>{
    if(wordLetter==theClickedElement){
        theStatus =true;
        gessSpans.forEach( (wordSpan,spanIndex) => {
            if(wordIndex ==spanIndex){
                wordSpan.innerHTML =theClickedElement;
               // arr.push(theClickedElement);
               arr[wordIndex]=theClickedElement;
            
            }
        })
        
       
    }
  } );

         if(theStatus == false ){
            count++;
            draw.classList.add(`wrong-${count}`);
            if(count==6){
                lettersContainer.classList.add('fineshed');
                end();
            }
   
             }
             if(theChosenWord.toString()==arr.toString()){
                succes()
             }
           
            }  
            
            console.log(arr)
})

 


function end (){
let div =document.createElement('div');

div.classList.add('popUp');
let text =document.createTextNode(`game over,and you failed the correct word is ${randomValueValue}`);
div.appendChild(text);
document.body.appendChild(div);

let btn =document.createElement('button');
btn.classList.add("btn");
let btnText =document.createTextNode(`OK`);
btn.appendChild(btnText);
div.appendChild(btn);
btn.addEventListener('click', e =>{
location.reload();
})
}

function succes(){
    let div = document.createElement('div');
    div.classList.add('popUp');
    let text = document.createTextNode('Good Job,you are succesed');
    div.appendChild(text);
    document.body.appendChild(div);
    let btn =document.createElement('button');
btn.classList.add("btn");
let btnText =document.createTextNode(`Restart`);
btn.appendChild(btnText);
div.appendChild(btn);
btn.addEventListener('click', e =>{
location.reload();
})

}