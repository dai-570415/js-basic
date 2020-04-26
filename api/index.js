// async asyncが主流
async function callApi() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
}

// function callApi() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => {
//             return res.json();
//         })
//         .then((users) => {
//             console.log(users);
//         });
// }

// function callApi() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     xhr.responseType = 'json';
//     xhr.send();
//     xhr.onload = () => {
//         console.log(xhr.response);
//     }
// }

callApi();