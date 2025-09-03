const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const helloRoutes = require('./routes/helloRoute');
const courseRoutes = require('./routes/courseRoute');
const authRoute = require('./routes/authRoute');
const connectDB = require('./config/database');

const app = express();
connectDB(); // Connect to the database
// security middleware
app.use(helmet());

// rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send({
    message: "About my api",
    version: "1.0.0"
  });
});

app.use(express.json());
app.use('/api/hello', helloRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoute);
app.use('/api/products', require('./routes/productRoute'));

module.exports = app;