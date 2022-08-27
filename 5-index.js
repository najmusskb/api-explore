
// daynamic vabe data load kore the seita daynamic vabe dekhano hobe 


function loadUsers2() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(DataArray => users2(DataArray))
}

function users2(DataArray) {
    const ul = document.getElementById('user-list');
    for (const User of DataArray) {
        const nameuser = User.name;
        const li = document.createElement('li');
        li.innerText = nameuser;
        ul.appendChild(li);
    }


}