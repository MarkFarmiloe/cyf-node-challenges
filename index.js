const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const routes = {
    '/': 'This welcome page'
};

app.get('/', (req, res) => {
    res.send(routes);
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
