const LoadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    DisplayPhones(data.data);
}
//02. disply show this data ----------------------------------------------------------------
const DisplayPhones = phone => {
    // console.log(phone);
    //03. eita korar por html file e ekta card ba jeita banaite cai seita korte hobe ---------
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText = '';
    // ------------------------------------------------------------------------------------
    // 07 display 20 phones only 
    phone = phone.slice(0, 3);
    //  jodi phone na thake tahole ki hobe ???
    const noPhone = document.getElementById('no-phone-messege');
    if (phone.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }


    // -----------------------------------------------------------------------------------------------
    // forEeach ---jeita diya phone ke pabo
    phone.forEach(phone => {
        // create korte hobe grid er col ke 
        const PhoneDiv = document.createElement('div');
        // class ta add kore dite hobe sei grid col class ke 
        PhoneDiv.classList.add('col');
        PhoneDiv.innerHTML = `
        <div class="card p-4 w-75">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
        </div>
         </div>
        `;
        // 04 append  ---------------------------------------------------------------------------
        phonesContainer.appendChild(PhoneDiv);
    });

    // stop spinner loader 
    togglSpinner(false)
}

// 05 event handeler add with butto------------------------------------------------------------- 




document.getElementById('button-search').addEventListener('click', function () {
    togglSpinner(true)
    // 08 start Loader-------------------------------------------
    const searchField = document.getElementById('input-search');
    const searchText = searchField.value;
    searchField.value = '';
    // eikhane ektu kotha ache ,,amra jei search ta dibo seita ke daynamic vabe dite hobe ..upore url parameter e giya amader search ta daynami8c name set kore dite hobe 

    // 06---------------------------------------------------------------------------------------

    LoadPhone(searchText)
})
// for loader
const togglSpinner = IsLoading => {

    const loadersection = document.getElementById('loader');
    if (IsLoading) {

        loadersection.classList.remove('d-none');
    }
    else {
        loadersection.classList.add('d-none')
    }
}
