import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contract from "../../contracts/psychpunks.json";
import img from "../../images/bg.png";
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
  Input,
} from "./HeroElements";

const contractAddress = "0x26582b17c733bbc60fa41c833c9d814fc9cc4b03";
const abi = contract.abi;

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [amount, setAmount] = useState("");

  const onHover = () => {
    setHover(!hover);
  };
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized accounts.");
    }
  };

  const mintNft = async (_amount) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        const accounts = await ethereum.request({ method: "eth_accounts" });
        let ethAmount = (0.042 * _amount).toString();

        await nftContract.mint(accounts[0], _amount, {
          value: ethers.utils.parseEther(ethAmount),
        });
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={img} type="img" />
      </HeroBg>
      <HeroContent>
        <HeroH1>PsychPunks</HeroH1>
        <HeroP>
          Mint a psychpunks today! And still have a change to get a Psychpunks
          hoodie!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={mintNft}
            primary="true"
            dark="true"
            onClick={(e) => {
              e.preventDefault();
              mintNft(amount);
            }}
          >
            Mint
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Input
            type="number"
            max="10"
            min="1"
            placeholder="ex.1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
