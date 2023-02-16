import 'reflect-metadata';
import express from 'express';
import {DataSource} from 'typeorm';
import {User} from './entities/User';

const app = express();
app.use(express.json());
const port = 3005;

app.get('/', async (req,res) => {

    const userRepo = AppDataSource.getRepository(User);

     //find All the records
    //const allRecords = await userRepo.find();

    //delete
   // await userRepo.delete(2);

   //insert

//    let user:User = new User();
//    user.email = "suresh@dskfj.com";
//    user.firstName = "suri";
//    user.lastName = "ka";

//    const userInserted = await userRepo.save(user);\

// await userRepo.update(3, {firstName: "name updated", lastName: "sur updated", email: "updated@gmai.com"});

//filter resource
const record = await userRepo.findOne({where: {firstName: "suresh"}});

    res.json(record);
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

