module.exports = {
  networks: {
    'ganache': {
      host: 'localhost',
      port: 7545,
      network_id: '577', // Ropsten ID 3
      from: '0xEFf34356F1Ed3029731c6e8CBEF5d76fbF70862e',
      gas: 4000000
    },
  },
};
