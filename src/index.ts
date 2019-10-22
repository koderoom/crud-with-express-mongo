import express from 'express';

import TodoManager from './crud.manager';

// instance of express
const app = express();

// PURPOSE :: READ THE POST BODY, JSON
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 



// GET API
app.get("/", async (req, res) => {
    // READING THE INPUT QUERY PARAM
    const inputReq = req.query;

    // const output = {data : 'Hello World!!', name : inputReq.name};
    const docs = await TodoManager.read();
    res.json(docs);
});


app.post("/", async (req, res) => {
    const inputBody = req.body;
    
    // const output = {data : 'Hello POST!!', name : inputBody.name};
    const output = await TodoManager.create(inputBody);
    res.json(output);
});


app.put("/", async (req, res) => {
    const inputBody = req.body;
    // const output = {data : 'Hello PUT!!',  name : inputBody.name};

    const output = await TodoManager.update(inputBody);
    res.json(output);
});


app.delete("/", async (req, res) => {
    const inputBody = req.body;
    // const output = {data : 'Hello DELETE!!',  name : inputBody.name};

    const output = await TodoManager.delete(inputBody);
    res.json(output);
});




app.listen(3000, function() {
    console.log('SERVER.STARTED');
});