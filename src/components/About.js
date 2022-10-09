import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../lotties/40223-content-marketing.json";

const lottieAnimation = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    }
};

export default function About(props) {
    // let myStyle = {
    //     color: props.mode === 'dark' ? 'white' : 'black',
    //     backgroundColor: props.mode === 'dark' ? '#01012F' : 'white',
    //     border: '1px solid',
    //     borderColor: props.mode === 'dark' ? 'white' : 'black',
    // }


    return (
        <div className="container myContainer" >
            <div className="box" style={{ borderColor: props.mode === 'dark' ? 'rgba(128, 128, 128, 0.274)' : 'white' }}>
                <h2 className="my-2 aboutHeading">About Convert<span style={{ color: "red" }}>Txt</span></h2>
                <div className="aboutBox">
                    <div className="aboutText">
                        <h5>Analyze Your Text</h5>
                        <p>ConvertTxt gives you a way to analyze your text quickly and effectively. Be it word count, character count or providing the average reading time.</p>
                        <h5>Free To Use</h5>
                        <p>ConvertTxt is a free character tool that provides instant character count & word count statistics for a given text. It reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</p>
                        <h5>Browser Compatibale</h5>
                        <p>This word counter software works in any browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, excel documents, pdf documents, essays, etc.</p>
                    </div>
                    <div>
                        <Lottie options={lottieAnimation} height={300} width={280} />
                    </div>
                </div>
            </div>
        </div>
    )
}
