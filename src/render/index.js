import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import store from '~/render/script/obj/store';
import Home from '~/render/script/page/Home';
import '~/render/style/index.css';
import communicate from '~/render/script/lib/communicate';
import focusAndBlur from '~/render/script/lib/focusAndBlur';
import syncContent from '~/render/script/lib/syncContent';

communicate(store);
focusAndBlur();
syncContent();

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

