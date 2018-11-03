module.exports = function (config) {
    const { NodeMediaServer } = require('node-media-server');
    var nmcs = new NodeMediaServer(config)
    nmcs.run();
}


