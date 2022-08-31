const LoadUserFach = () => {

    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(res => res.json())
        .then(data => DisplayUsers(data.results[0]))

        .catch(error => console.log(error));
}



const LoadUserAsink = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    const res = await fetch(url);
    const data = await res.json();
    DisplayUsers(data.results[0]);




}



const DisplayUsers = user => {
    console.log(user);


}


// for LoadUserAsink

