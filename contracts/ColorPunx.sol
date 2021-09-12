// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ColorPunx is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable, Pausable {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;
   mapping(string => bool) public colorExists;
   string[] public colors;

   constructor() ERC721("ColorPunx", "COLORPUNX") {
   }

   function pause() public onlyOwner {
       _pause();
   }

   function unpause() public onlyOwner {
       _unpause();
   }

   function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
      return super.tokenURI(tokenId); 
   }

   function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage){
        super._burn(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function burn(uint256 tokenid) public onlyOwner returns (uint256) {
        require(msg.sender == ownerOf(tokenid));
        _burn(tokenid);
        return tokenid; 
    }

    function createCollectible(string memory color, string memory uri)
             public onlyOwner returns (uint256) {
       require(!colorExists[color]);
       _tokenIds.increment();
       colors.push(color);
       uint256 id = _tokenIds.current();
       _safeMint(msg.sender, id);
       _setTokenURI(id, uri);
       colorExists[color] = true;
       return id;
   }
}
