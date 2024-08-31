"use client";
import { useBlockNumber, useReadContract } from "wagmi";
import { toast } from "sonner";
import { useEffect, useState, useCallback } from "react";
import { OrganisationFactoryABI } from "../../constants/organisationFactory";
import { useQueryClient } from "@tanstack/react-query";
import { readOnlyProvider } from "../../constants/providers";
import { getOrganizationContract } from "../../constants/contract";

const useGetUserOrganisations = (_userAddress) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const queryClient = useQueryClient();
  const { data: blockNumber } = useBlockNumber({ watch: true });

  const {
    data: listOfOrganisations,
    error: listOfOrganisationsError,
    isPending: listOfOrganisationsIsPending,
    queryKey,
  } = useReadContract({
    address: `0x${process.env.VITE_ORGANIZATION_FACTORY_ADDRESS}`,
    abi: OrganisationFactoryABI,
    functionName: "getUserOrganisatons",
    args: [_userAddress],
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [blockNumber, queryClient, queryKey]);

  const fetchUserOrganisations = useCallback(async () => {
    if (!listOfOrganisations) return;

    try {
      const formattedRes = listOfOrganisations.map((address) =>
        address.toString()
      );

      const data = formattedRes.map(async (address) => {
        const contract = getOrganizationContract(readOnlyProvider, address);
        const name = await contract.getOrganizationName();
        const moderator = await contract.getModerator();
        const imageURI = await contract.getOrganisationImageUri();
        const status = await contract.getOrganizationStatus();
        const isMentor = await contract.VerifyStaff(_userAddress);
        const isStudent = await contract.VerifyUser(_userAddress);
        return {
          address,
          name,
          moderator,
          imageURI,
          status,
          isMentor,
          isStudent,
        };
      });
      const results = await Promise.all(data);

      if (typeof window !== "undefined") {
        localStorage.setItem("memberOrganisations", JSON.stringify(results));
      }
      setIsLoading(false);
      setList(results);
    } catch (error) {
      console.error(error);
    }
  }, [listOfOrganisations?.length]);

  useEffect(() => {
    fetchUserOrganisations();
  }, [fetchUserOrganisations]);

  useEffect(() => {
    if (listOfOrganisationsError) {
      toast.error(listOfOrganisationsError.message, { position: "top-right" });
    }
  }, [listOfOrganisationsError]);

  return { list, isLoading };
};

export default useGetUserOrganisations;
