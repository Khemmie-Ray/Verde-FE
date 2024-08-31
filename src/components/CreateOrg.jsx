import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAccount } from "wagmi";
import { toast } from "sonner";
import axios from "axios";

import useCreateNewProgramme from "../hooks/onboardingHooks/useCreateNewProgrammes";
import useGetUserOrganisations from "../hooks/onboardingHooks/useGetUserOrganizations";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 10,
  boxShadow: 24,
  border: "1px solid #42714262",
  backgroundColor: "#1E1D34",
  p: 4,
};

const CreateOrg = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isConnected, address } = useAccount();

  const [instName, setInstName] = useState("");
  const [programmeName, setProgrammeName] = useState("");
  const [imageURI, setImageURI] = useState("");

  const { createProgramme, isWriting, isConfirming } = useCreateNewProgramme(
    instName,
    programmeName,
    imageURI
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isConnected)
      return toast.error("Please connect wallet", { position: "top-right" });
    if (instName === "")
      return toast.error("Please enter institution name", {
        position: "top-right",
      });
    if (adminName === "")
      return toast.error("Please enter admin name", { position: "top-right" });
    if (programmeName === "")
      return toast.error("Please enter programme name", {
        position: "top-right",
      });
    if (imageURI === "")
      return toast.error("Please enter image URI", { position: "top-right" });

    createProgramme();

    setInstName("");
    setProgrammeName("");
    setImageURI("");
  };

  // Uplaod to IPFS and return of the URI
  const [selectedFile, setSelectedFile] = useState();

  const handleSelectImage = ({ target }) => {
    setSelectedFile(target.files[0]);
  };

  const getImage = useCallback(async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              pinata_api_key: apiKey,
              pinata_secret_api_key: secretKey,
            },
          }
        );

        const fileUrl = response.data.IpfsHash;
        const gateWayAndhash = `https://gray-quiet-egret-248.mypinata.cloud/ipfs/${fileUrl}`;
        setImageURI(gateWayAndhash);

        toast.success("Image URI fetched successfully", {
          position: "top-right",
        });

        return fileUrl;
      } catch (error) {
        console.log("Pinata API Error:", error);
        toast.error("Error feteching image URI", {
          position: "top-right",
        });
      }
    }
  }, [selectedFile]);

  useEffect(() => {
    if (selectedFile) {
      getImage();
    }
  }, [selectedFile, getImage]);

  // redirect to programme page if not connected
  const change = useCallback(async () => {
    if (!isConnected) {
      // router.push("/programme");
    }
  }, [isConnected]);

  useEffect(() => {
    change();
  }, [change, isConnected]);

  // getting list of organisations
  const { list: listOfOrganisations, isLoading } =
    useGetUserOrganisations(address);

  // route handling
  const handleRouting = (contract_address, mentor, student) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "active_organisation",
        JSON.stringify(contract_address)
      );
      if (mentor) {
        // router.push(`/admin`);
      } else if (student) {
        // router.push(`/user`);
      } else {
        return toast.error("You're not allowed access !", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div>
      <div>
        <button
          className="bg-primary text-secondary py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] lg:w-[50%] md:w-[50%] my-2 hover:bg-bg-ash hover:text-darkGrey hover:font-bold"
          onClick={handleOpen}
        >
          Create Organization
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <label className="form-label font-bold text-[20px] text-white">
              Select an image
            </label>
            <p>File must not be more than 100KB </p>
            <input
              type="file"
              className="rounded-lg w-[100%] text-white p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none"
              placeholder=""
            />
            <input
              type="text"
              className="rounded-lg w-[100%] text-white p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none"
              placeholder=""
              Company
              name
            />
            <input
              type="text"
              className="rounded-lg w-[100%] text-white p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none"
              placeholder=""
            />

            <button className="bg-secondary text-primary py-2 px-4 rounded-lg font-bold text-[16px] w-[100%] my-2 hover:bg-bg-ash hover:text-darkGrey hover:font-bold">
              Submit
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CreateOrg;
