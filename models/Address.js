const { Schema, models, model, default: mongoose } = require("mongoose");

const AddressSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: String,
  email: String,
  state: String,
  number: Number,
  address: String,
});

const Address = models?.Address || model("Address", AddressSchema);
export default Address;
