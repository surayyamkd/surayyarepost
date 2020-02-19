// var express = require('express');
// var app = new express();
// app.get('/', function(req,res){
//     res.send("Hello worldsss");
// });
// app.listen(8080,function(){
//     console.log('listening to port 8080');
// });
const express = require('express');
const chalk =require('chalk');
const path =require('path');

var app = new express();
var nav=[{link:'/books',title:'books'},{link:'/authors',title:'authors'}];

const booksRouter=require('./src/routes/bookRoutes.js')(nav);
app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);
app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/', function(req,res){
       res.render(
           'index',
           {
               nav,
            title:"Library"  
           }
        );
     });
     
    
     app.listen(8080,function(){
        console.log('listening to port '+chalk.green('8080'));
    });
