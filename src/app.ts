import 'reflect-metadata';
import express from 'express';
import {DataSource} from 'typeorm';
import {User} from './entities/User';

const app = express();
app.use(express.json());
const port = 3005;

app.get('/', (req,res) => {
    console.log("Hello from express");
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "suresh",
    database: "typeorm_db",
    entities: [User],
    synchronize: true,
    logging: true,
});

AppDataSource.initialize().then(() => {
    console.log("Database is connected successfully");
    app.listen(port, () => {
        console.log(`Server is running on ${port}`)
    });
}).catch((err) => {
    console.log("Database is not connected",err);
});

