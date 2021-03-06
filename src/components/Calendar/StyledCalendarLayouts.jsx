import styled from "styled-components";

export const CalendarContainer = styled.div`
    box-shadow: 0 0 10px #0005;
    padding: 1rem 1rem;
    border-radius: 5px;
    width: 400px;
    margin: 2rem;
    `;

export const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    color: #153e90;
`;

export const CalendarTitle = styled.span`
    font-size: 2rem;
    font-weight: bold;
    font-family: "Dancing Script", cursive;
`;
export const MoveArrow = styled.div`
    aspect-ratio: 1/1;
    font-size: 2rem;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #153e90;
    transition: 0.3s all;

    &:hover {
        background-color: #ccc;
    }
`;

export const DaysContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    text-align: center;
`;

export const Selection = styled.span`   
    display: inline-block;
    margin: 5px 10px;
    border-radius: 999px;
    background-color: #153e90;
    color: #fff;
    font-size: 0.8rem;
    padding: 4px 15px;
    transition: 0.3s all;
    cursor: pointer;
    box-shadow: 0 0 5px #0005;

    ${(props) => {
        if (props.selected) return "transform: scale(1.2);";
    }}
`;

export const SelectionCloseBtn = styled.i`
    color: #fff;
    margin-left: 10px;
    transition: 0.3s all;
    cursor: pointer;
    box-shadow: 0 0 5px #0005;
    
    &:hover {
        transform: rotate(45deg)
    }
`

export const Divider = styled.hr`
    border: none;
    height: 2px;
    border-radius: 5px;
    background-color: #153e90AA; 
    box-shadow: 0 0 5px #0005;
`;

export const SelectionControl = styled.div`
    padding: 1rem .5rem;
    overflow: auto;
`;
