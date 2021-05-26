const mongoose = require('mongoose');
require('./locations')
require('./users')

const dbURI = 'mongodb://127.0.0.1:27017/loc8r';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});


mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnect', () => {
    console.log(`Mongoose disconnected`);
});


const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`\nMongoose disconnected through ${msg}`);
        callback()
    });
};

process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});