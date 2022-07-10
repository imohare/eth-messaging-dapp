App = {

  web3Provider: null, 
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== "undefined") {
      App.web3Provider = web3.currentProvider;
      App.setStatus("Metamask detected");
    } else {
      alert("Error: Metamask is not installed");
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
      return null;
    }

    web3.eth.getAccounts(function(error ,accounts) {
      if (error != null) {
        alert("Error: Cannot find your account");
        return;
      }
      account = accounts[0];
      if (!account) {
        App.setStatus("Please login to Metamask");
        alert("Error: There has been an error finding your account");
        return;
      }
      return App.initContract('')
    })
  },

  initContract: function() {



  },

  getContactProperties: function() {},

  setStatus: function(message) {
    document.getElementById("status").innerHTML = message;
  }

};


  $(document).ready(function() {
    App.init();
  });