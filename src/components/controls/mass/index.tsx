import React from 'react';
import { observer } from 'mobx-react-lite';

/* hooks */
import _useStore from '../../../hooks/use-store';

const Mass = observer(() => {
  const meteorsStore = _useStore('meteorStore');

  const { year, mass, handleMassChange } = meteorsStore;

  return (
    <div className="control__input__wrapper">
      <label>
        Mass:
      </label>

      <input
        disabled={!year}
        value={mass}
        onChange={(e) => handleMassChange(e.target.value)}
      />
    </div>
  );
});

export default Mass;
