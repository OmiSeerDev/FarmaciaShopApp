const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;

class User {
  static async getById(_id) {
    return this.findOne({ _id });
  }

  static async getByEmail(email) {
    return this.findOn(email);
  }

  async deleteUser(_id) {
    this.delete(_id);

    return this.save();
  }
}
const UsersSchema = new mongoose.Schema(
  {
    _id: { type: ObjectId, required: true, auto: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: false, default: false },
    createdAt: { type: Date, required: false, default: new Date() },
    deletedAt: { type: Date, required: false },
  },
  {
    timestamps: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

UsersSchema.loadClass(User);

module.exports = mongoose.model("User", UsersSchema, "users");
