//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//contract ColorPunx is ERC721Enumerable {
contract ColorPunx is ERC721, ERC721Enumerable, ERC721URIStorage {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;
   string[] public colors;
   mapping(string => bool) colorExists;

   constructor() ERC721("ColorPunx", "COLORPUNX") {
   }

   function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
      return super.tokenURI(tokenId); 
   }

   function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool) {
        return super.supportsInterface(interfaceId);
    }

   function createCollectible(string memory color, string memory uri) public returns (uint256) {
       require(!colorExists[color]);
       // push this color to the colors array
       colors.push(color);
       _tokenIds.increment();
       uint256 id = _tokenIds.current();
       //tokenURIs[id] = uri;
       // send this token to the msg.sender address
       _safeMint(msg.sender, id);
       _setTokenURI(id, uri);
       colorExists[color] = true;
       return id;
   }
}
