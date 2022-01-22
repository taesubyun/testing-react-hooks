import { Data } from './Data';
import { useState } from 'react';
import CountSection from './CountSection';

const Section = () => {
    const [clicked, setClicked] = useState(false);
    const onClick = () => {
        setClicked((curClicked) => !curClicked);
    };

    const AdditionalContent = () => {
        if (clicked) {
            return (
                <div
                    className='container'
                    style={{
                        height: '100%',
                    }}
                >
                    <div
                        className='content'
                        style={{
                            padding: '0 20px',
                            height: '100%',
                        }}
                    >
                        <h3>테스트 코드 h3</h3>
                        <h4>테스트 코드 h4</h4>
                    </div>
                </div>
            );
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
                margin: '10px 10px',
            }}
        >
            <div
                className='section_box'
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    boxSizing: 'borderBox',
                    padding: '0 10px',
                }}
            >
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
            </div>
        </div>
    );
};

export default Section;
