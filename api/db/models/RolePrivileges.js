const mongoose = require('mongoose');
const schema = mongoose.Schema({
    role_id: {type: mongoose.Schema.Types.ObjectId,required: true,},
    permission: {type: String,required: true,},
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
    }
    // users tablosunda ki parametreler 



},{
    versionKey:false , 
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
        // mongodb kjendisi bir veri eklendiğinde bu değerleri otomatik olarak ekler
    }
}
);
class RolePrivileges extends mongoose.Model{
// oopden bildiğimiz gibi extends  miras almayı sağlar


}
schema.loadClass(   RolePrivileges);        
module.exports = mongoose.model('role_privileges', schema);// users tablosu oluşturdum ve dışarıya export ettim 
// mongoose.model ile tabloyu oluşturuyorum ve schema yı veriyorum
// tablo ismi ve şema       

