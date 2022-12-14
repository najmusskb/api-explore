const LoadMeasl = (search) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))

}


const displayMeals = (meals) => {


    const MealsContainer = document.getElementById('meal-container');
    MealsContainer.innerText = ``;



    console.log(meals);

    meals.forEach(meal => {

        console.log(meal)

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="LoadMailDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title"> ${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p >
                </div >
        </div >
    `;

        MealsContainer.appendChild(mealDiv)

    });
}





const searchFood = () => {

    // console.log('searching ')
    const getInout = document.getElementById('input')

    const getInputText = getInout.value;
    LoadMeasl(getInputText);
    getInout.value = '';


}


const LoadMailDetail = (idMeal) => {

    // console.log('Get Detail Of id', idMeal)

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => DisplayMealDetails(data.meals[0]))

}



const DisplayMealDetails = meal => {

    const DetailContainer = document.getElementById('detail-container');
    DetailContainer.innerText = '';


    const mealDiv = document.createElement('div')
    mealDiv.classList.add('card')
    mealDiv.innerHTML = `

    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>

                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>

    `;

    DetailContainer.appendChild(mealDiv)




}

LoadMeasl('');

