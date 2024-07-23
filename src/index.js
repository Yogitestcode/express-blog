const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes'); // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
