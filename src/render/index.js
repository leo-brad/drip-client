import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import Home from '~/render/script/page/Home';
import '~/render/style/index.css';
import main from '~/render/script/lib/main';
import global from '~/render/script/obj/global';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);

main();

setTimeout(() => {
  const { ipc, } = window;
  ipc.send('render/ready');
}, 0);
