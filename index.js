import express from "express"

const app = express()
app.set('view engine', 'ejs');

import path from 'path';

app.use(express.static(path.resolve('./public')));
app.use(express.static('images'));

app.listen(8000, ()=>{
    console.log("Server is listening on port ", 8000);
})

app.use("/", (req, res)=>{
    res.render("index.ejs")
})