require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remain mixture just climb olympic stool'; 
let testAccounts = [
"0x46bce0bb34167706cb28b6a7abbc0af95733b42a00a1d4a1d298ddbf96b9711e",
"0xde590fcedf30fd072844904d906c2166f178dc61abe9c0926b3ad9e1ad237b78",
"0x23979409d70b432533e4fcf35501b5f063272859245442abcef6a32466b935cf",
"0x0c4c6439ada795e3492f93197c8824f96b78cb15f728c6d3f33e8675630e8b98",
"0x13ebdbfd731f41695ac1eb6522b9405567084b038f0b6f7c6632af3f034ce199",
"0x52f6fb01c54eef11b3b2549343a0c5c02de146beaf265c0813828a2d25985ad5",
"0x93aace99a67938409bee39b1929757dd654bf4ac13b1eb455f374105c794c90f",
"0x8770cf68117882eb26ea33b531515c8785a3b0fbf2e3c824215716e4e0ffe4c8",
"0x5ffe8e7c95907e41858dd0d3916f49a8ca82cf68aea93b2126e22a87b127b86d",
"0x7139772f001862f4639a2de3daf509a63f6707f576afadf85b902020355e0ed3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

