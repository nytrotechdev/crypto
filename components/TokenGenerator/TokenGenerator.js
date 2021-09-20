import React from 'react';
import { EmbeddedTokenGenerator } from "erc20-generator";
// import { createErc20Token } from "erc20-generator";

const TokenGenerator = () => {
    return (
        <div style={{backgroundColor: '#f9f9f9', paddingTop:'15px'}}>
        <h1 style={{textAlign:'center', marginTop:'15px'}}>
        Create Your Own Crypto Coin! <span style={{color:'#fbb238'}}>No Cost!</span>
        </h1>

        <EmbeddedTokenGenerator affiliate="0x73FD4AbDD8Be63D1EB349854E477f60Bd542943B" />


        </div>
    )
}

export default TokenGenerator
