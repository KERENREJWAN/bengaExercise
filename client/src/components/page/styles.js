import styled from "styled-components";

const page = styled.div((props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: '0 auto',
    justifySelf: 'center',
}));

const line = styled.div((props) => ({
    height: '50vh',
    border: '1px dashed #19bc8b',
    margin: 'auto 50px'
}))

export default {
    page,
    line
}