# Auto Layout of Node-RED Flows

Auto Layout Node-RED node flows.

### Warning

This node uses third-party Javascript libraries to do node alignment. The following libs will be loaded into your browser upon use:

- [elk.bundled.js](https://cdn.openmindmap.org/thirdparty/elk.bundled.js) 
- [dagre.min.js](https://cdn.openmindmap.org/thirdparty/dagre.min.js) 

both hosted at [cdn.openmindmap.org](https://github.com/gorenje/cdn.openmindmap.org).

### Usage

Select a single node in a flow that should be aligned/laid out. Then hit the button no this node:

![img](https://cdn.openmindmap.org/content/1696154885193_Screen_Shot_2023-10-01_at_12.04.56.png)

Step 1 select a single node for a flow, step 2 click the button on the AutoAlign node with the corresponding algorithm. After that you should see this:

![img](https://cdn.openmindmap.org/content/1696154889365_Screen_Shot_2023-10-01_at_12.05.10.png)

Select the algorithm in the property panel:

![img](https://cdn.openmindmap.org/content/1696155294954_Screen_Shot_2023-10-01_at_12.14.15.png)

[Pull Request #2267](https://github.com/gorenje/cdn.openmindmap.org) is a Node-RED own auto layout algorithm which is provided as comparison. It uses neither of the libraries needed for the other algorithms.

The [example flow](https://flowhub.org/f/b22f47c724215b2a) provides one node per algorithm so that each can be tested in turn.

### Libraries

More details on the libraries used:

- [dagre](https://github.com/dagrejs/dagre)
- [ELKjs](https://github.com/kieler/elkjs)

### Testing other algorithms

If you want to test algorithms, there is an [experimental flow](https://flowhub.org/f/291e3f0b7f652839) that can help and a [discussion](https://discourse.nodered.org/t/node-red-auto-layouting-using-elkjs-dagre/81052) around auto-layout in Node-RED. 

### Artifacts

- [Flow maintaining this codebase](https://flowhub.org/f/3de89bdf647951dc)
- [GitHub repo](https://github.com/gorenje/node-red-contrib-auto-alignment)
- [NPMjs node package](https://www.npmjs.com/package/@gregoriusrippenstein/node-red-contrib-auto-alignment)
- [Node-RED node package](https://flows.nodered.org/node/@gregoriusrippenstein/node-red-contrib-auto-alignment)

