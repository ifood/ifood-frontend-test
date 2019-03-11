export function list(state = {}, action = null) {
    const {type, payload} = action;
    switch (type) {
      case 'UPDATE':
      return payload;
      default:
      return state;
    }
   }