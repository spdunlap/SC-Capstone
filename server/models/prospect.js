const mongoose = require("mongoose");

const prospectSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  property: String,
  notes: String
});

const prospect = mongoose.model("Prospect", prospectSchema);

module.exports = {
  model: prospect,
  schema: prospectSchema
};
