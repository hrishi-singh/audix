const  mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    //   user: {
    //    type: mongoose.Schema.Types.ObjectId,
    //    required: true,
    //    ref: 'User',
    //          },
     },
    {
      timestamps: true,
    }
  )

const bookSchema =new mongoose.Schema({
    title:{
        type: String,
       required: true,
       trim: true
    },
    description:{
        type: String,
       required: true,
       trim: true
    },
    author:{
        type: String,
       required: true,
       trim: true
    },
    genre:{
        type: String,
       trim: true
    },
    published_date:{
        type:String,
        required: true

    },
    sales:{
        type:Number,
        required: true,
        default: 0
    },
    cover:{
        type:String
    },
    rating: {
        type: Number,
        default: 0,
      },
   reviews: [reviewSchema],
})

const BookDetail = new mongoose.model("BookDetail",bookSchema)

module.exports = BookDetail;