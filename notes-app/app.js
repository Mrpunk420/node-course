///////////////////
// include core modules
///////////////////


//const fs = require('fs');
    
// fs.writeFileSync('notes.txt', 'My Name is Amit bansal');
//fs.appendFileSync('note.txt', ' This is messi Node file append data')

/////////////////////////////

///////////////////
// include own modules
///////////////////

// const name1 = require('./utils.js');
// const add = require('./utils.js');
// const sum = add(4, 8);

// console.log(sum);

// const variable = require('./notes.js');
// console.log(variable());

// console.log(variable.getnotes());

///////////////////////////////

///////////////////
// include npm modules
///////////////////

// const validator = require('validator');
// console.log(validator.isEmail('ddd@gmail.com'));
// console.log(validator.isURL('http://www.google.com/'))

// const chalk = require('chalk');

// console.log(chalk.green('Success!')+chalk.bold.italic.bgRed('Hello World!')+chalk.bgYellow.blue('Waring!'))

// console.log(chalk.italic(`
// This is the shit 
// that is sharted by you
// `))
 
// console.log(chalk.red.inverse('Man its Amit who kill your brother '))

///////////////////////////////

// console.log(process.argv[2])


///////////////////
// Making of notes app
///////////////////

const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

//create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }  
})

//create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Remove a note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv)
    {
      notes.removeNote(argv.title)  
    } 
})

//create List command
yargs.command({
    command: "list",
    describe: "List of note",
    handler()
    {
        notes.getNotes()
        notes.listNotes()   
    } 
})

//create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: 'Read a note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title)
    }
})


// console.log(yargs.argv)
yargs.parse();

 