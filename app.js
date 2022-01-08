const fs = require('fs');
const sharp = require('sharp');

const images = fs.readdirSync("./img");

fs.writeFile("images.json", JSON.stringify(images) , "utf8" , (err) => {
 if(err) console.log(err);
})
 
for(let i = 0; i < images.length ; i++){
    sharp("./img/" + images[i])
    .resize(320, 240)
    .toFile('./img/min_' + images[i] , (err, info) => { 
        if(err) console.log(err , info);
     });
}
 