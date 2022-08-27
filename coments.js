function AddButtonClick() {

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(Data => pushDataToObject(Data))

}

function pushDataToObject(Data) {

    const getMainSection = document.getElementById('main-section');


    for (const DataArray of Data) {
        // console.log(DataArray)

        const makeDivData = document.createElement('div');
        makeDivData.innerHTML = `
    
         <h3>name:${DataArray.name}</h3>
         <h4>Email:${DataArray.email}</h4>
         <h5>Body:${DataArray.body}</h5>
         <h5>ID:${DataArray.id}</h5>
        
        `;
        getMainSection.appendChild(makeDivData);
    }



}