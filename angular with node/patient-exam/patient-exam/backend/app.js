var nodemailer = require('nodemailer');
const express = require('express');
var url = require('url');
const app = express();
var pd = require('./pdf')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'koogllemmc@gmail.com',
        pass: 'Arunkumar@106'
    }
});
var mailOptions = {
    from: 'koogllemmc@gmail.com',
    to: 'koogllemmc@gmail.com',
    subject: 'Patient note',
    text: 'test',
    html: '<h1>Welcome</h1><p>That was easy!!!!!!!!!!11</p><table> <caption>tabledata</caption> <tr><td>john</td>        <td>gr</td><td>arun</td></tr></table>',
    body: pd
};



transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'src/app/posts', 'pnindex.html'));
//     console.log('working', res);
// });

module.exports = app;