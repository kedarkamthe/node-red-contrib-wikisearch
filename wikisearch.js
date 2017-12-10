var request =require("request");
var getBaseUrl = function(searchStr){
   return 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&namespace=*&search='+searchStr;
};
var getWikiUrl =function(node,searchStr){
    var format = node.format || 'json';
    var limit = node.limit || 1;
    var profile = node.profile || 'fuzzy';
    var url =getBaseUrl(searchStr) +'&limit='+limit+'&format='+format+'&profile='+profile;
    //console.log(url);
    return url;
};

var getWikiResults =function(node,msg){
    var url = getWikiUrl(node,msg.payload);
    request.get(url,function(err, res, body) {  
        msg.payload=body;
        node.send(msg);
        //console.log('body----------------\n'+body);
    });
  
};

module.exports = function(RED) {
    function WikiSearchNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.format = config.format;
        this.limit = config.limit;
        this.profile=config.profile;
        var node = this;
        
        node.on('input', function(msg) {
            if(msg.payload){
                node.status({fill:"green",shape:"dot",text:"searching"});
                getWikiResults(node,msg);
            }
            else{
                node.error("Message payload is empty.");
                node.status({fill:"red",shape:"dot",text:"searching failed."});
            }
                node.status({}); 
        });
    }
    
    RED.nodes.registerType("wikisearch",WikiSearchNode);
}