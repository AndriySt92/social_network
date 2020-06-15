import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';



let store = {
  _state: {
    profilePage: {
      post: [
        {post:'Dimyc hello...', id:'1', likeCound:'12'},
        {post:'Who is your brother?', id:'2' , likeCound:'16'},
        {post:'I have saw your brother!!!', id:'3' , likeCound:'18'},
        {post:'Have you been here before?', id:'4', likeCound:'36'},
        {post:'No, I nad lived all my life in ferm...', id:'5', likeCound:'62'},
        {post:'Ohh, I have never been in the ferm!', id:'6', likeCound:'162'}
      ],
      printText: '',
    },
    dialogPage:{
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
        printMessage:"",
    },
    navPage: {
      friend: [
        {name:"Vasya" , img:"https://instaturbo.ru/images/blog/5bbe622defe22.jpg"},
        {name:"Alex" , img:"https://www.cato.org/sites/cato.org/files/authors/alexnowrasteh.jpg"},
        {name:"Sonya" , img:"https://www.tvovermind.com/wp-content/uploads/2020/03/Ava-Louise.jpg"},
        {name:"Maya" , img:"https://popnable.com/images/news/temp/is_ava_max_another_prefabricated_popstar_usa_top_40_233.jpg"},
        {name:"Erfan" , img:"https://static.wixstatic.com/media/d2571d_b92ed9fb13a2436c9adcd20690065806~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_640,h_684,al_c,q_85,usm_0.66_1.00_0.01/d2571d_b92ed9fb13a2436c9adcd20690065806~mv2_d_6000_4000_s_4_2.webp"},
        {name:"Soha" , img:"https://pbs.twimg.com/profile_images/1211009342851432448/a6qkXME0_400x400.jpg"},
        {name:"Dmitriy" , img:"https://media.kidozi.com/unsafe/600x600/img.kidozi.com/small/28593080/99344,14,2,0,12,184,151.08943089431,23,20,b84bfc8214265bcc6f9995ae846cffe8/merchantimagenew/709-ava-men-s-t-shirt-black.jpg"},
      ]
    }
     
  },
  _rerenderEntireTree:()=>{},
  getState(){
    return this._state;
  },
  subscriber(observer){
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    debugger
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._rerenderEntireTree(this.getState());
  }

}

export default store