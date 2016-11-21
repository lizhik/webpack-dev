// import './index.less';
// import component from './component';
import React from 'react';
import ReactDOM from 'react-dom';

// let content = document.getElementById('container');
// content.appendChild(component());
class HelloReact extends React.Component {
    render() {
        return <h1 > Hello React! < /h1>
    }
}
ReactDOM.render( < HelloReact / > ,
    document.getElementById('container')
);