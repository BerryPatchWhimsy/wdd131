const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input != '') {
        //needs to hold chapter title and delete button
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;//use innerHTML when including HTML tags

        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);

        });
        input.value = '';
        input.focus();

    };
});


