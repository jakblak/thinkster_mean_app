var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  votes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
  this.votes += 1;
  this.save(cb);
};

PostSchema.methods.downvote = function(cb) {
  this.votes -= 1;
  this.save(cb);
}

mongoose.model('Post', PostSchema);