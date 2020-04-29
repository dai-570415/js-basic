const moreButton = document.getElementById('addBtn');
const lists = document.getElementById('lists');

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return users;
}
const listUsers = async () => {
    const users = await getUsers();
    users.forEach(addList);
}

const addList = (user) => {
    const list = document.createElement('li');
    list.innerText = user.name;
    lists.appendChild(list);
}

window.addEventListener('load', listUsers);
moreButton.addEventListener('click', listUsers);