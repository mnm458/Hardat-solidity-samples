import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { HelloWorld } from "../../typechain";

describe("HelloWorld", function () {
  let helloWorldContract: HelloWorld;

  // https://mochajs.org/#hooks
  beforeEach(async function () {
    // https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html#helpers
    const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
    // https://docs.ethers.io/v5/api/contract/contract-factory/#ContractFactory-deploy
    helloWorldContract = await helloWorldFactory.deploy();
    await helloWorldContract.deployed();
  });

  it("Should give a Hello World", async function () {
    // https://www.chaijs.com/api/bdd/#method_equal
    expect(await helloWorldContract.getText()).to.equal("Hello World");
  });

  it("Should set owner to deployer account", async function () {
    // https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html#helpers
    const accounts = await ethers.getSigners();
    expect(await helloWorldContract.owner()).to.equal(accounts[0].address);
  });

  it("Should not allow anyone other than owner to call transferOwnership", async function () {
    // https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html#helpers
    const accounts = await ethers.getSigners();
    await expect(
      helloWorldContract
        // https://docs.ethers.io/v5/api/contract/contract/#Contract-connect
        .connect(accounts[1])
        .transferOwnership(accounts[1].address)
    // https://ethereum-waffle.readthedocs.io/en/latest/matchers.html#revert
    ).to.be.revertedWith("Caller is not the owner");
  });

  it("Should change text correctly", async function () {
    // TODO
    throw Error("Not implemented");
  });

  it("Should not allow anyone other than owner to change text", async function () {
    // TODO
    throw Error("Not implemented");
  });
});