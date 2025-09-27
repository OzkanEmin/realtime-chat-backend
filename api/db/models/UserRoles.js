 const mongoose = require('mongoose');
 const schema = mongoose.Schema({
     role_id: {type: mongoose.Schema.Types.ObjectId,required: true,},
     user_id: {type: mongoose.Schema.Types.ObjectId,required: true,
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
 class UserRoles extends mongoose.Model{
 // oopden bildiğimiz gibi extends  miras almayı sağlar
 
 
 }
 schema.loadClass(  UserRoles);        
 module.exports = mongoose.model('user_roles', schema);// users tablosu oluşturdum ve dışarıya export ettim 
 // mongoose.model ile tabloyu oluşturuyorum ve schema yı veriyorum
 // tablo ismi ve şema       
 
 