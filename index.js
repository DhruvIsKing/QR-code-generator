/* 
1. Using the inquirer npm package to get user input.
2. Using the qr-image npm package to turn the user entered URL into a QR code image.
3. Creating a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs"; 

inquirer
  .prompt([{
    /* Pass your questions in here */
    name:"QR",
    message: "What would you like to say?",
    type: "input"
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    const userInput = answers.QR;
    var qr_png = qr.image(userInput, { type: 'png' });
    qr_png.pipe(fs.createWriteStream("QR.png"));
    fs.writeFile('QR.txt', userInput, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  });

