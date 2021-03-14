const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  
  //Set maxAge will check for idle screen. if it is more than 10 minuts. it will logged off.
  rolling: true, // <-- Set `rolling` to `true`
  cookie: {  
      // expires = new Date(Date.now() + hour),
      maxAge: 6000//1*60*60*1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//Helpers contains util files which have generic format functions.
const helpers = require('./utils/helpers');

//To set handle bar engine.
const hbs = exphbs.create({ helpers });

//To registering handlebar and set engine value.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Express is used to make api calls.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});