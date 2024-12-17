import { NextResponse } from "next/server";
import solc from "solc";

export async function POST(req: Request) {
  const { tokenName, tokenSymbol, initialSupply } = await req.json();

  if (!tokenName || !tokenSymbol || !initialSupply) {
    return NextResponse.json(
      { error: "Missing token name, symbol, or initial supply." },
      { status: 400 }
    );
  }

  const sanitizedName = tokenName.replace(/[^a-zA-Z0-9]/g, "") || "Custom";

  try {
    const contractSource = `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.20;

    interface IERC20 {
        function totalSupply() external view returns (uint256);
        function balanceOf(address account) external view returns (uint256);
        function transfer(address recipient, uint256 amount) external returns (bool);
        event Transfer(address indexed from, address indexed to, uint256 value);
    }

    contract ERC20 is IERC20 {
        mapping(address => uint256) private _balances;
        uint256 private _totalSupply;
        string private _name;
        string private _symbol;

        constructor(string memory name_, string memory symbol_) {
            _name = name_;
            _symbol = symbol_;
        }

        function totalSupply() public view override returns (uint256) {
            return _totalSupply;
        }

        function balanceOf(address account) public view override returns (uint256) {
            return _balances[account];
        }

        function transfer(address recipient, uint256 amount) public override returns (bool) {
            _balances[msg.sender] -= amount;
            _balances[recipient] += amount;
            emit Transfer(msg.sender, recipient, amount);
            return true;
        }

        function _mint(address account, uint256 amount) internal {
            _totalSupply += amount;
            _balances[account] += amount;
            emit Transfer(address(0), account, amount);
        }
    }

    contract ${sanitizedName}Token is ERC20 {
        constructor() ERC20("${tokenName}", "${tokenSymbol}") {
            _mint(msg.sender, ${initialSupply} * 10 ** 18);
        }
    }
  `;

    const input = {
      language: "Solidity",
      sources: {
        [`${sanitizedName}Token.sol`]: {
          content: contractSource,
        },
      },
      settings: {
        outputSelection: {
          "*": {
            "*": ["abi", "evm.bytecode.object"],
          },
        },
      },
    };

    const output = JSON.parse(solc.compile(JSON.stringify(input)));

    console.log(output.errors);
    // Extract ABI and Bytecode
    const contractName = `${sanitizedName}Token`;
    const compiledContract =
      output.contracts[`${sanitizedName}Token.sol`][contractName];

    if (!compiledContract) {
      throw new Error("Compilation failed. Check contract syntax.");
    }

    const abi = compiledContract.abi;
    const bytecode = compiledContract.evm.bytecode.object;

    return NextResponse.json({
      abi,
      bytecode,
      contractSource,
    });
  } catch (error) {
    console.error("Compilation Error:", error);
    return NextResponse.json(
      { error: "Compilation failed", details: error },
      { status: 500 }
    );
  }
}
