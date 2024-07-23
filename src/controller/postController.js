// src/controllers/postController.js
const db = require('../config/firebaseAdmin');

const getPosts = async (req, res) => {
  try {
    const snapshot = await db.collection('posts').get();
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = { title, content, createdAt: new Date() };
    const docRef = await db.collection('posts').add(newPost);
    res.status(201).json({ id: docRef.id, ...newPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPosts, addPost };
