import {Request, Response} from 'express';

const express = require('express')
const app = express()
const port = 65436;

app.use(express.json());

app.post('/test', (req: Request, res: Response) => {
  const {string_to_cut} = req.body;
  if(!string_to_cut){
    res.send("ERROR: Please send a JSON payload with a key 'string_to_cut'")
  }

  //Input a string and number, outputs string with each character after number of steps have been reached
  function cutString(str:String, step:number){
    return str.split('').map((el, i) => (i+1) % step === 0 ? el : '').join('');
  }
  res.send({return_string: cutString(string_to_cut,3)})
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))