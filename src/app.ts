import express from 'express';

const app = express();

app.use(express.json());
const port = 3005;

app.get('/', (req,res) => {
    console.log("Hello from express");
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});