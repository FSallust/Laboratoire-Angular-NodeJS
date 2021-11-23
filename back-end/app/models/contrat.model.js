module.exports = mongoose => {
    var schema = mongoose.Schema({
        PropertyId: String,
        UserID: String,
        DebutDate: Date,
        FinDate: Date,
    }, {
        versionKey: false,
        collection: "contrat",
    });

    const Contrat = mongoose.model("contrat", schema);
    return Contrat;
};