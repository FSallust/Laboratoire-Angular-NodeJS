module.exports = mongoose => {
  var schema = mongoose.Schema({
    Nom: String,
    Prenom: String,
    Email: String,
    Pays: String,
    Telephone: String,
    Password: String,
    isAdmin: Boolean
  }, {
    versionKey: false,
    collection: "user",
  });

  const User = mongoose.model("user", schema);
  return User;
};