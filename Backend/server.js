require('dotenv').config();
const app = require('./src/app');

app.listen(3000, () => {
    console.log('Server is ruuning on port 3000');
});




