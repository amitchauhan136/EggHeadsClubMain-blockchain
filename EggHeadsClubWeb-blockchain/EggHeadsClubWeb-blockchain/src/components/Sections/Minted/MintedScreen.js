import React, { Component } from "react";
import "./MintedScreen.css";
import logohere from "../../../assets/AnkurEgg.png"
import fancyagame from "../../../assets/fancygame2x.png"
import MintFooterText from "../../../assets/MintFooterText.png"
import connectedwallet from "../../../assets/connect-waller-mint.png"
import mintbutton from "../../../assets/mint2x.png";
import mintingdisable from "../../../assets/mining-disabled2x.png";
import soldout from "../../../assets/soldout2x1.png";
import alreadyminted from "../../../assets/alreadyminted.png";
import mainlogo from "../../../assets/EggHeadsLogo.png"
import bckgrndimg from "../../../assets/Pinkbackground.png"
import TwitterIcon from "../../../assets/Twitter.png";
import OpenSeaIcon from "../../../assets/OpenSeaIconRound.png";
import Litepaper from "../../../assets/Litepaper.png";
import LitepaperMobile from '../../../assets/mobile-litpaper.png'
import crossicon from "../../../assets/cross2x.png";
import hitbutton from "../../../assets/hit-button-below2x.png"
import mobhitbutton from "../../../assets/hit-button-below_22x.png"
import Web3 from 'web3';
import Web3Modals from 'web3modal';
import WalletConnectProviders from '@walletconnect/web3-provider';
import Fortmatics from 'fortmatic';
import evmChainss from 'evm-chains';
import MerkleTree from 'merkletreejs';
import keccak256 from 'keccak256';

import swal from 'sweetalert';
const Web3Modal = Web3Modals;
const WalletConnectProvider = WalletConnectProviders;
const Fortmatic = Fortmatics;
const evmChains = evmChainss;
const tree = MerkleTree;
const keccak = keccak256;

