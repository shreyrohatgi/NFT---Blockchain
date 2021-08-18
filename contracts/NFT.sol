pragma solidity >=0.7.0 <0.9.0;
import "@OpenZeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract NFT is ERC721URIStorage {
  uint256 public tokenCounter;
  constructor () public ERC721 ("Passport Photo", "LOVISH"){
    tokenCounter = 0;
  }
  function createCollectible(string memory tokenURI) public returns (uint256) {
    uint256 newItemId = tokenCounter;
    _safeMint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);
    tokenCounter = tokenCounter + 1;
    return newItemId;
  }
}
