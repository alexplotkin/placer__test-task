import { format } from 'date-fns';

/* utils */
import reqH from '../../utils/request-handler';

/* types */
import { MeteorListDataItemOriginal, MeteorListDataItem } from '../types/meteors';

/* constants */
import { API_URL } from '../../constants';

const serializeData = (originalData: MeteorListDataItemOriginal[]): MeteorListDataItem[] =>
  originalData.reduce((data: MeteorListDataItem[], item) => {
    if (item.id && item.name && item.year && item.mass) {
      data.push({
        id: parseInt(item.id),
        name: item.name,
        year: format(new Date(item.year), 'yyyy'),
        mass: item.mass
      });
    } else {
      console.info('Not enough information for item ID', item.id);
    }

    return data;
  }, []);

export const fetchMeteorsData = () =>
  reqH({
    method: 'GET',
    apiURL: API_URL,
    urlPrefix: 'resource',
    url: 'y77d-th95.json',
  }).then((res) => serializeData(res.data));
