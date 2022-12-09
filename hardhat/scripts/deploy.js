async function main() {
    const [deployer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    console.log('token', token.address);
}

main()
    .then(function () {
        process.exit(0);
    })
    .catch(function (err) {
        console.log(err);
        process.exit(1);
    })