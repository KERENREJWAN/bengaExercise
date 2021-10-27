const mongoose = require("mongoose");
const {
    Schema
} = mongoose;
const ObjectId = require("mongodb").ObjectId;

//File schema
const FileSchema = new Schema({
    fileName: String,
    filePath: String,
    code: Number
});

//db connection string
mongoose.connect('mongodb://localhost:27017/BengaExercise', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//mongoose model to work with this db
var Files = mongoose.model("Files", FileSchema);

exports.insert = async (info) => {
    //Try to insert
    try {
        //generate a code for the file
        let randomCode = Math.floor(100000 + Math.random() * 900000);

        //if the code exists - generate a new one
        while (Files.count() && await Files.findOne({ code: randomCode }) !== null) {
            randomCode = Math.floor(100000 + Math.random() * 900000);
        }

        const obj = {
            fileName: info.fileName,
            filePath: info.filePath,
            code: randomCode
        }

        await Files.create(obj);

        //returns operation status.
        return {
            status: 200,
            code: randomCode
        }

    } catch (err) {
        console.error(err);
        //returns operation status
        return {
            status: 500
        }
    }
}

exports.get = async (info) => {
    //Try to insert
    try {
        let fileToDownload = await Files.findOne({ code: info });

        //returns operation status.
        return {
            status: 200,
            file: fileToDownload
        }

    } catch (err) {
        console.error(err);
        //returns operation status
        return {
            status: 500
        }
    }
}
