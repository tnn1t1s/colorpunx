//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract ColorPunx is ERC721Enumerable {
  string[] public colors;
  mapping(string => bool) _colorExists;

  constructor() ERC721("ColorPunx", "COLORPUNX") {
  }

  // E.G. color = "#FFFFFF"
  function mint(string memory _color) public {
    require(!_colorExists[_color]);
    // push this color to the colors array
    colors.push(_color);
    // send this token to the msg.sender address
    _mint(msg.sender, colors.length - 1);
    // bookkeep on this 'color'
    _colorExists[_color] = true;
  }
}
