

const main = async () => {
    const [deployer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");

    const token = await Token.deploy();

    console.log("Transactions address: ", token.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
    })