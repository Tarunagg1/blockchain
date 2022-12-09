const { expect } = require('chai');

describe('Token contract', () => {
    let Token;
    let hardhatToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;


    beforeEach(async () => {
        Token = await ethers.getContractFactory("Token");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        hardhatToken = await Token.deploy();
    })

    describe('deployment', () => {
        it('should set the right owner', async () => {
            expect(await hardhatToken.owner()).to.equal(owner.address);
        })

        it('Deployment should assign the total supply of token to tha accure', async () => {
            const ownerBalance = await hardhatToken.balanceOf(owner.address);
            expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)
        })
    })


    describe('Transsactions', () => {
        it('should transfer tokens between accounts', async () => {
            await hardhatToken.transfer(addr1.address, 20);
            expect(await hardhatToken.balanceOf(addr1.address)).to.equal(20);
            await hardhatToken.connect(addr1).transfer(addr2.address, 20);
            const addr2Balace = await hardhatToken.balanceOf(addr2.address);
            expect(addr2Balace).to.equal(20);
        })


        it('should fail if sender does not have enough tokens', async () => {
            const initialBal = await hardhatToken.balanceOf(owner.address);
            await expect(hardhatToken.connect(addr1).transfer(addr2.address, 1)).to.be.revertedWith('Not enough token to transfer')
            expect(await hardhatToken.balanceOf(owner.address)).to.equal(initialBal);
        })

        it('should update balances after transfer', async () => {
            const initiaOwnerlBal = await hardhatToken.balanceOf(owner.address);
            await hardhatToken.transfer(addr1.address,5);
            await hardhatToken.transfer(addr2.address,10);
            const finalBalanceOwner = await hardhatToken.balanceOf(owner.address);
            expect(finalBalanceOwner).to.equal(initiaOwnerlBal-15);

            const add1BalanceOwner = await hardhatToken.balanceOf(addr1.address);
            expect(add1BalanceOwner).to.equal(5);

            const add2BalanceOwner = await hardhatToken.balanceOf(addr2.address);
            expect(add2BalanceOwner).to.equal(10);

            
        })
    })

})


