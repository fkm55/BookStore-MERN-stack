import express from "express";
const app = express();

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(200).send('A simple program to test CORS POLICY in Node.js')
});
app.listen(3000, () => {
    console.log('app listening on port 3000')
});