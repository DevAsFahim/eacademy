import React from 'react';
import Pdf from 'react-to-pdf'


const ref = React.createRef();

const PDF = (props) => {
    return (
        <>
            <div>
                hola
            </div>
            <Pdf targetRef={ref} filename="post.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </Pdf>
            <div className='Post' ref={ref}>
                <h1>Bismillah</h1>
            </div>
        </>
    );
};

export default PDF;