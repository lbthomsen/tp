/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    networks: {
        ropsten: {
            host: "10.1.10.1",
            network_id: "3",
            port: 8545,
            from: "0x4c3ca55b67C453cFE135E0BCF055e68064e2bFEC"
            //gas: 3900000
        },
        kovan: {
            host: "localhost",
            network_id: "42",
            port: 8545,
            gas: 4700000
        },
        devchain: {
            host: "localhost",
            network_id: "8883",
            port: 8545
        },
        biab: {
            host: "10.1.10.1",
            network_id: "2020",
            port: 8545
        }
    }
};

