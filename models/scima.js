
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scimaSchema = new Schema({
    nameee: String,
}
);

const alldataa = mongoose.model('alldataaa', scimaSchema);
module.exports = alldataa;