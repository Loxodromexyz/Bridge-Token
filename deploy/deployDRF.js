module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, get } = deployments;
    const { deployer } = await getNamedAccounts();

    const multisignAccount = "";
    const deployment = await deploy("DRF", {
        from: deployer,
        args: ["Drife Token", "DRF", multisignAccount],
        log: true,
    });
    console.log("%s deployed at: %s", deployment.contractName, deployment.address);
};

module.expor
ts.tags = ["DRF"];