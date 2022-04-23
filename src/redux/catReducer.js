import { act } from "react-dom/test-utils";

const initialState = {
     cats: {
          1: {
               name: 'bibbii',
               activity: 'relaxing'
          }
     }
}

export const catReducer = (state = initialState, action) => {
     switch(action.type) {
          case 'ACTION_ADD_CAT': {
               //add payload and return new sate
               const { name, activity } = action.payload;
               const id =
               Math.random().toString(36).substring(2, 15) +
               Math.random().toString(36).substring(2, 15);

               return {
                    cats: {
                         ...state.cats,
                         [id]: { name, activity }
                    },
               };
          }

          default:
               return state;
     }

}

// export default catReducer;