let web3Modal
let provider;
let selectedAccount;
let remaningNFT;
var abi = [{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"CreateNFT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"MAX_BY_MINT_PRESALE_L1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BY_MINT_PRESALE_L2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BY_MINT_SALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRESALE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRootL1","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRootL2","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"},{"internalType":"uint256","name":"_type","type":"uint256"}],"name":"mintPreSaleNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"mintSaleNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"val","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleEnable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleEnable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"setPreSaleStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"setSaleStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"newRoot","type":"bytes32"}],"name":"updateMerkleRootL1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"newRoot","type":"bytes32"}],"name":"updateMerkleRootL2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"updatePreSaleMintLimitL1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"updatePreSaleMintLimitL2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"updatePreSalePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"updateSaleMintLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"updateSalePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"presalemint","type":"uint256"},{"internalType":"uint256","name":"salemint","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
var contractAddress = '0x4350ccb2e90cC0ccD7A45159901f23adcB50d5Db';
var userAddress = '';
var contract = undefined;
var saleEnable;
var presaleEnable;
var MintLimit = 0;
var NFTprice = 0;
var TOTAL_NFT_MINTED=0;
var TOTAL_NFT=0;
var markelTree1;
var markelTree2;
var markelTree1a;
var markelTree2a;
var MAX_BY_MINT=0;
init();
async function init() {
   
   let whitelistAddress1 = [
       "0xCE9bc7bC5bb6A3F582360f03308726726EA0E5D7",
       "0x760c5A41b67BE0b8E208Da61c9654d5aad1e92f2"
   ];
   const leafNodes1 = await whitelistAddress1.map(addr => keccak(addr));
   markelTree1 = await new tree(leafNodes1, keccak, { sortPairs: true });
   const roothash1 = await markelTree1.getRoot().toString('hex');
   console.log("roothash1=>",roothash1);
   // 0x and then roothash add into smart contract
   let whitelistAddress2 = [
       "0xCE9bc7bC5bb6A3F582360f03308726726EA0E5D7",
       "0x4bcd879947aABff5343582906422cc109d052532"
   ];
   const leafNodes2 = await whitelistAddress2.map(addr => keccak(addr));
   markelTree2 = await new tree(leafNodes2, keccak, { sortPairs: true });
   const roothash2 = await markelTree2.getRoot().toString('hex');
   console.log("roothash2",roothash2);
   // 0x and then roothash add into smart contract
   var web3 = new Web3('https://rinkeby.infura.io/v3/25fe98fb45cd437cab07709241cf6be0');
   contract = new web3.eth.Contract(abi, contractAddress);
   let MAX_NFT = await contract.methods.MAX_NFT().call();
   saleEnable = await contract.methods.saleEnable().call();
   presaleEnable = await contract.methods.presaleEnable().call();
   TOTAL_NFT = MAX_NFT;
   TOTAL_NFT_MINTED=await contract.methods.totalSupply().call();;
   var MAX_BY_MINT_PRESALE_L1 = await contract.methods.MAX_BY_MINT_PRESALE_L1 ().call();
   var MAX_BY_MINT_PRESALE_L2 = await contract.methods.MAX_BY_MINT_PRESALE_L2 ().call();
   let MAX_BY_MINT_SALE = await contract.methods.MAX_BY_MINT_SALE().call();
   if (saleEnable) 
   {
       let SALE_PRICE = await contract.methods.SALE_PRICE().call();
       MintLimit = MAX_BY_MINT_SALE;
       MAX_BY_MINT = MAX_BY_MINT_SALE;
       NFTprice = SALE_PRICE / 10 ** 18;
   }
   else if (presaleEnable) 
   {
       var claimAddress1a = keccak(userAddress).toString('hex');
       const merkleProof1a = markelTree1.getHexProof(claimAddress1a);
       var claimAddress2a = keccak(userAddress).toString('hex');
       const merkleProof2a = markelTree2.getHexProof(claimAddress2a);
       if(merkleProof1a != "" && merkleProof1a != undefined)
       {
           MintLimit = MAX_BY_MINT_PRESALE_L1;
       }
       else if(merkleProof2a != "" || merkleProof2a != undefined)
       {
           MintLimit = MAX_BY_MINT_PRESALE_L2;
       }
       else
       {
           MintLimit = 0
       }
       MAX_BY_MINT=MintLimit;
       let PRESALE_PRICE = await contract.methods.PRESALE_PRICE().call();
       NFTprice = PRESALE_PRICE / 10 ** 18;
   }
   else
   {
       MintLimit = 0;
       document.getElementById("wallet-connect").style.display = 'none';
       document.getElementById("minting-disable").style.display='block';
       document.getElementById("mint-nft").style.display='none';
       document.getElementById("soldout").style.display='none';
   }
   document.getElementById("ETH").innerHTML=NFTprice;
   document.getElementById("totalSupply").innerHTML=parseInt(TOTAL_NFT);
   document.getElementById("totalMinted").innerHTML=parseInt(TOTAL_NFT_MINTED);
   remaningNFT = TOTAL_NFT - TOTAL_NFT_MINTED;
  
   if (TOTAL_NFT == TOTAL_NFT_MINTED) {
      document.getElementById("wallet-connect").style.display = 'none';
      document.getElementById("minting-disable").style.display='none';
      document.getElementById("mint-nft").style.display='none';
      document.getElementById("soldout").style.display='block';
   }
 
   const providerOptions = {
       walletconnect: {
           package: WalletConnectProvider,
           options: {
               infuraId: "25fe98fb45cd437cab07709241cf6be0",
               chainId: 4,
           }
       }
   };
   web3Modal = new Web3Modal({
       cacheProvider: false,
       providerOptions,
   });
}
async function userStatsUpdate() {
   var status = await contract.methods.paused().call();
   if(!status)
   { 
         if (saleEnable) {
            var getSaleMinted = await contract.methods.users(userAddress).call();
            if (MintLimit == getSaleMinted.salemint) {
               document.getElementById("alreadyminted").style.display='block';
            }
            MintLimit = MintLimit - getSaleMinted.salemint;
            if (MAX_BY_MINT > MintLimit) {
               MAX_BY_MINT = MintLimit;
            }
      }
      else if (presaleEnable) 
      {
            var getPreSaleMinted = await contract.methods.users(userAddress).call();
            if (MintLimit == getPreSaleMinted.presalemint) {
               document.getElementById("alreadyminted").style.display='block';
            }
            MintLimit = MintLimit - getPreSaleMinted.presalemint;
            if (MAX_BY_MINT > MintLimit) {
               MAX_BY_MINT = MintLimit;
            }
            
      }
       priceChnage();
       document.getElementById("wallet-connect").style.display = 'none';
       document.getElementById("mint-nft").style.display = 'block';
       document.getElementById("minting-disable").style.display='none';
       document.getElementById("soldout").style.display='none';
   }
   else
   {
       document.getElementById("wallet-connect").style.display = 'none';
       document.getElementById("mint-nft").style.display = 'none';
       document.getElementById("minting-disable").style.display='block';
       document.getElementById("soldout").style.display='none';
   }
}
async function init2() {
   const web3 = new Web3(provider);
   contract = new web3.eth.Contract(abi, contractAddress);
   web3.eth.getAccounts(function (err, accounts) {
       if (err != null) {
           swal({
               title: "Error Found",
               text: err,
               type: "error",
               showCancelButton: false,
               confirmButtonClass: "btn-danger",
               confirmButtonText: "Ok",
               closeOnConfirm: false
           });
       } else if (accounts.length === 0) {
           swal({
               title: "Error Found",
               text: 'Your Wallet is Locked. Please Unlock It To Use DAPP',
               type: "error",
               showCancelButton: false,
               confirmButtonClass: "btn-danger",
               confirmButtonText: "Ok",
               closeOnConfirm: false
           });
       } else if (web3.currentProvider.chainId != 4) {
           swal({
               title: "Error Found",
              // text: 'Make Sure You Are Using The ETH Network',
               text: 'Make Sure You Are Using The Rinkeby Network',
               type: "error",
               showCancelButton: false,
               confirmButtonClass: "btn-danger",
               confirmButtonText: "Ok",
               closeOnConfirm: false
           });
       } else {
           userAddress = accounts[0];
           userStatsUpdate();
           
       }
   });
}


