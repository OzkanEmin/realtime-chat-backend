const mongoose = require('mongoose');
const schema = mongoose.Schema({
  is_active: {type: Boolean,default: true,
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,}
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
class Categories extends mongoose.Model{
// oopden bildiğimiz gibi extends  miras almayı sağlar


}
schema.loadClass(Categories);        
module.exports = mongoose.model('catagories', schema);// users tablosu oluşturdum ve dışarıya export ettim 
// mongoose.model ile tabloyu oluşturuyorum ve schema yı veriyorum
// tablo ismi ve şema       

