import React, {useEffect, useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "./redux/blockchain/blockchainActions";
import {fetchData} from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import MainLayout from "./components/mainLayout/MainLayout";

// import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <MainLayout/>
  );
}

export default App;
