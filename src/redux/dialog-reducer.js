// for addMessage
const ON_MESSAGE_CLICK = 'onMessageClick';

let initialState = {
    message: [
        {message:'Dimyc hello', id:'1', likeCound:12},
        {message:'Who is your brother?', id:'2' , likeCound:16},
        {message:'I haven\'t saw your brother.', id:'3' , likeCound:18},
        {message:'Have you been here before?', id:'4', likeCound:36},
        {message:'No, I nad lived all my life in ferm...', id:'5', likeCound:62},
        {message:'Ohh, I have never been in the ferm!', id:'6', likeCound:162}
      ],
      name: [
        {name:'Dimych', id:'1'},
        {name:'Slava', id:'2'},
        {name:'Andrew', id:'3'},
        {name:'Mike', id:'4'},
        {name:'Keysea', id:'5'},
        {name:'Didov', id:'6'}
      ],

}

const dialogReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ON_MESSAGE_CLICK: {

            let stateCopy = {...state};
            stateCopy.message = [...state.message]; 
            let newMessage = {message: action.newMessageBoby, id:'6', likeCound:162}
            stateCopy.message.push(newMessage);

            return stateCopy;
        }
        default: return state;
    }
}

  
export const addMessageActionCreator = (formData) => ({ type: ON_MESSAGE_CLICK , newMessageBoby: formData});

export default dialogReducer;