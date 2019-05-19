const mongoose = require("mongoose");
const memberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    require: true
  },
  father: {
    type: String,
    require: false
  },
  mother: {
    type: String,
    require: false
  },
  siblings: {
    type: Array,
    required: false
  },
  children: {
    type: Array,
    required: false
  },
  spouse: {
    type: String,
    require: false
  },
  birth: {
    type: String
  }
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
