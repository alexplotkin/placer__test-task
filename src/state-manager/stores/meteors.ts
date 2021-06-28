import { makeAutoObservable } from 'mobx';

/* helpers */
import getUnics from '../../helpers/get-unics';

/* actions */
import { fetchMeteorsData } from '../actions/meteors';

/* types */
import { MeteorListDataItem } from '../types/meteors';

const compareYears = (year1: string, year2: string): boolean => year1 === year2;
const compareMasses = (mass1: string, mass2: string): boolean => parseInt(mass1) > parseInt(mass2);

export class MeteorsStore {
  meteorListData: MeteorListDataItem[] = [];

  year: string = '';
  mass: string = '';

  autofit: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getMeteorListData = (): void => {
    fetchMeteorsData()
      .then((serializedData) => {
        this.meteorListData = serializedData;
      });
  };

  handleYearChange = (value: string): void => {
    this.year = value;
    this.autofit = false;
  };

  handleMassChange = (value: string): void => {
    this.mass = value;
    this.autofit = false;
  };

  get availableYears(): string[] {
    return getUnics(this.meteorListData, 'year').sort();
  }

  get filteredMeteorListData(): MeteorListDataItem[] {
    const filtered = this.meteorListData.filter((item) => {
      if (this.mass) {
        return compareYears(item.year, this.year) && compareMasses(item.mass, this.mass);
      }
      return compareYears(item.year, this.year);
    });

    if (!filtered.length && this.mass) {
      const fitMeteorListDataItem = this.meteorListData.find((item) => compareMasses(item.mass, this.mass));
      if (fitMeteorListDataItem) {
        this.autofit = true; // can be changed with alert message if not needed inside UI
        this.year = fitMeteorListDataItem.year;
      }
    }

    return filtered;
  }
}
