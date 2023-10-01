module.exports = function(RED) {
  function AutoAlignFunctionality(config) {
    RED.nodes.createNode(this,config);

    var node = this;
    var cfg = config;

    node.on('close', function() {
      node.status({});
    });

    /* Message handler */
    node.on("input", function(msg, send, done) {
        send(msg);
        done();
    });
  }
  RED.nodes.registerType("AutoAlign", AutoAlignFunctionality);
}
