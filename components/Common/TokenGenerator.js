import React from 'react';
import { EmbeddedTokenGenerator } from "erc20-generator";

const TokenGenerator = () => {
    return (
        <div>
             <EmbeddedTokenGenerator affiliate="0x002fd03eeC510cC10Df778ef87a8C6f51FfE3F02" />
        </div>
    )
}

export default TokenGenerator
