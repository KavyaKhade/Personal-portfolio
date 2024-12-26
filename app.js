const express= require('express');
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');
const serveStatic = require('serve-static');
const path = require('path');

const app= express();
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname, 'contact.html');
    console.log(__dirname);
});

app.post("/", function(req,res){
    const comm=req.body.message;
    const na=req.body.nameofperson;
    var transpoter= nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'kavyakhade@gmail.com',
            pass: 'opib zirh nubx stlb'
        }
    })


    var mailOptions={
        from:'kavyakhade@gmail.com',
        to: req.body.emailid,
        cc:'kavyakhade@gmail.com',
        subject:'Thanks for giving feedback, Kavya' +na,
        text:'Thanks for your message you have sent to us-->' +comm
    };
    transpoter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error)
    }else{
        //res.send("mail submitted");
        res.redirect('/');
        console.log("email sent"+ info.response)
    }
})
});



app.listen(3000, function(){
    console.log("Server started at 3000");
});