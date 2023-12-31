import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 10px 0px;
    align-items: center;
    border: 1px solid #555;
    border-radius: 10px;
    padding: 10px;
    margin: 20px 0;

    .image {
        font-size: 1em;
    }

    input {
        color:#FFF;
        background-color: #17181F;
        border: 0px;
        outline: 0;
        padding: 5px;
        font-size: 1em;
        /* width: 95%; */
        flex: 1;
    }

    .send {
        color: #CCC;
        border: 1px solid #555;
        border-radius: 5px;
        padding: 5px;
    }
`;