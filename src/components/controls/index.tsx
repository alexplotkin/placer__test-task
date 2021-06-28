import React from 'react';
import { observer } from 'mobx-react-lite';

/* components */
import Year from './year';
import Mass from './mass';

/* hooks */
import _useStore from '../../hooks/use-store';

/* styles */
import './styles.scss';

const Controls = observer(() => {
  const meteorStore = _useStore('meteorStore');

  const { autofit } = meteorStore;

  return (
    <div className="controls__wrapper">
      {autofit && (
        <div className="controls__autofit-message">
          The mass was not found, jumping to first-year where there is a mass that fits the criteria
        </div>
      )}

      <div className="controls__inputs__wrapper">
        <Year />
        <Mass />
      </div>
    </div>
  );
});

export default Controls;
