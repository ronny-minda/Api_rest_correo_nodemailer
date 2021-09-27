const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors');

//

app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

//

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());
//

app.use(require('./routes/index'));

//
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});
