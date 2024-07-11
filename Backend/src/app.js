const express = require("express");
require("./db/conn.js");
const cors =require("cors");

const BookDetail = require("./models/books.js");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors(
  
));
app.get("/",async(req,res)=>{
  try {
    console.log("yes, its done");
    res.statu(200).send("Yes");
  } catch (error) {
    console.log("error occured",error);
    
  }
})
app.get("/audiobooks", async (req, res) => {
  try {
    const getAudioBooks = await BookDetail.find(req.query);
    res.status(200).send(getAudioBooks);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/audiobooks/:id", async (req, res) => {
  try {
    const _id=req.params.id;
    const getAudioBook = await BookDetail.findById(_id);
    res.status(200).send(getAudioBook);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/audiobooks", async (req, res) => {
  try {
    const addingAudioBooks = new BookDetail(req.body);
    const addedAudioBooks = await addingAudioBooks.save();
    res.status(201).send(addedAudioBooks);
    console.log("created details :))");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.patch("/audiobooks/:id", async (req, res) => {
  try {
    const _id=req.params.id;
    const getAudioBook = await BookDetail.findByIdAndUpdate(_id,req.body,{new : true});
    res.status(201).send(getAudioBook);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/audiobooks/:id/reviews",async(req,res)=>{
  try {
    const {name,rating,comment}=req.body
    const bookdetail=await BookDetail.findById(req.params.id)
    const review={
      name,
      rating:Number(rating),
      comment
    }
    bookdetail.reviews.push(review)
    bookdetail.rating=
    bookdetail.reviews.reduce((acc,item)=>item.rating+acc,0)/bookdetail.reviews.length
    await bookdetail.save()
    res.status(201).send(bookdetail)
  } catch (error) {
    res.status(500).send(error);
  }
})
app.delete("/audiobooks/:id", async (req, res) => {
  try {
    const _id=req.params.id;
    const getAudioBook = await BookDetail.findByIdAndDelete(req.params.id);
    res.status(201).send(getAudioBook);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(port, () => {
  console.log(`connected at port ${port}`);
});

