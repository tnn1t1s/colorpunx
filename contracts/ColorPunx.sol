//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

//contract ColorPunx is ERC721Enumerable {
contract ColorPunx is ERC721Enumerable {
  string[] public colors;
  mapping(string => bool) colorExists;
  // Optional mapping for token URIs
  mapping (uint256 => string) private _tokenURIs;
  // Base URI
  string private _baseURIextended;


   constructor() ERC721("ColorPunx", "COLORPUNX") {
   }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];

        return _tokenURI;
     }

    // E.G. color = "#FFFFFF"
    function createCollectible(string memory color, string memory uri) public returns (uint256) {
        require(!colorExists[color]);
        // push this color to the colors array
        colors.push(color);
        colorExists[color] = true;
        uint256 id = colors.length - 1;
        // send this token to the msg.sender address
        _safeMint(msg.sender, id);
        // _setTokenURI(id, tokenURI);
        _tokenURIs[id] = uri;
        return id;
  }
}
