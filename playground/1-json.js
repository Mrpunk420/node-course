const fs = require('fs')
// const book = {
//     title: 'Rich dad Poor dad',
//     auther: 'Jamie Foxx'
// }

// const JsonBook = JSON.stringify(book);    //json to string 

// console.log(book.title)
// console.log(JSON.parse(JsonBook))

// fs.writeFileSync('1-json.json', JsonBook)

// const dataBufer = fs.readFileSync('1-json.json')
// const dataJson = dataBufer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title); 


/////////////////////////////


const file = fs.readFileSync('./1-json.json')   //get file buffered data
const fileStringData = file.toString();         //convert the data to string
const fileJsonData = JSON.parse(fileStringData)     //change data to object
fileJsonData.name = 'Amit'      //change data
fileJsonData.age = '18'         //change data    
const newData = JSON.stringify(fileJsonData)        //convert data to json again

const update =  fs.writeFileSync('1-json.json',newData)  //right the file
if (update === true ) {
    console.log('saved')
}

