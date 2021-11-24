module.exports = mongoose => {
    var schema = mongoose.Schema({
        Solde: Number
    }, {
        versionKey: false,
        collection: "treasury",
    });

    const Treasury = mongoose.model("treasury", schema);
    return Treasury;
};