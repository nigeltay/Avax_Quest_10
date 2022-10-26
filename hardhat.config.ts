import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-waffle";
const PRIVATE_KEY = "REPLACE_WITH_YOUR_PRIVATE_KEY"; // Your wallets private key

module.exports = {
  solidity: {
    version: "0.7.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [PRIVATE_KEY],
    },
  },
};
