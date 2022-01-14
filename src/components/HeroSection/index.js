import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import contract from "../../contracts/psychpunks.json";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
} from "./HeroElements";

const contractAddress = "0xab89D55822768F9eA1A6FFbe3f0eE10D676cA752"; // rinkby testnet address
const abi = contract.abi;

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const { account } = useWeb3React();
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    // gets the accounts
    const accounts = await ethereum.request({ method: "eth_accounts" });

    // if a account has been connected previouslly if will auto connect to that account
    // this is given as a list. If no accounts have been connected the list will be empyty
    // if the list is empty it will connect to the first account sent by metamask.
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized accounts.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const mintNft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.mint(account, 1, {
          value: ethers.utils.parseEther("0.042"),
        });

        console.log("Minting... please wait");
        await nftTxn.wait();

        console.log(
          `Minted, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>PsychPunks</HeroH1>
        <HeroP>
          Mint a psychpunks today! And still have a change to get a Psychpunks
          hoodie!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="mint"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={mintNft}
            primary="true"
            dark="true"
          >
            Mint {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
