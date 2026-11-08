import express from "express"
import cors from 'cors';
import { MongoClient } from 'mongodb';


const app = express();
const port = process.env.PORT || 5000


app.use(express.json());
app.use(cors());



const client = new MongoClient("mongodb://<db_username>:<db_password>@ac-thqtifa-shard-00-00.aeqv4oe.mongodb.net:27017,ac-thqtifa-shard-00-01.aeqv4oe.mongodb.net:27017,ac-thqtifa-shard-00-02.aeqv4oe.mongodb.net:27017/?ssl=true&replicaSet=atlas-yjz826-shard-0&authSource=admin");

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})