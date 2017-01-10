const chokidar = require('chokidar');

const watcher = chokidar.watch('*.md', {
  ignored: 'README.md',
  persistent: true,
});

const execSync = require('child_process').execSync;

watcher.on('all', (event, path) => {
  const resultMdToTex = execSync(`bash mdToTex.sh ${path}`).toString();
  console.log(resultMdToTex);
  const resultReportc = execSync('bash reportc.sh').toString();
  console.log(resultReportc);
});
