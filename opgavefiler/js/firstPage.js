/* Opgave 1*/
// din kode her
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");

fetch(myDataFileUrl)
.then((response) => {
    return response.json();
})
.then((data) => {
    // console.log(data.DK);
    console.log(data.DK.headline);
    console.log(data.DK.text);
    myStoryElement = data;
})
.catch((error) => {
    console.error(error);
});





/* Opgave 2 - skriv videre på koden her: */
// const myDataFileUrl = "../../opgavefiler/data/story.json";
// const myStoryElement = document.getElementById("theStory");





/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");


/* Opgave 4*/
// din kode her
