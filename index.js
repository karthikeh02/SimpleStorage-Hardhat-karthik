const { ethers } = require("ethers");

document.getElementById("connect-button").addEventListener("click", () => {
  if (window.ethereum) {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        // Handle the connected accounts
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    console.error("MetaMask is not installed");
  }
});

async function execute() {
  // To execute the transaction
  // We need Address , Contract ABI (blueprint to interact with a contract)
  // FUnction
  // node connection

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
}

module.exports = { connect, execute };
