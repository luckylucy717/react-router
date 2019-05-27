import React from 'react';
// BrowserRotuer는 HTML5의 historyAPI 를 사용하여 새로고침하지 않고도 페이지를 교체할 수 있도록 해줌

import {BrowserRouter} from 'react-router-dom';
import App from './App';

const Root = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}
export default Root;