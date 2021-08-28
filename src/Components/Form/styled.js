import styled from 'styled-components';

export const FormWrapper = styled.div`
    max-width: 1280px;
    margin: 1rem auto;
    padding: 1.25rem 2%;

    border: 1px solid #ccc;
    border-radius: 20px;
    background: rgba( 255, 255, 255, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    transition: all .2s;
    
    .form-control:focus,
    .form-check:focus, 
    .form-select:focus{
        border-color: #F6921D;
        box-shadow: 0 0 0 0.2rem #f6911da1;
    } 

    .form-check-input{
        cursor: pointer;

        &:checked{
            border-color: #F6921D;
            background-color: #731E9A;
        }
        
        &:focus{
            border-color: #F6921D;
            box-shadow: 0 0 0 0.1rem #f6911da1;
        }        
    }

    h4{
        color: #731E9A;
        font-weight: 600;
    }

    hr{
        margin: 0 auto;
        padding: 0 2%;
        width: 99%;
    }

    label {
        color: #731E9A;
        font-weight: 600;

        span{
           color: #F6921D;
        }
    }
`