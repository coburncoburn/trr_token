module.exports = {
  networks: {
    'ganache': {
      host: 'localhost',
      port: 7545,
      network_id: '5777', // Ropsten ID 3
      from: '0xd7506989bce1F4c2291a486f0499c8286406B3c7',
      gas: 4000000
    },
  },
};
