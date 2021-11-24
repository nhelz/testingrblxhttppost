const express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'))
const port = 8000;
app.listen(port);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})