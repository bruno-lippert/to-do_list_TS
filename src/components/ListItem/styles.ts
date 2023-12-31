import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div<ContainerProps>(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    align-items: center;

    input {
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    .deleteContainer {
        display: flex;
        justify-content: flex-end;
        flex: 1;
    }

    .deleteButton {
        cursor: pointer;
    }
`
));