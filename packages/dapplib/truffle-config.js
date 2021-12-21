require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rebel six purpose inner arena flock super'; 
let testAccounts = [
"0x1196fa15ac2392e76d05c84798e9f58f324c83390c4a0eb02e24cce05a0bbac8",
"0x6904dd12a1adf4ec42c1293b00bc2a6eac25d443e8bf240bf0fbef9bc4d07278",
"0x7ab196827e823a25aeb62f2c31a8b0e3479129a98d23cf23f425c9fb928fc0f8",
"0x0fe472592bbe9e1887f09a806c8fb7004fe63fd1d3cf6ce4a77785048416a3ea",
"0xaace768ee445c371b3839299115c5276174602854a4af8be7e5b44142e03dcd8",
"0xf4e4c118c4b4cefc6c8cc57c4307d1059d45102e69f26710d93c8d89440c6bc3",
"0x4c7077ae8f6cc641ea8e8213fb325fc6cb8e19edc8ccd03c8b0448f10aab1700",
"0x51f4d78a37b475c696ec322679b860881220ebef4a9b65fbf677873d3a035f9f",
"0x5eb3f5cfac41aaab1b2f5a26ea84b6dd1d9337780463287cd6a9d23c18e8ddbc",
"0xbbe378a4cb77118b3e1308258cb99af1e0e8b9df8995342eb6d6dcd667b486fb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

