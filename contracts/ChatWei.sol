pragma solidity ^0.4.18

contract ChatWei {

  struct ContrcatProperties {
    address ChatWeiOwner; 
    address[] registeredUserAddress;
  }

  ContractProperties contractProperties;

  function ChatWei() public {
    contractProperties.ChatWeiOwner = msg.sender;
  }

  function getContractProperties() public view returns (address, address[]) {
    return (contractProperties.ChatWeiOwner, contractProperties.registeredUserAddress);
  }
}