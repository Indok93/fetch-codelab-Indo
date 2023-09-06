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
    // myStoryElementTwo.innerHTML = data.SE.text;
    data = storyData;
    story('SE');
 })

 .catch((error) => {
     console.error(error);
 });

function story(language) {
    let myStory = null;
    let storyData = data;

    switch (language) {
        case 'DK':
            myStory = storyData.DK.text;
            break;
        case 'SE':
            myStory = storyData.SE.text;
            break;
        case 'FI':
            myStory = storyData.FI.text;
            break;
        case 'UK':
            myStory = storyData.UK.text;
            break;
        default:
            break;
    }
    // if(myStoryElementTwo){
    //     myStoryElementTwo.innerHTML = myStory;
    // }
}



/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

fetch(userURI)

.then((response) => {
    return response.json();
})

.then((data) => {
    // console.log(data);

    buildUsers(data);
})

.catch((error) => {
    console.error(error);
});

function buildUsers(myUserData) {
    myUserData.map((myUser) => {
        let myUserHTML =
        `<h2>${myUser.name}</h2>
        <p>Adresse:  ${myUser.address.street}  ${myUser.address.suite}</br>
        post nummer: ${myUser.address.zipcode}<br>
        by: ${myUser.address.city}</p>`;
        myUserlistElement.innerHTML += myUserHTML;
    });
}

/* Opgave 4*/
// din kode her
const apiDogURL = "https://dog.ceo/api/breeds/image/random";
const myDogs = document.getElementById("theDog");

fetch(apiDogURL)

.then((response) => {
    return response.json();
})

.then((data) => {
    // console.log(data);
    
    const notMyDog = document.createElement("img");
    notMyDog.src = data.message;
    myDogs.appendChild(notMyDog);
 })
 
.catch((error) => {
    console.error(error);
});