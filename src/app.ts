import 'reflect-metadata';
import express from 'express';
import {DataSource} from 'typeorm';
import {User} from './entities/User';
import {Profile} from './entities/Profile';

const app = express();
app.use(express.json());
const port = 3005;

app.get('/', async (req,res) => {

    const userRepo = AppDataSource.getRepository(User);
    const profileRepo = AppDataSource.getRepository(Profile);

    await profileRepo.delete(1);
    res.send("profile deleted");

     //find All the records
    //const allRecords = await userRepo.find();

    //delete
   // await userRepo.delete(2);

//    const userFound = await userRepo.findOne({where : { id: 1}});

//    if(userFound){
//        userFound.email = 'test@gmail.com';
//        userFound.firstName = "test";
//        userFound.lastName = "test";
//        userFound.profile.gender = "female";
//        userFound.profile.photo = "no photo";

//        const updatedRecord = await userRepo.save(userFound);
//        res.json(updatedRecord);
//    } else{
//        res.send("record does not exitst");
//    }

   //insert
//    let profile:Profile = new Profile();
//    profile.gender = 'male';
//    profile.photo = 'this is the photo of somesh';


//    let user:User = new User();
//    user.email = "somesh@gmail.com";
//    user.firstName = "somesh";
//    user.lastName = "kare";
//    user.profile = profile;

//    const userInserted = await userRepo.save(user);

// await userRepo.update(3, {firstName: "name updated", lastName: "sur updated", email: "updated@gmai.com"});

//filter resource
//const record = await userRepo.findOne({where: {firstName: "suresh"}});

});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "suresh",
    database: "typeorm_db",
    entities: [User,Profile],
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

