const mongoose = require('mongoose');
const schema = mongoose.Schema({
    role_name: {type: String,required: true,},  
    is_active: {type: Boolean,default: true,},
    //bir rol tanımlandığında bir atama yapılmadığında aktif olsun
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
class Roles extends mongoose.Model{
// oopden bildiğimiz gibi extends  miras almayı sağlar


}
schema.loadClass(Roles);        
module.exports = mongoose.model('roles', schema);// users tablosu oluşturdum ve dışarıya export ettim 
// mongoose.model ile tabloyu oluşturuyorum ve schema yı veriyorum
// tablo ismi ve şema       

