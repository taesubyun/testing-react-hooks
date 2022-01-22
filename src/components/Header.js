import styled from 'styled-components';
import Section from './Section';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderText>테스트 코드</HeaderText>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const HeaderContent = styled.div`
    margin: 5px;
`;

const HeaderText = styled.h2``;
