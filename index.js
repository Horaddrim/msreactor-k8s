const express = require('express');

const app = express();

async function main() {
    app.get('/ms', async (req, res) => {
        res.send("hello");
    });

    app.listen(8000, 
        () => console.log("Listening on port 8000..."));
}

main();