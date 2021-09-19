import React from 'react';
import styled, {keyframes} from "styled-components";


const SpinnerChild = styled.div`
    position: relative;
`
const SpinnerKeyFrames = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`
const Spinner = styled.div`
    animation: ${SpinnerKeyFrames} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 200px;
    height: 200px;
    ${SpinnerChild}{
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
   };
    ${SpinnerChild}:nth-child(1){ animation-delay: -0.45s;
    
    }
    ${SpinnerChild}:nth-child(2){  animation-delay:  -0.3s;
    
    }
    ${SpinnerChild}:nth-child(3){  animation-delay: -0.15s;
    
    }
    
`


export const Loader = () => {
    return (
        <Spinner>
            <SpinnerChild/>
            <SpinnerChild/>
            <SpinnerChild/>
            <SpinnerChild/>
        </Spinner>

    );
};

