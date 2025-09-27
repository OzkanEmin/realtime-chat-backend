const mongoose = require('mongoose');
const schema = mongoose.Schema({
   level:String,
   email: String,
   location: String,
proc_type: String,
log: String,

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
class AuditLogs extends mongoose.Model{
// oopden bildiğimiz gibi extends  miras almayı sağlar


}
schema.loadClass(AuditLogs);        
module.exports = mongoose.model('auditlogs', schema);// users tablosu oluşturdum ve dışarıya export ettim 
// mongoose.model ile tabloyu oluşturuyorum ve schema yı veriyorum
// tablo ismi ve şema       

