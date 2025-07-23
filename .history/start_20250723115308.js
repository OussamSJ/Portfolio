const { exec } = require('child_process');

exec('npm start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Erreur : ${stderr}`);
    return;
  }
  console.log(stdout);
});