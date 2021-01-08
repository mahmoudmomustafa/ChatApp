const UserReducer = (state, action) => {
   switch (action.type) {
      case 'RESTORE_USER':
         return {
            ...state,
            userToken: action.user,
         };
      case 'SIGN_IN':
         return {
            ...state,
            isSignout: false,
            userToken: action.user,
         };
      case 'SIGN_OUT':
         return {
            ...state,
            isSignout: true,
            userToken: null,
         };
      case 'SET_DATA':
         return {
            ...state,
            user: action.user,
         };
      default:
         return state
   }
}
export default UserReducer;