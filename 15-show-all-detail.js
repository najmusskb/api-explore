//34-6 Dynamic API Data Load and search on keyboard enter button
const LoadPhone = async (searchText, datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    DisplayPhones(data.data, datalimit);
}
//02. disply show this data ----------------------------------------------------------------
const DisplayPhones = (phone, datalimit) => {
    // console.log(phone);
    //03. eita korar por html file e ekta card ba jeita banaite cai seita korte hobe ---------
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText = '';
    // ------------------------------------------------------------------------------------
    // 07 display 10 phones only 





    const showeAll = document.getElementById('show-all');
    if (datalimit && phone.length > 10) {
        phone = phone.slice(0, 10);
        // button show
        showeAll.classList.remove('d-none');
    }
    else {

        showeAll.classList.add('d-none')
    }




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
            <p class="card-text">This</p>
            <button onclick="LoadPhoneDetais('${phone.slug}')" href="" class="btn btn-primary">Show Details</button>
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


const ProcessSearch = (datalimit) => {

    togglSpinner(true)
    const searchField = document.getElementById('input-search');
    const searchText = searchField.value;
    LoadPhone(searchText, datalimit)


}


document.getElementById('button-search').addEventListener('click', function () {
    ProcessSearch(10)
})



// search  input field  enter key handler

document.getElementById('input-search').addEventListener('keypress', function (e) {

    if (e.key === 'Enter') {
        // code for Enter
        ProcessSearch(10)
    }

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



// not the best way to solution

document.getElementById('button-show-all').addEventListener('click', function () {
    ProcessSearch();

})





const LoadPhoneDetais = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data)

}

// LoadPhone()