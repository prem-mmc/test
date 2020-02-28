const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: false },
    content: { type: String, required: false },
    diag: { type: String, required: false },
    his_fin_1_1 : { type: String, required: false},
    his_fin_1_2 : { type: String, required: false},
    his_fin_1_3 : { type: String, required: false},
    phy_ex_1_1 : { type: String, required: false},
    phy_ex_1_2 : { type: String, required: false},
    phy_ex_1_3 : { type: String, required: false},

    diag2: { type: String, required: false },
    his_fin_2_1 : { type: String, required: false},
    his_fin_2_2 : { type: String, required: false},
    his_fin_2_3 : { type: String, required: false},
    phy_ex_2_1 : { type: String, required: false},
    phy_ex_2_2 : { type: String, required: false},
    phy_ex_2_3 : { type: String, required: false},

    diag3: { type: String, required: false },
    his_fin_3_1 : { type: String, required: false},
    his_fin_3_2 : { type: String, required: false},
    his_fin_3_3 : { type: String, required: false},
    phy_ex_3_1 : { type: String, required: false},
    phy_ex_3_2 : { type: String, required: false},
    phy_ex_3_3 : { type: String, required: false},


    diag_study1 : { type: String, required: false },
    diag_study2 : { type: String, required: false },
    diag_study3 : { type: String, required: false },

    email: { type: String, required: true },
    
});

module.exports = mongoose.model('Post', postSchema);  //'Post' is name of the model it should be capital, postSchema is name of schema