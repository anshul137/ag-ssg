/*
    Name- Anshul Gandhi
    Course- DPS 909
    Project Name- Static site Generator (SSG)
*/

//start here
import fs from 'fs';
import path from 'path';
import readline from 'readline';

export function ssg_(file) {
  let extension = path.extname(file);
  let filename = path.basename(file, extension);
  var dir = './dist';
  //check text file type
  if (extension !== '.txt') {
    console.log('Wrong File type');
    return;
  }

  //remove directory if already exist adn recurect it again
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }

  // create the directory folder  if not exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.lstat(file, (err, stats) => {
    if (err) {
      console.log(err);
      return;
    }
    if (stats.isDirectory()) {
      fs.readdir(file, (err, files) => {
        if (err) {
          console.log(err);
          return;
        }
        files.forEach((file) => {
          readFile(file + filename).then((data) => {
            writeFile(filename, data);
          });
        });
        generateIndexHtml(files);
      });
    } else {
      if (path.extname(file) === '.txt') {
        readFile(file).then((data) => {
          writeFile(filename, data);
          generateIndexHtml(filename);
        });
      }
    }
  });
}

//fcuntion to read file
function readFile(file) {
  return new Promise(async (resolve, reject) => {
    let arr = [];
    const rl = readline.createInterface({
      input: fs.createReadStream(file),
    });
    //read line by line
    for await (const line of rl) {
      if (line !== '') {
        arr.push(line);
      } else {
        arr.push(line);
      }
    }
    resolve(arr);
  });
}

//function to generate index.html
//need fix
function generateIndexHtml(files) {
  let html = '';
  let content = '';
  for (let i = 0; i < files.length; i++) {
    content += '<li><a href="' + files[i] + '.html">' + files[i] + '</a></li>';
  }
  html =
    '<!DOCTYPE html><html><head><title>Index</title></head><body><ul>' +
    content +
    '</ul></body></html>';
  fs.writeFile('./dist/index.html', html, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Index file created successfully');
  });
}

//function to write file
//need fix
function writeFile(filename, data) {
  let content = '';
  let html = '';
  let title = filename.substring(0, filename.length - 4);
  var filedest = './dist/' + filename + '.html';
  return new Promise((resolve, reject) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === '') {
        content += '<p></p>';
      } else {
        content += '<p>' + data[i] + '</p>';
      }
    }
    html =
      '<!DOCTYPE html><html><head><title>' +
      title +
      '</title></head><body>' +
      content +
      '</body></html>';
    fs.writeFile(filedest, html, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('File created successfully');
    });
  });
}
