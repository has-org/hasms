'use client'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

type FormProp = {
    children: React.ReactNode;
}

export const FormStyled = ({children}: FormProp) => {

    return (
        <Container>
         {children}
        </Container>
 )
}