var express = require('express');
var booksRouter= express.Router();
function router(nav){
var books = [
    {
    title: "Book1",
    genre:"historical fiction",
    author:"lev"
    },
    {
       title: "Book2",
       genre:"historical fiction",
       author:"victor"
       },
       {
           title: "Book3",
           genre:"historical fiction",
           author:"lev"
           },
];
booksRouter.route('/')
.get((req,res)=>{
    res.render(
        'books',
        {
           nav,
          title:"Books",
          books
        }
    )
});
booksRouter.route('/:id')
.get((req,res)=>{
    const id =req.params.id;
    res.render(
        'book',
        {
           nav,
          title:"Books",
          book:books[id]
        }
    )
});
return booksRouter;
}
module.exports = router;