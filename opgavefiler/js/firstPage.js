/* Opgave 1*/
// din kode her
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");


fetch(myDataFileUrl)

.then((response) => {
    return response.json();
})

 .then((data) => {
    // console.log(data);
    myStoryElement.innerHTML = data.DK.text;

    const myImgUrl = document.createElement("img");
    myImgUrl.src = "../../opgavefiler/img/cat.jpg";
    myStoryElement.appendChild(myImgUrl);
 })

 .catch((error) => {
     console.error(error);
 });




/* Opgave 2 - skriv videre på koden her: */
const myStoryElementTwo = document.getElementById("theStoryTwo");

fetch(myDataFileUrl)

.then((response) => {
    return response.json();
})

 .then((data) => {
    console.log(data.SE.text);

    story('SE');
 })

 .catch((error) => {
     console.error(error);
 });

function story(language) {
    let myStory = null;

    switch (language) {
        case 'DK':
            myStory = (myStoryElementTwo.innerHTML = data.DK.text);
            break;
        case 'SE':
            myStory = (myStoryElementTwo.innerHTML = data.SE.text);
            break;
        case 'FI':
            myStory = (myStoryElementTwo.innerHTML = data.FI.text);
            break;
        case 'UK':
            myStory = (myStoryElementTwo.innerHTML = data.UK.text);
            break;
        default:
            break;
    }
}



/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");


/* Opgave 4*/
// din kode her
