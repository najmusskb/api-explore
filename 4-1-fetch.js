// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))



// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(Data => Addbutton(Data))
// }





function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/users') //load this url in JSON placeholder site with users 
        .then(response => response.json())
        .then(Data => Addbutton(Data))
}


function Addbutton(Data) {


    console.log(Data);


}