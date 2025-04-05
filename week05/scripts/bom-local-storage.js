const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

  // Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList(This function does not exist, yet).
  // In that same array variable declaration and assignment, add a compound OR condition to assign it an empty array in case this is the user's first visit or if the localStorage item is missing.
let chaptersArray = getChapterList() || []; //The array declaration initializes the chaptersArray variable with the list of chapters returned by the getChapterList() function or an empty array if the function call returns null or undefined.

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function () {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();//update localStorage

        input.value = '';//clears input
        input.focus();//sets focus/cursor back to input
    }
});



function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;//use innerHTML when including HTML tags

    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);//needed to remove chapter from array and localStorage
        input.focus;
    });
}

function setChapterList() {
    localStorage.setItem(`myFavoriteBoMList`, JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem(`myFavoriteBoMList`));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}