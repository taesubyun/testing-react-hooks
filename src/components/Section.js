import { Data } from './Data';
// import styled from 'styled-components';
import { useState } from 'react';

const Section = () => {
    const [clicked, setClicked] = useState(false);
    const onClick = () => {
        setClicked((curClicked) => !curClicked);
    };

    const AdditionalContent = () => {
        if (clicked) {
            return <div>클릭됐습니다.</div>;
        } else {
            return null;
        }
    };

    return (
        <div
            className='section_container'
            style={{
                display: 'flex',
                boxShadow: '2px 10px 35px 1px rgba(153, 153, 153, 0.3)',
                borderRadius: '10px',
                height: '30vh',
                margin: '10px 0',
            }}
        >
            <div
                className='section_box'
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                }}
            >
                {Data.map((item) => {
                    return (
                        <>
                            <div className='section_content'>
                                <h3>{item.context}</h3>
                            </div>
                            <button onClick={() => onClick()}>+더보기</button>
                            <AdditionalContent />
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Section;
