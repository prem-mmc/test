const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const nodemailer = require('nodemailer');
const ejs = require('ejs');
var fs = require('fs');

const Post = require('./models/post');
const app = express();
const app1 = express();




mongoose.connect("mongodb+srv://prem:U6IPYr2mjoPWel26@cluster0-todbc.mongodb.net/node?retryWrites=true&w=majority")
.then(() => {
    console.log('Connected to DB!');
})
.catch(() => {
    console.log('Connection failed!');
})
app.use(bodyParser.json());

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', "*");
   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token"
   );
   res.setHeader("Access-Control-Allow-Methods",
   "GET, POST, PATCH, DELETE, OPTIONS"
   );
    next();
});

app.post("/api/posts", (req, res, next) => {
    let post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'post added successfully',
            postId: createdPost._id
    });
    // console.log(post);
   
    });
})
console.log("test",this.post);

app.get('/api/posts', (req, res, next) => {
//    const posts = [
//        {
// id: "111",
// title: "First server",
// content: "First content"
//        }
//    ];
Post.find()
.then(documents => {
    console.log(documents);
    res.status(200).json(
        {
            message:'post fetched successfully',
            posts: documents
        });
        // var sam = "working";
        // res.render("html.ejs", {thingvar: "working"});
        // console.log("this is test:", sam);
    });
   
});
//    res.status(200).json(
//        {
//            message:'post fetched successfully',
//            posts: posts
//        }
//    );

app.delete("/api/posts/:id", (req, res, next) => {
    Post.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({ message: "Post deleted" });
    })
    // console.log(req.params.id);
    // res.status(200).json({ message: "Post deleted" });
});


//nodemailer code
app1.set('view engine', 'ejs');  
app1.listen(3001, function() {
    console.log("Listening on 3000");
     sendMail((err,info)=>{
           console.log(info)
       });
  });
 
 app1.get('/', function (req, res) {
   res.send('Hello World!')
 });

const sendMail = (cb) => {
  
	// Create a SMTP transporter object
	let transporter = nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	        user: 'premchandran563@gmail.com',
	        pass:  'personalacc'
	    }
	});
	//let poolConfig = 'smtp://virender.nehra@causeway.com:10101989\@Cc@192.168.76.5/?pool=true';
    //  let transporter = nodemailer.createTransport(poolConfig);        	          
	// Message object
	let message = {

		from: 'premchandran563@gmail.com',

	    // Comma separated list of recipients
	    to: 'premchandran563@gmail.com',
	    subject: 'Subject of the message', //Subject of the message
        UserName: 'prem',
	    FullName: 'premchandran',
	    Message: 'Hi this is test project to send mail with ejs template.'
	    
	};
	 var filePath = './views/test.ejs';
	 var compiled = ejs.compile(fs.readFileSync(filePath, 'utf8'));
	 message.html = compiled(message);
	transporter.sendMail(message, (error, info) => {
		console.log(error);
	    if (error) {
	       cb(error.message,null);
	    }
	    cb(null,info);
	    transporter.close();
	});
};



module.exports = app;