import { ethers } from "ethers";
import rewardABI from "./rewardABI.json";
import { OrganisationFactoryABI } from "./organisationFactory";

export const getVerdiContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_REWARD_ADDRESS,
    rewardABI,
    providerOrSigner
  );

export const getOrganizationContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_ORGANIZATION_FACTORY_ADDRESS,
    OrganisationFactoryABI,
    providerOrSigner
  );
