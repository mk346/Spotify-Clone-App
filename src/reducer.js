export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
   //token: 'BQCWZQF-YgakLG62smfWCS1aRbwPY1A1jD7Iu-czvKYyIbO3IK…kw57WuDJQdovGFyQt4tSYt_XVfQR60xzS2GBoXtDy2fuXVHbA',
   //token:  'BQALNyJ5hGTwaNb4VilgWrHWIED4aalgmlvjz_kulsOkhUtpRbr0XwxVtR3o1p5bSE-sx1-CVAd0keNZHzfLZGQ_flx',
};

const reducer = (state, action) => {
   console.log(action);
   
   switch(action.type){
       case "SET_USER":
           return {
               ...state,
               user: action.user,

           }; 
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            }; 
        case "SET_PLAYLIST":
            return{
                ...state,
                playlists: action.playlists,
            };
         case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };           
        default:
            return state;   

   }
}

export default reducer