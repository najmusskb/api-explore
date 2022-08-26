
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


const ConvertJasonDAta = JSON.stringify(shop)
console.log(ConvertJasonDAta)



// convert jason.object 
const convertpreviousObject = JSON.parse(ConvertJasonDAta)
console.log(convertpreviousObject)