This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses [Ethers](https://docs.ethers.io/v5/) to interact with Ethereum networks and has support for [Ganache](https://www.trufflesuite.com/ganache) local blockchains as well as access to Ropsten and Rinkeby test networks using [Infura](infura.io)

## Before Getting Started
Install [Metamask](http://metamask.io), create at least two accounts, and become familiar with switching between mainnet, Ropsten and Rinkeby networks. Fund an account on the Ropsten network using a [Ropsten Faucet](https://faucet.dimensions.network) 

Download [ganache-2.5.4-linux-x86_64.AppImage](https://www.trufflesuite.com/ganache). Copy the downloaded file into the ./bin/ directory of the `nft/colors` React project.

Run Ganache and verify that you have a working blockchain. It is recommended to always run ganache from this directory rather than installing in a global location as version mismatches can be difficult to debug.
 
## Getting Started
Before starting the application, run the tests to ensure blockchain operations. It is best to use the intstance of truffle deployed to this project, rather than a globally installed instance. This will ensure project compatibility with other packages in package.json and truffle-config.js.

```./node_modules/.bin/truffle test```

Once the tests pass, deploy the contracts to your local blockchain with the following:

```./node_modules/.bin/truffle migrate --reset```

If deployment is successful, you can interact with the contract using the truffle console

```./node_modules/.bin/truffle console```

To demonstrate this capability, mint a ColorPunx NFT Token:

```
truffle(development) contract = await Color.deployed()
truffle(development) await contract.mint('#FFFFFF')
```

Now, with Ganache running, run the React development server:


```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More
To learn more about testing on public nets, try the following guide: [Connecting to Public Test Networks with Truffle](https://forum.openzeppelin.com/t/connecting-to-public-test-networks-with-truffle/2960)

To learn about transferring NFTs to your friends and family, follow this guide [Transferring ERC721 tokens](https://forum.openzeppelin.com/t/transferring-erc721-tokens/4726). 

To learn about adding meta data to NFTs for integration with Metamask and Opensea, and how to list and sell on OpenSea, watch [this excellent tutorial](https://www.youtube.com/watch?v=p36tXHX1JD8).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
