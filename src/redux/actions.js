export const addCat = ({ name, activity }) => ({
     type: 'ACTION_ADD_CAT',
     payload: {
          name,
          activity,
     },
});