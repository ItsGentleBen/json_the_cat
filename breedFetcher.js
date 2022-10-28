const request = require('request');
const input = process.argv.slice(2);
const breed = input;
let site = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(site, (err, response/*I dont know what to do with response */, body) => {
  if (err) {
    // console.log(err);
    return err;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed is not found');
    return err;
  }
  console.log(data[0].description);
  console.log(typeof data[0].description)
})


// const fs = require('fs');
// const input = process.argv.slice(2);
// const url = input[0];
// const location = input[1];
// // console.log(url);
// // console.log(location);
// const writePageToFile = (site, fileLocation) => {
//   request(site, (err, response/*I dont know what to do with response */, body) => {
//     if (err) {
//       console.error(err);
//     }
//     // console.log(response); All this does is spit it all out to console. Leaving it out is cleaner.
//     fs.writeFile(fileLocation, body, err => {
//       if (err) {
//         console.error(err);
//       }
//       console.log(`Downloaded and saved ${body.length} bytes to ${location}`);
//     });
//   });
// };

// writePageToFile(url, location)