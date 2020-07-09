import * as actionTypes from '../actionTypes';
import * as SecureStore from 'expo-secure-store';
import { AsyncStorage } from 'react-native';

import NavigationService from "src/Navigation/NavigationService";
import { appLogin } from 'src/Services/Auth.service';

export const login = (username,password) => {
  return dispatch => {
    const data={
      "username":username,
      "password":password
    }
    
    try {
      dispatch({type:actionTypes.LOGIN_LOADING});
            
      appLogin(data).then(res=>{
          if(res.status_code === 1000){
            
           AsyncStorage.setItem('userToken',res.data.token)
            .then(()=>{
              dispatch({type:actionTypes.LOGIN_SUCCESS,payload:res.data});
              return NavigationService.navigate('Auth');
            });
          }else{
            return dispatch({type:actionTypes.LOGIN_FAIL,payload:res.message});
          }
        });
    } catch (error) {
      console.log('ERRR ');
    }
  };
}


export const logout = () =>{
  return dispatch=>{
    AsyncStorage.removeItem('userToken');
    return NavigationService.navigate('App');
  }
  
}