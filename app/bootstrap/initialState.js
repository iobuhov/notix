import { fromJS } from 'immutable';
import CardSetRecord from '../kanban/records/CardSetRecord';

const cardSets = [
  'Main', 'Second', 'Example',
  'Cars', 'Addons', 'Packs',
  'Soda', 'Vaccum', 'Lake',
];

export default fromJS({
  board: {
    content: cardSets.map((name, id) => new CardSetRecord({ name, id })),
  },
});
