// const user = { Id: 1, Name: 'Gorib Amir ', job: 'Actor' };
// // JavaScript Object Notation (jason)
// const JasonStringfy = JSON.stringify(user)
// console.log(JasonStringfy);
// // output : {"Id":1,"Name":"Gorib Amir ","job":"Actor"} 



const shop = {
    owner: 'alia',
    Address: {
        street: 'ckocu khet vuter goli ',
        country: 'Vutan'
    },
    Product: ['Laptop', 'box', 'monitor', 'keyboard'],
    Revenue: 45000,
    IsOpen: true,
    isNew: false
}

// console.log(shop);
const ConvertJasonDAta = JSON.stringify(shop)
console.log(ConvertJasonDAta)



