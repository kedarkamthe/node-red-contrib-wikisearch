
# node-red-contrib-wikisearch

[Node-RED](http://nodered.org) node to search input payload on wiki using OpenSearch API which will return wiki results in json|jsonfm|xml|xmlfm formats [node-red-contrib-wikisearch](https://github.com/kedarkamthe/node-red-contrib-wikisearch).

## Install

Run the following command in your Node-RED user directory – typically `~/.node-red`:

```bash
npm i node-red-contrib-wikisearch
```

## Usage

Provides one palette node which will use the message payload in string format and returns wiki search results based on configured parameters.

### Output

Returns wiki results using OpenSearch API for given input message payload.

`msg.payload` is having wiki search results in json,jsonfm,xml,xmlfm format.


##### References
 This node's input payload structure is based on [node-red-contrib-wikisearch](https://github.com/kedarkamthe/node-red-contrib-wikisearch), which uses [Wiki OpenSearch API](https://www.mediawiki.org/wiki/API:Opensearch).

### Input

`msg.payload` :This will be of type String, which needs to be searched on wiki.

### Configuration

Configure the parameters based on [Wiki OpenSearch API Doc](https://www.mediawiki.org/wiki/API:Opensearch) 

#### Details
This node will help user to search input payload on wiki using OpenSearch API

## Support
If something is not working as expected, or if you think this node could be improved in other ways, [please file an issue](https://github.com/kedarkamthe/node-red-contrib-wikisearch/issues/new) on GitHub.
