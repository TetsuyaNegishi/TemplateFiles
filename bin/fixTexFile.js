const fs = require('fs');

const inputFilePath = process.argv[2];
const buf = fs.readFileSync(inputFilePath);
let str = buf.toString();
str = str.replace(/\\tightlist/g, '');
str = str.replace(/、|,\s/g, '，');
str = str.replace(/。/g, '．');
str = str.replace(/\\begin{figure}/g, '\\begin{figure}[htbp]');

const data = str;
fs.writeFile(inputFilePath, data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('\\tightlistを削除しました');
  }
});
