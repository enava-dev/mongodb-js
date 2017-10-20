
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

  LanguageSchema.methods.about = function(){
    return 'the ' + this.name + ' language is ' + this.type;
  };

  var Language = mongoose.model('Language', LanguageSchema);



  var java = new Language({name:"java", type:"static typing"});
  console.log(java.name);
  console.log(java.type);
  console.log(java.about());
  var js = new Language({name:"javascript", type:"dynamic typing"});
  console.log(js.name);
  console.log(js.type);
  console.log(js.about());




  /*java.save(function(err, java){
    if(err) {return console.error(err);}
    console.log('save:');
    console.log(java.name);
  });

  js.save(function(err, js){
    if (err) {return console.error(err);}
    console.log('save');
    console.log(js.name);
  });*/

  console.log('before create a new language');
  Language.create({name:"python", type:"dynamic typing"}, function(error, language){
    console.log('inside Language.create()');
    console.log(language.name);
    console.log(language.type);
    console.log(language.about());
  });

  Language.find(function(err, languages){
    if (err) {return console.error(err);}
    console.log('find all:');
    console.log(languages);
  });


  Language.find({name:'javascript'}, function(err, languages){
    if (err) {return console.error(err);}
    console.log('find by name');
    console.log(languages);
    for (var i in languages) {
      console.log('i: ', i);
      console.log('name: ', languages[i].name);
       console.log(languages[i].about());
     }



  });

  });
