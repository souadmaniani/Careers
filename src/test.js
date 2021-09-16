import styled  from "styled-components";

export function Test() {
    
const Container = styled.div`
    width: 100%;
    border: ${({theme}) => `1px solid ${theme.color.primaryBg}`};
    background-color: ${props => props.theme.color.hightText};
`;
  
    return (
        <Container>
            <h1>hello world</h1>
        </Container>
    )
}
