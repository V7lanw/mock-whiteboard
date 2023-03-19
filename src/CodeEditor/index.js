import React, { useEffect, useState, useRef, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// language support
import { javascript } from '@codemirror/lang-javascript';


// TODO: Use font awesome as icons and buttons, there is always one code editor at the very top, and you could hide or reveal it
// import closeIcon from '../images/icons/close.png';
// import muteIcon from '../images/icons/mute.svg';
// import videoIcon from '../images/icons/video.svg';
// import phoneIcon from '../images/icons/phone.svg';


const CodeEditor = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return (<div>
        <CodeMirror
            value="onsole.log('hello world!');"
            height="400px"
            width="600px"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
        />
    </div>);
};

export default CodeEditor;
