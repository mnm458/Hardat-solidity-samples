import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { Ballot } from "../../typechain";

const PROPOSALS = ["Proposal1", "Proposal 2", "Proposal 3"];


function convertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];

}