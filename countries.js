


const countriesLoad = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}







const displayCountries = countries => {

    // for (const display of countries) {
    //     console.log(display);
    // }


    const countriesContainer = document.getElementById('countries-container');

    countries.forEach(country => {

        const CountryDiv = document.createElement('div');
        CountryDiv.classList.add('country')
        console.log(country);
        // for any how we find some of error (jemon kothao kichu nai
        // capital nai sei khetre amra ? use korbo);
        CountryDiv.innerHTML = `
   
   
        <h3>Name:${country.name.common} </h3>
        <p>capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        
`;

        countriesContainer.appendChild(CountryDiv)



    });
}















countriesLoad();
