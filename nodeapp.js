var express = require('express')
var app = express()

// Répertoire contenant les données statiques
app.use(express.static(__dirname + '/public'));

// Réponse à la requête permettant d'obtenir les données d'une table
app.get('/data/:table', function(req, res){
	// chargement des données
	var table = tables[req.params.table];
    var dataJSON = JSON.stringify(table);
    var table =JSON.parse(dataJSON);
	// envoi des données au format JSON
	res.json(table);
});

app.get('/data1/:boisson', function(req, res){
	// chargement des données
	var boisson = boissons[req.params.boisson];
    var dataJSON = JSON.stringify(boisson);
    var boisson =JSON.parse(dataJSON);
	// envoi des données au format JSON
	res.json(boisson);
});

// Démarrage du serveur
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Serveur écoute http://localhost:%s', port);
});

function getId(){
    var id = Date.now()+Math.floor((Math.random() * 100) + 1);
    return id;
}
// les Tables
function Table(nom,mac,etat,lieu,fut,fond){
    this.id =  getId() ;
    this.nom = nom ;
    this.mac = mac ;
    if(etat=='OFF' || etat=='DISCONNECTED' || etat=='TAG' || etat=='FREE' ){
     this.etat = etat ;   
    }
    else {
        this.etat = 'OFF' ;
    }
    this.lieu = lieu ;
     this.fut = fut ;   
    this.fond = fond ;     
  }
  
  // Fût
  
  function Fut(volume,boisson){
    this.id =  getId() ;
    if(volume < 20 && volume > 0){
        this.volume= volume;
    }
    else{
        this.volume= 20;
    }
    this.boisson= boisson;
  }
  
  // les Boissons
function Boisson(fabricant,logo,type,descriptive){
    this.id =  getId() ;
    this.fabricant = fabricant ;
    this.logo = logo ;
    this.type = type ;
    this.descriptive = descriptive ;     
  } 
 
var CocaCola = new  Boisson("CocaCola","LogoCoca.png","Boisson","Boisson Gazeuse , Gout de Cola");
var PepsiCola = new  Boisson("PepsiCola","LogoPepsi.png","Boisson","Boisson Gazeuse ,  Gout de Cola");

boissons={'CocaCola': CocaCola,'PepsiCola' : PepsiCola};

var FutCoca = new  Fut(8,CocaCola);
var FutPepsi = new  Fut(12,CocaCola);

var Soukaina = new  Table("Soukaina"," 00-B0-D0-86-BB-F7","OFF","Salle 1",FutCoca,"table1.jpg");
var Salim = new  Table("Salim"," 00-F0-D0-86-45-F1","FREE","Salle 2",FutPepsi,"table2.jpg");

tables={'Soukaina': Soukaina,'Salim' : Salim};