// arrow Function

const LoadUsers = () => {

    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => DisplayUsers(data.results))
}

const DisplayUsers = users => {
    // data find korechi 
    // console.log(users)
    // ekhon amra users ta ke display kore dekhabo 

    const UsersContainer = document.getElementById('container');

    for (const user of users) {
        console.log(user)


        const UserDiv = document.createElement('div');

        UserDiv.classList.add('user');

        UserDiv.innerHTML = `

        <h3>User Name:${user.gender} </h3>
        <p>User Info:${user.cell} <p>
        <p>User Info:${user.email} <p>
        <p>User Info:${user.location.city} Country Name: ${user.location.country} <p>
        <p>User First-Name:${user.name.first} Last-Name :${user.name.last} <p>
        `;
        UsersContainer.appendChild(UserDiv);
    }
}

LoadUsers()