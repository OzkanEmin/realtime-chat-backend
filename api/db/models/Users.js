const mongoose = require('mongoose');
const schema = mongoose.Schema({
    email: {type: String,required: true},
    password: {type: String,required: true},        
    is_active: {type: Boolean,default: true},   
    first_name: String,
    last_name: String,
    phone_number: String,
    // users tablosunda ki parametreler 


},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
        // mongodb kjendisi bir veri eklendiğinde bu değerleri otomatik olarak ekler
    }
}
);
class Users extends mongoose.Model{
// oopden bildiğimiz gibi extends  miras almayı sağlar


}
schema.loadClass(Users);        
module.exports = mongoose.model('users', schema);// users tablosu oluşturdum ve dışarıya export ettim 
// mongoose.model ile tabloyu oluşturuyorum ve schema yı veriyorum
// tablo ismi ve şema       

