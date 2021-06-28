import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import 'normalize.css';

/* components */
import Controls from './components/controls';
import MeteorList from './components/meteor-list';

/* hooks */
import _useStore from './hooks/use-store';

/* styles */
import './App.scss';

const App = observer(() => {
  const meteorStore = _useStore('meteorStore');

  const { getMeteorListData } = meteorStore;

  useEffect(() => {
    getMeteorListData();
  }, []);

  return (
    <div className="app__wrapper">
      <div className="app__inner container">

        <h1>
          Meteors App
        </h1>

        <Controls />

        <MeteorList />

      </div>
    </div>
  );
});

export default App;
