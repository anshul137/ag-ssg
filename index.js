/*
    Name- Anshul Gandhi
    Course- DPS 909
    Project Name- Static site Generator (SSG)
*/

//start here

import readline from 'readline';
import path from 'path';
import fs from 'fs';
export function ssg_(file) {
  let extension = path.extname(file);
  let filename = path.basename(file, extension);
  const dir = './dist';
  /*
  //check text file type
  if (extension !== '.txt') {
    console.log('Wrong File type');
    return;
  }
  */
  //remove directory if already exist adn recurect it again
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }

  // create the directory folder  if not exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.lstat(file, (err, stats) => {
    if (err) {
      console.log(err);
      return;
    } else {
      if (stats.isDirectory()) {
        fs.readdir(file, (err, files) => {
          files.forEach((fileN) => {
            if (err) {
              console.log(err);
              return;
            }
            if (path.extname(fileN) == '.txt') {
              readFile(file + '/' + fileN).then(function (data) {
                writeFile(fileN, data);
              });
            }
          });
          generateIndexHtml(files, true);
        });
      } else {
        if (path.extname(filename) == '.txt') {
          readFile(file).then((data) => {
            writeFile(filename, data);
            generateIndexHtml(file);
          });
        }
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
        arr.push('\n');
      }
    }
    resolve(arr);
  });
}

//function to generate index.html

function generateIndexHtml(files, dir) {
  let html = '';
  let content = '';
  if (dir) {
    for (var fileInpt of files) {
      var htmlfile = fileInpt.substring(0, fileInpt.length - 4) + '.html';
      html += `<li><a href="${htmlfile}">${htmlfile}</a></li>`;
    }
  } else {
    var htmlfile = files.substring(0, files.length - 4) + '.html';
    html += `<li><a href="${htmlfile}">${htmlfile}</a></li>`;
  }
  html = `<!doctype html><html lang="en">
      <head>
          <meta charset="utf-8">
          <title>Title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="../style.css">
      </head>
      <body >
          ${content}
      </body>
      </html>`;
  fs.writeFile('./dist/index.html', html, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Index file created successfully');
  });
}

//function to write file

function writeFile(filename, data) {
  return new Promise(async (resolve, reject) => {
    let content = '';
    let html = '';
    let title = filename.substring(0, filename.length - 4);
    var filedest = './dist/' + filename + '.html';
    for (var line of data) {
      if (line !== '\n') {
        content += `<p>${line}</p>`;
      } else {
        content += '\n';
      }
    }
    html = `
        <!doctype html><html lang="en">
      <head>
          <meta charset="utf-8">
          <title>${title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="../style.css">
      </head>
      <body >
          ${content}
      </body>
      </html>`;
    fs.writeFile(filedest, html, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(
        'File created successfully ' + filename + 'check the dist folder'
      );
    });

    resolve(html);
  });
}
