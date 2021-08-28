import styled from 'styled-components';

export const Button = styled.button.attrs(props => ({
    type: props.type || 'button',
}))`
    width: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 15px 45px;

    background-image: linear-gradient(to right,#731e9a 0%, #731E9A  51%, #a02ad4 100%);
    
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #fff;
    font-weight: bold;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    
    &:hover {
        background-position: right center;         
        text-decoration: none;
    }   
`;