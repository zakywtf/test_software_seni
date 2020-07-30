import xpress from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import moment from 'moment';

import customApp from './controller/customAppCtrl';

let app = xpress()
dotenv.config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', customApp)


app.get('/',(req,res)=>{
  res.json({error:0, message:moment()});
})

app.listen(process.env.PORT, '127.0.0.1', () =>
  console.log(`Server connet on port ${process.env.PORT}`),
);