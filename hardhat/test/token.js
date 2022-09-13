const { expect } = require('chai');


describe('Token contract', function () {
    let Token;
    let hardHatToken;
    let owner;
    let addr1;
    let addr2;
    
    beforeEach(async function () {
        Token = await ethers.getContractFactory("Token");
        [owner, addr1, addr2] = await ethers.getSigners();
        hardHatToken = await Token.deploy();
    });

    describe("Deployment", () => {
        it('Should be the right owner', async function () {
            expect(await hardHatToken.owner()).to.equal(owner.address);
        })
        it('Deployment should assign the total supply of tokens to the owner', async () => {
            const ownerBalance = await hardHatToken.balanceOf(owner.address);
            expect(await hardHatToken.totalSupply()).to.equal(ownerBalance);
        })
    })

    describe("chsck Transsactions", () => {
        it("Should be able to transfer tokens between accounts", async () => {
            await hardHatToken.transfer(addr1.address, 10);
            expect(await hardHatToken.balanceOf(addr1.address)).to.equal(10);

            // transfer 5 tokens from address 1 to 2
            await hardHatToken.connect(addr1).transfer(addr2.address, 5);
            expect(await hardHatToken.balanceOf(addr2.address)).to.equal(5);
        })

        it('Should fail if sender does not have enough balance', async () => {
            const initialOwnerBalance = await hardHatToken.balanceOf(owner.address);
            await expect(hardHatToken.connect(addr1).transfer(owner.address, 1)).to.be.revertedWith("Not enough tokens");
            expect(await hardHatToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
        })

        it('Should fupdate balances after transfers', async () => {
            const initialOwnerBalance = await hardHatToken.balanceOf(owner.address);
            await hardHatToken.transfer(addr1.address, 5);
            await hardHatToken.transfer(addr2.address, 10);
            const finalOwnerBalance = await hardHatToken.balanceOf(owner.address);
            expect(finalOwnerBalance).to.equal(initialOwnerBalance - 15);

            expect(await hardHatToken.balanceOf(addr1.address)).to.equal(5);
            expect(await hardHatToken.balanceOf(addr2.address)).to.equal(10);

        })


    })

})

