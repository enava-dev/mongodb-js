
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/dev';
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', function(){
  console.log('Connected correctly to mongodb server');

  var LanguageSchema = new mongoose.Schema({
    name: String,
    type: String
  });

  LanguageSchema.statics.findByName = function(name, cb){
    return this.find({name: new RegExp(name, 'i')}, cb);
  };

  var Language = mongoose.model('Language', LanguageSchema);

  Language.findByName('javascript', function(err, languages){
    console.log(languages);
  });



});
