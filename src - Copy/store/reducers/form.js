import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }
};

const inputChanger = (state, action) => {
    return updateObject(state,{

    })
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INPUTCHANGE_HANDLER:return inputChanger(state, action)
        default:
            return state
    }
}