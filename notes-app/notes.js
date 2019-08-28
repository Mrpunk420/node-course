const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => console.log(chalk.bgRed("Your notes...."))

const addNotes = (title, body) =>
{
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })    
        saveNote(notes);        
        console.log('Note Added Successfully!')
    }
    else {
        console.log('Duplicate Title Exits.')
    }

}

const removeNote = (title) =>
{
    const notes = loadNotes();
    const Newnotes = notes.filter((note) =>  note.title !== title)
    
    if (notes.length === Newnotes.length ) {
        return console.log(chalk.bgRed('No Note Found'))
    }

    saveNote(Newnotes)
    console.log(chalk.bgGreen('Note removed successfully'));
}

const readNote = (title) =>
{
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title)
    if (noteToRead) {
    console.log(chalk.bgYellow.green('Title =>')+ '  ' + (noteToRead.title))
    console.log(chalk.bgRed.green('Body =>')+ ' ' +(noteToRead.body));        
    }
    else{
        console.log(chalk.red('Unable to find note.'))
    }

    debugger

}

const listNotes = () =>
{
    
    const notes = loadNotes().forEach((note) => {
        console.log('Title =>' + chalk.bgGreen.magenta(note.title))
        console.log('Body => ' + chalk.bgYellow.red(note.body))
        console.log('\n')
    });
    
}

const saveNote = (notes) =>
{
    const dataJson = JSON.stringify(notes) 
    fs.writeFileSync('notes.json', dataJson);
    
}
const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJson = databuffer.toString();
        return JSON.parse(dataJson)
    }
    catch (e) {
        return [];
    }
} 
// module.exports = getNotes ;
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    readNote: readNote,
    listNotes:listNotes
};