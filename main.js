function addStrikethrough() {
let argumentitem1 = document.querySelector('li');
argumentitem1.style.textDecoration = "line-through";

}
addStrikethrough();


function setImage(id, url){

    let image = document.querySelector('#'+ id);

    image.src = url;
    image.style.height = "300px"
}
setImage('image-1','https://f4.bcbits.com/img/a0240561299_16.jpg' );
setImage('image-2','https://f4.bcbits.com/img/a0289743471_16.jpg');
setImage('image-3','https://f4.bcbits.com/img/a2031531740_16.jpg');


function removeArgument(){

    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();

}
    removeArgument();
    removeArgument();

    function changeFont(id, size){
     let getID = document.querySelector(`#${id}`);

     getID.style.fontSize = size;

    }
    changeFont('heading','50px');
    changeFont('header','175px');

    //element= ANY Dom element

    function addElementToList(element){
     let arguments = document.querySelector('#arguments');
     arguments.appendChild(element);

    }
    let newImage = document.createElement('img');
    newImage.src = "https://f4.bcbits.com/img/a3286261025_2.jpg";
    newImage.style.height = "300px"

    addElementToList(newImage);

    //Write a function that takes in an image element and modifies its height to be 30 pixels.
    function changeImageHeight(image){
      image.style.height = "30px";
    
    }

    //4. Let's use it. Query an image element and then pass it into the function.
    let changeImage1 = document.querySelector('#image-1');
    let changeImage2 = document.querySelector('#image-3');

    changeImageHeight(changeImage1);
    changeImageHeight(changeImage2);

    //5. Write a function that takes in an element and gives it the class `invisible`.

    function setClassInvisible(element){
     element.className = "invisible"

    }
    //Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)
    
    setClassInvisible(changeImage1);

    //Part Three - Creating DOM Elements
    //1. Write a function that takes in text and returns a new `<li>` with the given text parameter as its `innerText`.
    function argument(domElement){
        let ul = document.querySelector('#arguments');
        ul.appendChild(domElement);
    }


    function liText(innerStr){

    let listItem = document.createElement('li');
    listItem.innerText = innerStr;
    return listItem;
    }

    let newLi = liText("Amazing Stuff");
    argument(newLi)

    function newHeader(size, text){
     let headerSize = `h${size}`
     let header = document.createElement(headerSize);
     header.innerText = text;
     return header;

    }
    newHeader(liText);
