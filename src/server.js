const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.status(200).send('This is a sample app')
});

app.listen(port,()=>{
  console.log( `Server is up and running on port ${port}`);
})