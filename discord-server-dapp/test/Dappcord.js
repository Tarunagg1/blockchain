const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappcord", function () {
  let deployer, user
  let Discord

  const NAME = "Discord"
  const SYMBOL = "DC"

  beforeEach(async () => {
    // Setup accounts
    [deployer, user] = await ethers.getSigners()

    // Deploy contract
    Discord = await ethers.getContractFactory("Discord")
    Discord = await Discord.deploy(NAME, SYMBOL)

    // Create a channel
    // const transaction = await Discord.connect(deployer).createChannel("general", tokens(1))
    // await transaction.wait()
  })

  describe('Deployment', () => {
    it('Sets the name', async () => {

      let result = await Discord.name();
      expect(result).to.equal(NAME);
    })

    it('Sets the Symbol', async () => {
      let result = await Discord.symbol();
      expect(result).to.equal(SYMBOL);
    })

    it("Sets the owner address",async()=>{
      const result = await Discord.owner();
      expect(result).to.equal(deployer.address);
    })
  })
})
