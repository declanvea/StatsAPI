const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.json({ message: 'Camp Hope' });
});

app.use('/api', router);


app.listen(3000, () => console.log('Lunch has been cancelled, due to lack of hustle...'));
