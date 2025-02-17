// STEP 1 - USE Inquirer npn package to get user input

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {   message: "Type in your URL: ", 
        name: "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;

    // STEP 2 - USE Qr-image npm package to turn the user entered URL into a QR code image
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    // STEP 3 - WRITE user input to a file
    fs.writeFile("URL.text", url, (err) =>{
        if(err) throw err;
        console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  

