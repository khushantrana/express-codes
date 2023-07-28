const express = require('express');
const path = require('path'); 
const app = express();

const PORT = 8000;

const friendRouter = require('./routes/friends.router');
const messageRouter = require('./routes/messages.router');
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(express.json());
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'views'));
app.use((req, res, next) => {
    const init = Date.now();
    next();
    const end = Date.now() - init;
    console.log(`${req.method} ${req.url} ${end}`);
})
app.use('/site',express.static(path.join(__dirname,'public')));
app.use('/friends', friendRouter);
app.use('/messages',messageRouter);
app.use('/', (req, res) => {
    res.render('index',{
        title: 'Hello World',
        caption:'Welcome to this website',
   }) 
}); 
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})


