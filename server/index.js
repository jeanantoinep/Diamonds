const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const userRoutes = require("./routes/userRoutes.js");
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://pondavj:HTK4HE5wjD1fVNPS@cluster0.tjpodxs.mongodb.net/', {
    dbName: 'Diamonds',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to the Diamonds database');
 
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });


  
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Server is running on port:' + PORT);
    }); 

app.get ('/api', (req, res) => {
    res.json({message: 'Hello from server!'});
    }
);

app.use(cors());
app.use(express.json());
app.use(userRoutes);

// app.post("/register", async (req, resp) => {
//     try {
//         const user = new User(req.body);
//         let result = await user.save();
//         result = result.toObject();
//         if (result) {
//             delete result.password;
//             resp.send(req.body);
//             console.log(result);
//         } else {
//             console.log("User already register");
//         }
 
//     } catch (e) {
//         resp.send("Something Went Wrong");
//     }
// });
