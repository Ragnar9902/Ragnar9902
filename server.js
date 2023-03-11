const express = require('express');
const app = express();
const dir_url = "/home/jesus/portfolio-responsive-complete"
app.use(express.static(dir_url));

app.get('*', (req, res) => {
  res.sendFile(dir_url + '/index.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