async function onConnect() {
   try {
      provider = await web3Modal.connect();
   } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
   }
   provider.on("accountsChanged", (accounts) => {
      init2();
   });
   provider.on("chainChanged", (chainId) => {
      init2();
   });
   provider.on("networkChanged", (networkId) => {
      init2();
   });
   await init2();
}






function priceChnage() {
   var count = parseInt(document.getElementById("inputQuantity").value);
   if(MintLimit > 0 && count > MintLimit)
   {
      var price = (MintLimit * parseFloat(NFTprice)).toFixed(3);
      document.getElementById("inputQuantity").value=MintLimit;
   }
   else
   {
      var price = (count * parseFloat(NFTprice)).toFixed(3);
   }    
   document.getElementById("ETH").innerHTML=price;
}




async function mint() {
try {
   
    document.getElementById("error").innerHTML=('');
    var count = parseInt(document.getElementById("inputQuantity").value);
    var price = count * NFTprice * 10 ** 18;
    if (count == 0) {
        document.getElementById("error").innerHTML=('Mint Atleast 1 NFT');
    }
    else if (count > remaningNFT) {
        document.getElementById("error").innerHTML=("Can't Mint More Than Remaning NFT");
    }
    else if (count > MAX_BY_MINT) {
        document.getElementById("error").innerHTML=("Can't Mint More Than "+MAX_BY_MINT+" NFT");
    }
    else {
        
        if (saleEnable) {
            contract.methods.mintSaleNFT(count).estimateGas({ from: userAddress, value: price }).then(function (gasAmount) {
                contract.methods.mintSaleNFT(count).send({ from: userAddress, value: price }, function (error, tx) {
                    if (error) {
                        swal({
                            title: "Error Found",
                            text: error.message,
                            type: "error",
                            showCancelButton: false,
                            confirmButtonClass: "btn-danger",
                            confirmButtonText: "Ok",
                            closeOnConfirm: false
                        });
                    } else {
                        swal({
                            title: "Mint Request Submitted Successfully",
                            text: "Please Wait For Wallet Confirmation",
                            type: "success",
                            showCancelButton: false,
                            confirmButtonClass: "btn-danger",
                            confirmButtonText: "Ok",
                            closeOnConfirm: false
                        });
                    }
                });
            })
            .catch(function (error) {
                swal({
                    title: "Error Found",
                    text: 'Insufficient Funds For Transaction in Wallet',
                    type: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            });
        }
        else if (presaleEnable) {
            var claimAddress1 = keccak(userAddress).toString('hex');
            const merkleProof1 = markelTree1.getHexProof(claimAddress1);
            var claimAddress2 = keccak(userAddress).toString('hex');
            const merkleProof2 = markelTree2.getHexProof(claimAddress2);
            if ((merkleProof1 == "" || merkleProof1 == undefined) && (merkleProof2 == "" || merkleProof2 == undefined)) {
                swal({
                    title: "Error Found",
                    text: 'Your Address Is Not WhiteListed For Pre-Sale',
                    type: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            }
            else 
            {
                var tT=0;
                if(merkleProof1  != "" && merkleProof1 != undefined)
                {
                     tT=1;
                    var merkleProof=merkleProof1;
                    MintLimit = await contract.methods.MAX_BY_MINT_PRESALE_L1 ().call();
                }
                else if(merkleProof2 != "" && merkleProof2 != undefined)
                {
                   tT=2;
                    var merkleProof=merkleProof2;
                    MintLimit = await contract.methods.MAX_BY_MINT_PRESALE_L2 ().call()
                }
                else{
                    MintLimit = 0;
                }
                if(count>MintLimit)
                {
                  document.getElementById("error").innerHTML=("Can't Mint More Than "+MintLimit+" NFT");
                }
                else
                {
                  if(tT==0 && MintLimit==0)
                  {
                     swal({
                        title: "Error Found",
                        text: 'Your Address Is Not WhiteListed For Pre-Sale',
                        type: "error",
                        showCancelButton: false,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "Ok",
                        closeOnConfirm: false
                    });
                  }
                  else
                  {
                     contract.methods.mintPreSaleNFT(count, merkleProof,tT).estimateGas({ from: userAddress, value: price }).then(function (gasAmount) {
                           contract.methods.mintPreSaleNFT(count, merkleProof,tT).send({ from: userAddress, value: price }, function (error, tx) {
                              //console.log("error1"); 
                              if (error) {
                                 swal({
                                       title: "Error Found",
                                       text: error.message,
                                       type: "error",
                                       showCancelButton: false,
                                       confirmButtonClass: "btn-danger",
                                       confirmButtonText: "Ok",
                                       closeOnConfirm: false
                                 });
                              } else {
                                 //console.log("error2"); 
                                 swal({
                                       title: "Mint Request Submitted Successfully",
                                       text: "Please Wait For Wallet Confirmation",
                                       type: "success",
                                       showCancelButton: false,
                                       confirmButtonClass: "btn-danger",
                                       confirmButtonText: "Ok",
                                       closeOnConfirm: false,
                                 // onClose:recheck(this)
                                 });
                              }
                           });
                     })
                     .catch(function (error) {
                        //console.log("error3"); 
                           swal({
                              title: "Error Found",
                              text: 'Insufficient Funds For Transaction in Wallet',
                              type: "error",
                              showCancelButton: false,
                              confirmButtonClass: "btn-danger",
                              confirmButtonText: "Ok",
                              closeOnConfirm: false
                           });
                     });
                  }
                }
            }
        }
        
        
      }
   } catch (error) {
      swal({
         title: "Error Found",
         text: error,
         type: "danger",
         showCancelButton: false,
         confirmButtonClass: "btn-danger",
         confirmButtonText: "Ok",
         closeOnConfirm: false
      });
   }
}

const MintScreen =()=>{

   let [count,setCount]=React.useState(1)

const incrementOne=()=>{


   setCount((count+=1))
}


   const decrementOne=()=>{
      if(count==0){
         return count
      }else{
         setCount((count-=1))
      }
   }
  
   function inputChange(e){
        let value = e.target.value
        setCount(e.target.value)
        value = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        
        document.getElementById("inputQuantity").value=value!=''?value:1;
        
            priceChnage();
       
        
   }
   function btnConnectWallet(){
      onConnect();
   }
   function btnMint(){
      mint();
   }
  
    return(


    <>



    <div className="background_of_minted_screen ">
    

   <div className="first_div_of_minted_screen">
      {/* <Link to={"/"}>
   <img className="cross_icon_of_minted_screen" 
   height={40}
src={crossicon} />
    </Link> */}
    <div className="Mintsocialcontainer">
        <a href="https://opensea.io/collection/eggheadsclub" target="_blank">
          <img src={OpenSeaIcon} className="Mintsocialimg" />
        </a>
        <a href="https://twitter.com/eggheadsclub" target="_blank">
          <img src={TwitterIcon} className="Mintsocialimg" />
        </a>
      </div>
      <div className="LitePaper_div">
      <a href={'https://firebasestorage.googleapis.com/v0/b/eggheads-club.appspot.com/o/Egg-Heads-Club-Litepaper.pdf?alt=media&token=8fdd353c-3d3f-4461-a4b7-1c07b8c87bb9'} target="_blank">
        <img src={Litepaper} className="Mintcontainerimg1" />
      </a>
      </div>
      <div className="LitePaper_div_mobile">
      <a href={'https://firebasestorage.googleapis.com/v0/b/eggheads-club.appspot.com/o/Egg-Heads-Club-Litepaper.pdf?alt=media&token=8fdd353c-3d3f-4461-a4b7-1c07b8c87bb9'} target="_blank">
        <img src={LitepaperMobile} className="Mintcontainerimg2" />
      </a>
      </div>
   </div>
        

     



     
   <img  className="logo_of_minted_screen"  src={mainlogo} />





{/* 


          
      {/* </div> */}

    
   
                  <div className="insider_of_fourth_div_of_minted_screen">

                       <p  className="eggheadsminted_of_minted_screen"><span id="totalMinted">0</span>/<span id="totalSupply">3500</span>   MINTED</p>
                  </div>
          
    



      {/* <div className="fifth_div_of_minted_screen minus_plus_here">
      <input className="input_of_minted_screen inputQuantity" defaultValue={1}  type="number"  id="inputQuantity" onChange={inputChange}  /> 
            <div class="input-group">
                <button type="button" class="btn btn-success min do-min" data-id="0">-</button>
                <input className="input_of_minted_screen inputQuantity" defaultValue={1}  type="number"  id="inputQuantity" onChange={inputChange}  /> 
                <button type="button" class="btn btn-success plus do-plus" data-id="0">+</button>
            </div> 
            <label id="error"></label>
      </div> */}



      <div className="fifth_div_of_minted_screen">
      
      <button onClick={decrementOne}  className="arrow_btn">

         <p className="arrow_text">-</p>
      </button>
      <div>   
      <input className="input_of_minted_screen" value={count} type="number"  id="inputQuantity" onChange={inputChange} readOnly  /> 
      <label id="error"></label>
      </div>
                     <button onClick={incrementOne} className="arrow_btn">

                     <p className="arrow_text">+      </p>
                     </button>
                    
                  </div>
                  <img className="connect_button" src={connectedwallet} id="wallet-connect" onClick={()=>btnConnectWallet()}/>

   <h4 className="gas_fee_req gas_fee_reqd"><span id="ETH">0.00</span> ETH + Gas Fee</h4>
  <img className="gas_fee_req"   src={MintFooterText} />
  



    <img className="mint_button" src={mintbutton} id="mint-nft" onClick={btnMint} style={{display:"none"}} />
    <img className="mintdisable_button" src={mintingdisable} id="minting-disable"  style={{display:"none"}} />
    <img className="soldout_button" src={soldout} id="soldout"  style={{display:"none"}} />
    <img className="already_minted_button" src={alreadyminted} id="alreadyminted"  style={{display:"none"}} />
  






    </div>
    </>
    )
   
}


export default MintScreen;