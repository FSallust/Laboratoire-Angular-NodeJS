module.exports = mongoose => {
    var schema = mongoose.Schema({
        Titre: String,
        ProprioId: String,
        PetiteDescription: String,
        LongueDescription: String,
        Pays: String,
        Ville: String,
        Rue: String,
        Num: Number,
        CodePostal: Number,
        PictureUrl: String,
        Capacite: Number,
        SDB: Number,
        WC: Number,
        Jardin: Boolean,
        Piscine: Boolean,
        MachineALaver: Boolean,
        Internet: Boolean,
        AnimauxAdmis: Boolean,
        PrixNuit: Number,
        Assurance: Boolean
    }, {
        versionKey: false,
        collection: "properties",
    });

    const Properties = mongoose.model("properties", schema);
    return Properties;
};