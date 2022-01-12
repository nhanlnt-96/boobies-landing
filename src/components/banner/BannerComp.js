import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {
  AiOutlineArrowRight,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  FaFacebookF,
  RiSearchLine
} from "react-icons/all";
import BannerImg from '../../assets/imgs/bannerImg.png';
import HeaderComp from "../header/HeaderComp";
import {notification} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/data/dataActions";
import * as s from "../../styles/globalStyles";
import {connect} from "../../redux/blockchain/blockchainActions";
import {ResponsiveWrapper, StyledButton, StyledLink, StyledRoundButton, truncate} from "./styleComponent";

import './BannerComp.scss';

const BannerComp = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });
  
  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  
  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };
  
  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };
  
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  
  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };
  
  useEffect(() => {
    getConfig();
  }, []);
  
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  
  return (
    <Container fluid className="banner-comp comp-height comp-primary-bg">
      <HeaderComp/>
      <Container className="banner-comp-container d-flex flex-column justify-content-center align-items-center">
        {
          blockchain.errorMsg && notification.info({
            message: `Error`,
            description: blockchain.errorMsg,
            placement: 'bottomRight',
          })
        }
        <Row className="banner-comp-content">
          <Col xl={7} lg={7} md={12} sm={12}
               className="banner-comp-left d-flex flex-column justify-content-xl-around align-items-center">
            <div data-aos="fade-up" className="search-box-container">
              <input type="text" className="search-box"/>
              <div className="search-icon d-flex justify-content-center align-items-center">
                <RiSearchLine/>
              </div>
            </div>
            <div className="content-container">
              <h2 data-aos="fade-left" className="content-title">AdventureBoobies is a collection of 2800 unique Boobies
                nesting on the
                Solana blockchain</h2>
            </div>
            {
              !blockchain.account && (
                <div className="button-container">
                  <button data-aos="zoom-in" className="button-item" onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}>
                    <span className="button-name">Join us</span>
                    <AiOutlineArrowRight/>
                  </button>
                </div>
              )
            }
          </Col>
          <Col xl={5} lg={5} md={12} sm={12}
               className="banner-comp-right d-flex justify-content-center align-items-center">
            {
              blockchain.account ? (
                <ResponsiveWrapper data-aos="zoom-in" flex={1} style={{padding: 24}} test className="mint-box">
                  <s.Container
                    flex={2}
                    jc={"center"}
                    ai={"center"}
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)",
                      borderRadius: 15,
                      padding: 10
                    }}
                  >
                    <s.TextTitle
                      style={{
                        textAlign: "center",
                        fontSize: 50,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                    </s.TextTitle>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--primary-text)",
                      }}
                    >
                      <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                        {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                      </StyledLink>
                    </s.TextDescription>
                    <s.SpacerSmall/>
                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                      <>
                        <s.TextTitle
                          style={{textAlign: "center", color: "#000000"}}
                        >
                          The sale has ended.
                        </s.TextTitle>
                        <s.TextDescription
                          style={{textAlign: "center", color: "#000000"}}
                        >
                          You can still find {CONFIG.NFT_NAME} on
                        </s.TextDescription>
                        <s.SpacerSmall/>
                        <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                          {CONFIG.MARKETPLACE}
                        </StyledLink>
                      </>
                    ) : (
                      <>
                        <s.TextTitle
                          style={{textAlign: "center", color: "#000000"}}
                        >
                          1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                          {CONFIG.NETWORK.SYMBOL}.
                        </s.TextTitle>
                        <s.SpacerXSmall/>
                        <s.TextDescription
                          style={{textAlign: "center", color: "#000000"}}
                        >
                          Excluding gas fees.
                        </s.TextDescription>
                        <s.SpacerSmall/>
                        {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                          <s.Container ai={"center"} jc={"center"}>
                            <s.TextDescription
                              style={{
                                textAlign: "center",
                                color: "#000000",
                              }}
                            >
                              Connect to the {CONFIG.NETWORK.NAME} network
                            </s.TextDescription>
                            <s.SpacerSmall/>
                            {blockchain.errorMsg !== "" ? (
                              <>
                                <s.SpacerSmall/>
                                <s.TextDescription
                                  style={{
                                    textAlign: "center",
                                    color: "var(--accent-text)",
                                  }}
                                >
                                  {blockchain.errorMsg}
                                </s.TextDescription>
                              </>
                            ) : null}
                          </s.Container>
                        ) : (
                          <>
                            <s.TextDescription
                              style={{
                                textAlign: "center",
                                color: "#000000",
                              }}
                            >
                              {feedback}
                            </s.TextDescription>
                            <s.SpacerMedium/>
                            <s.Container ai={"center"} jc={"center"} fd={"row"}>
                              <StyledRoundButton
                                style={{lineHeight: 0.4}}
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                -
                              </StyledRoundButton>
                              <s.SpacerMedium/>
                              <s.TextDescription
                                style={{
                                  textAlign: "center",
                                  color: "#000000",
                                }}
                              >
                                {mintAmount}
                              </s.TextDescription>
                              <s.SpacerMedium/>
                              <StyledRoundButton
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                +
                              </StyledRoundButton>
                            </s.Container>
                            <s.SpacerSmall/>
                            <s.Container ai={"center"} jc={"center"} fd={"row"}>
                              <StyledButton
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs();
                                  getData();
                                }}
                              >
                                {claimingNft ? "BUSY" : "BUY"}
                              </StyledButton>
                            </s.Container>
                          </>
                        )}
                      </>
                    )}
                  </s.Container>
                </ResponsiveWrapper>
              ) : (
                <img data-aos="zoom-in" src={BannerImg} alt="boobies"/>
              )
            }
          </Col>
        </Row>
        <Row className="banner-comp-footer">
          <div className="footer-container d-flex justify-content-center align-items-center">
            <a href="#"><BsTwitter/></a>
            <a href="#"><FaFacebookF/></a>
            <a href="#"><BsYoutube/></a>
            <a href="#"><BsInstagram/></a>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default BannerComp;