const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.get("/",(_,res)=>{
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});