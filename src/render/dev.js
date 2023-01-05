import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import Home from '~/render/script/page/Home';
import '~/render/style/index.css';
import Loader from '~/render/script/component/Loader';

ReactDOM.render(
  <Loader/>,
  document.getElementById('root'),
);
