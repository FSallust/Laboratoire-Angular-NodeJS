module.exports = mongoose => {
    var schema = mongoose.Schema({
        PropertyId: String,
        ProprioId: String,
        LocataireId: String,
        DebutDate: Date,
        FinDate: Date,
        Assurance: Boolean
    }, {
        versionKey: false,
        collection: "contrat",
    });

    const Contrat = mongoose.model("contrat", schema);
    return Contrat;
};