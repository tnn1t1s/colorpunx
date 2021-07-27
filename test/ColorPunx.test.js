const ColorPunx = artifacts.require('./ColorPunx.sol');

require('chai')
  .use(require('chai-as-promised'))
  .should()


contract('ColorPunx', (accounts) => {
  let contract;

  before(async () => {
    contract = await ColorPunx.deployed();
  });

  describe('deployment', async() => {

    it('deploys', async () => {
      const address = contract.address;
      assert.notEqual(address, '');
      assert.notEqual(address, null);
    });

    it('has a name', async () => {
      const name = await contract.name();
      assert.equal(name, 'ColorPunx');
    });

    it('has a symbol', async () => {
      const symbol = await contract.symbol();
      assert.equal(symbol, 'COLOR');
    });
  });

  describe('minting', async() => {
    const from = '0x0000000000000000000000000000000000000000'

    it('creates a new token', async () => {
      const result = await contract.mint("#EC058E");
      const totalSupply = await contract.totalSupply();
      assert.equal(totalSupply, 1);
      const event = result.logs[0].args
      assert.equal(event.tokenId.toNumber(),
                   0,
                   'id is correct')
      assert.equal(event.from, from, 'from is correct')
      assert.equal(event.to,
                   accounts[0], 'to is correct')
      // FAILURE: cannot mint same color twice
      await contract.mint('#EC058E').should.be.rejected;
    });
  });

  describe('indexing', async() => {
    it('lists colors', async () => {
      // Mint 3 more tokens
      await contract.mint('#000000');
      await contract.mint('#FFFFFF');
      await contract.mint('#123456');

      const totalSupply = await contract.totalSupply();


      let color
      let result = [];

      for (var i = 1; i <= totalSupply; i++) {
        color = await contract.colors(i - 1)
        result.push(color)
      };

      let expected = ['#EC058E',
                      '#000000',
                      '#FFFFFF',
                      '#123456'];

      assert.equal(result.join(','),
                   expected.join(','));
    });
  });
});
