//Simple function

// const square = function (x)
// {
//     return x * x;
// }

//ES6 function

// const square = (x) =>
// {
//     return x * x;
// }

//ES6 function single statement function

// const square = (x) => x * x
// console.log(square(10))

//ES6 methods

const event = {
    name: 'Birthday Party',
    guest: ['Amit', 'Manjot', 'Jasmeet'],
    printGuestList()
    {
        console.log('Guest List for ' + this.name)
        this.guest.forEach((guest) => {
            console.log( guest+' is arriving at '+ this.name )
        })
    }
}

event.printGuestList()