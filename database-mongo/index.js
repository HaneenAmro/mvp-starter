var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hairSkin');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: String,
  createTime: { type: Date, default: Date.now },
  comment: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const postComment = function(result,cb) {
const {name , comment} = result;

const Comment = new Item ({
  name : name,
  comment : comment
})

Comment.save(cb);


}

module.exports = {selectAll , postComment};