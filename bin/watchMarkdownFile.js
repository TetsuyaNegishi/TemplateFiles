const chokidar = require('chokidar');
const path = require('path');

const watcher = chokidar.watch('md/*.md', {
  ignored: 'README.md',
  persistent: true,
});

const execSync = require('child_process').execSync;

watcher.on('all', (event, pathstr) => {
  const resultMdToTex = execSync(`bash bin/mdToTex.sh ${path.basename(pathstr)}`).toString();
  console.log(resultMdToTex);
  const resultReportc = execSync('bash bin/reportc.sh').toString();
  console.log(resultReportc);
});
