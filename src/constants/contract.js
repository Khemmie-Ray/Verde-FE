import { ethers } from "ethers";
import earnAbi from "./earnAbi.json"
import tokenAbi from './tokenAbi.json'

export const getVerdiContract= (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_REWARD_ADDRESS,
        tokenAbi,
        providerOrSigner
    );

export const getOrganizationContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_ORGANIZATION_ADDRESS,
        earnAbi,
        providerOrSigner
    );