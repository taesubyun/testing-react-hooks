import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderText>[스쿠버다이빙] 오픈워터 코스</HeaderText>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    border: 1px solid red;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: center;

    border: 1px solid blue;
`;

const HeaderText = styled.h2`
    font-weight: bold;
`;
