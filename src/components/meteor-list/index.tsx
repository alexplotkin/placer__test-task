import React from 'react';
import { observer } from 'mobx-react-lite';

/* hooks */
import _useStore from '../../hooks/use-store';

/* styles */
import './styles.scss';

const MeteorList = observer(() => {
  const meteorStore = _useStore('meteorStore');

  const { year, filteredMeteorListData } = meteorStore;

  if (!year) {
    return null;
  }

  if (!filteredMeteorListData.length) {
    return (
      <div className="meteor-list__not-found-message">
        Nothing was found
      </div>
    );
  }


  return (
    <div className="meteor-list__wrapper">
      {filteredMeteorListData.map((item) => {
        return (
          <div key={item.id} className="meteor-list__item__wrapper">
            <div className="meteor-list__item__name">
              {item.name}
            </div>
            <div className="meteor-list__item__info">
              <div className="meteor-list__item__info__year">
                year: {item.year}
              </div>
              <div className="meteor-list__item__info__mass">
                mass: {item.mass}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default MeteorList;
