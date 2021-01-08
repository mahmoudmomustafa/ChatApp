const UserReducer = (state, action) => {
   switch (action.type) {
      case 'RESTORE_USER':
         return {
            ...state,
            user: action.user,
         };
      case 'SIGN_IN':
         return {
            ...state,
            isSignout: false,
            user: action.user,
         };
      case 'SIGN_OUT':
         return {
            ...state,
            isSignout: true,
            user: null,
         };
      case 'SET_DATA':
         return {
            ...state,
            userData: action.userData,
         };
      default:
         return state
   }
}
export default UserReducer;