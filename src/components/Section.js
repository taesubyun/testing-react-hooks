import { Data } from './Data';
import { useState } from 'react';
import CountSection from './CountSection';
import styled from 'styled-components';

const Section = () => {
    const [clicked, setClicked] = useState(false);
    const onClick = () => {
        setClicked((curClicked) => !curClicked);
    };

    const AdditionalContent = () => {
        if (clicked) {
            return (
                <Container>
                    <Content>
                        <h3>테스트 코드 : h3</h3>
                        <h4>테스트 코드 : h4</h4>
                    </Content>
                </Container>
            );
        } else {
            return null;
        }
    };

    return (
        <SectionContainer>
            <SectionBox>
                {Data.map((item) => {
                    return (
                        <>
                            <div className='section_content'>
                                <h3 style={{ color: '#CD113B' }}>
                                    {item.context}
                                </h3>
                            </div>
                            <button onClick={onClick}>+더보기</button>
                            <AdditionalContent />
                        </>
                    );
                })}
            </SectionBox>
        </SectionContainer>
    );
};

export default Section;

const Container = styled.div`
    height: 100%;
`;

const Content = styled.div`
    padding: 0 20px;
    height: 100%;
`;

const SectionContainer = styled.div`
    display: flex;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    border-radius: 10px;
    height: 30vh;
    margin: 10px 10px;
`;

const SectionBox = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 10px;
`;
