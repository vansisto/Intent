//Завдання від Сергія по Network: кріейтнути пейджу з якої я можу створити пост,
// після створення його побачити( можна просто стрінги) і вивести ліст на екран.
// ( умовно кажучи  - 3 кнопки: 'Create Post', 'Show last created', 'Show All'

let posts = [{someString: "fd"}, {someString: "fdsa"}];

let newPostInput = document.querySelector(".new-post");
let addPostButton = document.querySelector(".add-post");
let outputFiled = document.querySelector(".output");
let showLastButton = document.querySelector(".show-last");
let showAllButton = document.querySelector(".show-all");

addPostButton.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            someString: newPostInput.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json()
        .then(json => posts.push(json)));

    newPostInput.value = "";
    rerender();
});

showLastButton.addEventListener("click", () => {
    rerender();
    outputFiled.innerHTML = posts[posts.length - 1].someString;
});

showAllButton.addEventListener("click", () => {
    rerender();
    posts.forEach(p => {
        outputFiled.insertAdjacentHTML("beforeend", `<div>${p.someString}</div>`)
    });
});

function rerender(){
    newPostInput.value = "";
    outputFiled.innerHTML = "";
}