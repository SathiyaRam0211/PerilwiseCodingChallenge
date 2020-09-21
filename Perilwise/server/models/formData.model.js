const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    companyName : String,
    i : String,
    ii : String,
    iii : String,
    iv : String,
    v : String,
    vi : String,
    vii : String,
    viii : String,
    ix : String,
    x : String,
    xi : String,
    xii : String,
    xiii : String,
    xiv : String,
    xv : String,
    xvi : String,
    xvii : String,
    xviii : String,
    xix : String,
    xx : String,
    xxi : String,
    xxii : String,
    a : String,
    b : String,
    c : String,
    d : String,
    e : String,
    f : String,
    g : String,
    h : String
});

const FormData = new mongoose.model("FormData", formSchema);

module.exports = FormData;