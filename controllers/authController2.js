const mongoose = require('mongoose');

module.exports.signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {

    }
    catch(error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

module.exports.signIn = async (req, res, next) => {}

module.exports.signOut = async (req, res, next) => {}