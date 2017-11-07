const IPFS = require('ipfs');
const Yjs = require('yjs');
require('y-memory')(Yjs);
require('y-array')(Yjs);
require('y-text')(Yjs);
require('y-ipfs-connector')(Yjs);

function repo() {
  return `ipfs/Yjs-demo/${Math.random()}`;
}

const ipfs = new IPFS({
  repo: repo(),
  EXPERIMENTAL: {
    pubsub: true,
  },
});

ipfs.once('ready', () =>
  ipfs.id((err, info) => {
    if (err) {
      throw err;
    }

    console.log(`IPFS node ready with address ${info.id}`);

    Yjs({
      db: {
        name: 'memory',
      },
      connector: {
        name: 'ipfs',
        room: 'ipfs-crdt',
        ipfs,
      },
      share: {
        textfield: 'Text',
      },
    }).then((y) => {
      y.share.textfield.bind(document.getElementById('textfield'));
    });
  }));
