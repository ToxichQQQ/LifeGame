import React from 'react'
import {StartPage} from "./components/StartPage";
import {Game} from "./components/Game";

import styles from './main.module.css'


function App() {
  return (
    <div className={styles.root}>
        <StartPage/>
    </div>
  );
}

export default App;
