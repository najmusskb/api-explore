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
        // console.log(country);
        // for any how we find some of error (jemon kothao kichu nai
        // capital nai sei khetre amra ? use korbo);
        CountryDiv.innerHTML = `
   
   
        <h3>Name:${country.name.common} </h3>
        <p>capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>

        <button onclick="loadCountriesDetails('${country.cca2}')"> Details </button>
        
`;

        countriesContainer.appendChild(CountryDiv);

    });
}







const loadCountriesDetails = (code) => {

    // https://restcountries.com/v3.1/alpha/{code}  country code ta nilam {code er jaygay BD dile seitar information pabo} like : https://restcountries.com/v3.1/alpha/BD.


    const url = `https://restcountries.com/v3.1/alpha/${code}`

    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(arrayData => Displaycountriesdestails(arrayData[0]))
}

const Displaycountriesdestails = (countryDetails) => {
    console.log(countryDetails);
    const CountriesDetails = document.getElementById('country-detail');
    CountriesDetails.innerHTML = `
    <h2>Details:${countryDetails.name.common}</h2>
    <img src="${countryDetails.flags.png}">
    `;

}

countriesLoad();
