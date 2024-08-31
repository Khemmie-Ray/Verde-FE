"use client";
import { OrganisationFactoryABI } from "../../constants/organisationFactory";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";

const useCreateNewProgramme = (
  newOrganisationName,
  newImageURI,
  newAdminName
) => {
  const [isWriting, setIsWriting] = useState(false);

  const { data: hash, error, writeContract } = useWriteContract();

  const createProgramme = useCallback(() => {
    setIsWriting(true);
    writeContract({
      address: `0x${process.env.VITE_ORGANIZATION_FACTORY_ADDRESS}`,
      abi: OrganisationFactoryABI,
      functionName: "createorganisation",
      args: [newOrganisationName, newImageURI, newAdminName],
    });
  }, [newOrganisationName, newImageURI, newAdminName]);

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: hash?.toString(),
    });

  console.log(hash);

  const toastId = "createorganisation";

  useEffect(() => {
    if (isConfirming) {
      toast.loading("Processing...", {
        id: toastId,
        position: "top-right",
      });
    }

    if (isConfirmed) {
      toast.success("Programme created successfully !", {
        id: toastId,
        position: "top-right",
      });
      // router.push("/profile");
      setIsWriting(false);
    }

    if (error) {
      toast.error(error.shortMessage || error.message, {
        id: toastId,
        position: "top-right",
      });
      setIsWriting(false);
    }
  }, [isConfirmed, error, isConfirming]);

  return {
    createProgramme,
    isWriting,
    isConfirming,
  };
};

export default useCreateNewProgramme;
