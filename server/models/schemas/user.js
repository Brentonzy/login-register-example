const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true, trim: true},
    token:String
    },
    {
        timestamps: true
    }    
);

userSchema.pre('save', function(next) {
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
});

userSchema.methods.checkPassword = function(password, next) {
    bcrypt.compare(password, this.password, (err, isMatch)=> {
        if(err) return next(err);
        next(null, isMatch);
    });
}

const User = mongoose.model('User', userSchema);
module.exports = User;
