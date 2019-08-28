// Object property shorthand
//for this we can use like this if we have same constant name as object property just like name


const name = 'Amit';
const userAge = 21;

const user = {
    name,
    userAge,
    location: 'Patiala'
} 
console.log(user)

//object destructuring
//for this we just create a new const object and take the property name in it same as we have in object. we can also rename that property with : and our ne name above the property in the object. we can also define default propery as if the property is not in main object by setting it in new object as given below
//we can also use this in function 
const product = {
    label: 'Red Notebook',
    price: 10,
    stock: {
        number: 100
    },
    salePrice: undefined,
    rating:3
}

//const { label:ProductName, stock , rating = 5 } = product

// console.log(rating);


const transactions = (type,{ label, price }) =>
{
    console.log(label)
    console.log(price)
}

transactions('order',product)