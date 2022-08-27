// //Accessing Command Line Arguments
// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }


// //Setting Up Yargs
// const yargs = require('yargs')

// yargs.version('1.1.0')

// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function () {
//         console.log('Adding a new note!')
//     }
// })

// console.log(yargs.argv)


// //Adding Command Options
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function (argv) {
//         console.log('Title: ' + argv.title)
//         console.log('Body: ' + argv.body)
//     }
// })


// // [Lesson 5]
// // Working with JSON
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// // Covert Javascript object into JSON string
// const bookJSON = JSON.stringify(book)

// // Covert JSON string into object
// const bookObject = JSON.parse(bookJSON)
// console.log(bookObject.title) //Print: Ego is Enemy

//================================================================//

// [Lesson 8]
// Arrow Functions

// const square function (x) {
//      return x * x
// }

// const square = (x) => {
//     return x * x
// }

// console.log(square(2))  //Will print: 4

//================================================================//

// //Shorthand Syntax
// const squareAlt = (x) => x * x

// console.log(squareAlt(2)) //Will print: 4

//================================================================//

// //This Binding
// const event = {
//     name: 'Birthday Party',
//     guestList: ['Andrew', 'Jen', 'Mike'],
//     PrintGuestList() {
//         console.log('Guest list for ' + this.name)

//         this.guestList.forEach((guest) => {
//             console.log(guest + ' is attending ' + this.name)
//         })
//     }
// }

// event.PrintGuestList()

//================================================================//

// [Lesson 11]
// Array Find Method

const users = [{
    name: 'Andrew Mead',
    age: 27
},{
    name: 'George Hudson',
    age: 72
}, {
    name: 'Clay Klay',
    age: 45
}]

const user = users.fine((user) => user.name === 'George Hudson')

console.log(user) //Will print second object in the array