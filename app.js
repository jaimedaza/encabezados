const express = require('express');
const app = express();


app.get('/', (req, res) => {  
  const browser = req.headers['user-agent'];
  console.log(browser);
 // res.send(browser);
  res.redirect('/'+browser+'');
});

app.listen(3000, () => console.log('Listening on port 3000!'));