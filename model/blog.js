const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author_id: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  category_id: { type: mongoose.Schema.ObjectId, ref: 'Category', required: true },
  publishedAt: { type: Date }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
