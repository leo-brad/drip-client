import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, } from 'redux';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import Home from '~/render/script/page/Home';
import reducer from '~/render/script/reducer';
import '~/render/style/index.css';

class Shell extends React.Component {
  render() {
    return <div/>;
  }
}

const preload = {
  content: {
    index: {
      '[shell]:shell1': 1,
      '[shell]:shell2': 0,
    },
    contents: [
      [
        {
          field: 'stderr',
          instance: '[shell]:shell2',
          string: '/private/tmp/example/.drip/local/package/shell/dist/index.js:10\n    throw error;\n    ^\n\nError: Command failed: ls /fafsdfsd\n\nls: /fafsdfsd: No such file',
        }
      ],
      [
        {
          field: 'stderr',
          instance: '[shell]:shell1',
          string: '/private/tmp/example/.drip/local/package/shell/dist/index.js:10\n    throw error;\n    ^\n\nError: Command failed: ls /fasdfsadf\n\nls: /fasdfsadf: No such fil',
        },
      ],
    ],
  },
  instance: {
    instance: '[shell]:shell2',
    instances: [
      '[shell]:shell2', '[shell]:shell1',
    ],
  },
};

const store = createStore(reducer, preload);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
