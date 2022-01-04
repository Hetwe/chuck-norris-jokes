import Fact from "../interface/fact";
import React from 'react'

const OneFact = (context: Fact) => { 
    const { value } = context
    return (
        <div
            className={'main-page__fact-content'}
        >
            <div
                className={'main-page__fact-text'}
            >
                {
                    value
                }
            </div>
        </div>
    );
}

export default OneFact;
