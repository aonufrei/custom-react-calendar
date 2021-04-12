import styled, {keyframes} from "styled-components";

export const popup = keyframes`
  from {
    transform: scale(0.8)
  }

  to {
    transform: scale(1);
  }
`;

export const WeekDayCell = styled.span`
    margin-bottom: 20px;
`;

export const BasicCell = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    padding: 5px;
    font-size: 1rem;
    transition: 0.3s all;
    border-radius: 999px;
    color: #40394a;
    background-color: transparent;
    user-select: none;
`;

export const InCell = styled(BasicCell)`
    cursor: pointer;

    &:hover {
        background-color: #ccc;
    }
`;

export const OutCell = styled(BasicCell)`
    color: #ccc;
`;

/*
    position: relative;
    
    &::before {
        content: '';
        display: block;
        width: 8px;
        height: 4px;
        position: absolute;
        border-radius: 999px;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #a3bad9;
        animation: ${popup} .15s linear;
    }
*/

export const RangeInCell = styled(InCell)` 
    
    color: blue;

`

export const RangeOutCell = styled(OutCell)`
    background-color: #a3bad6;
`

export const SelectedInCell = styled(InCell)`
    color: red;
    box-shadow: 0 0 5px #0005;
    animation: ${popup} .15s linear;
`

export const SelectedOutCell = styled(OutCell)`
    background-color: #ccc3
`