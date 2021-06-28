import React from 'react';

/* stores */
import { MeteorsStore } from './meteors';

export const stores = Object.freeze({
  meteorStore: new MeteorsStore(),
});

export const storesContext = React.createContext(stores);

export const StoresProvider = storesContext.Provider;
