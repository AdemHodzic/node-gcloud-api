const api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const https = require('https');
const fs = require('fs');
const path = require('path');
const downloadImage = async (uri, imageName) => {
  https.get(uri, (res) => {
    const filePath = path.join(__dirname, '..','static', `${imageName}.png`);
    if (res.statusCode === 200) {
      res.pipe(fs.createWriteStream(filePath))
    }
  })
}

for (let i = 1; i < 21; i++) {
  downloadImage(`${api}${i}.png`, `pokemon${i}`);
}
