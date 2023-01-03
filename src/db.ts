import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('DB is Connected!'))
  .catch(err => console.log(err));
