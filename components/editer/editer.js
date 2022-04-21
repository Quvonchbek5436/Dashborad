import React from "react";

import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

import "quill/dist/quill.snow.css"; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const Editer =() => {
    const { quill, quillRef } = useQuill();

    console.log(quill); // undefined > Quill Object
    console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

    return (
        <div style={{ width: '100%',  }}>
            <div ref={quillRef} style={{border:'none'}} />
        </div>
    );
};
export default Editer