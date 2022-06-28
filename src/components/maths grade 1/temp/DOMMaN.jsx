import React from 'react';

export default function DOMMaN() {

    const div1 = <div>abc</div>
    const div2 = <div>bcs</div>

    const swap = () => {
        const temp = div1;
        div1 = div2;
        div2 = temp
    }
    return (<div>
        <div onClick={() => swap()}>
            {div1}
        </div>
        <div>

            {div2}
        </div>
    </div>)
}
