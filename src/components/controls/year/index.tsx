import React from 'react';
import { observer } from 'mobx-react-lite';

/* hooks */
import _useStore from '../../../hooks/use-store';

const Year = observer(() => {
  const meteorsStore = _useStore('meteorStore');

  const { availableYears, year, handleYearChange } = meteorsStore;

  return (
    <div className="control__input__wrapper">
      <label>
        Year:
      </label>

      <select
        onChange={(e) => handleYearChange(e.target.value)}
        value={year}>
        {!year && (<option key={-1}>Select year</option>)}
        {availableYears.map((year, index) => <option key={index} value={year}>{year}</option>)}
      </select>
    </div>
  );
});

export default Year;
