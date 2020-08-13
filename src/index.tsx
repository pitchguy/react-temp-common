import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import $ from 'jquery';
// import { add } from './math';

// add(66);
/*初始化*/
function renderWithHotReload(Router) {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('app')
    );
}

renderWithHotReload(Router);

/*热更新*/
if ((module as any).hot) {
    (module as any).hot.accept('./router/index.tsx', () => {
        const Router = require('./router/index.tsx').default;
        renderWithHotReload(Router);
    });
}

// 判断该浏览器支不支持 serviceWorker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
                console.log('service-worker registed');
            })
            .catch(error => {
                console.log('service-worker registed error');
            });
    });
}
