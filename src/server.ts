require('dotenv').config();
import { app } from './app';
import { env } from './env';


const cors = require('cors');

app.listen({
    host: '0.0.0.0',
    port:  env.PORT,
}).then(()=>{
    console.log('🚀 HTTP Server Running!');
});


