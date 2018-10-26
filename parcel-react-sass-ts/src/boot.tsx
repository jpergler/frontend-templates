import * as React from 'react';
import * as ReactDOM from 'react-dom';

function renderApp(): void {
    ReactDOM.render(
        <h1>Hello from React</h1>,
        document.getElementById('reactapp')
    );
}

renderApp();