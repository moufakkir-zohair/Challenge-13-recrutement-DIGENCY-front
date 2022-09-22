import { Action } from "@ngrx/store";
import { User } from "../models/user.model";
import { ActionCardEnum, CardActionsTypes } from "./card.action";

export interface CardState {
    user: User;
}

export const initialState: CardState = {
    user : {
        "cin": "",
        "dateNaissance": new Date(),
        "nomAr": "",
        "nomFr": "",
        "prenomAr": "",
        "prenomFr": "",
        "profession": "",
        "qrCode": "",
        "typeCarte": "A",
        "image": "",
    }
};

export function reducerCard(
    state = initialState,
    action: Action
  ): CardState {
    switch (action.type) {
      case ActionCardEnum.GET_QR_CODE_GENERATE: {
        return {
          ...state,
        };
      }
      case ActionCardEnum.GET_QR_CODE_GENERATE_SUCCESS:{
        return {
            ...state,
            user: (<CardActionsTypes>action).payload,
        }
      }

      case ActionCardEnum.UPLOAD_PHOTO_USER: {
        return {
          ...state,
        };
      }
      case ActionCardEnum.UPLOAD_PHOTO_USER_SUCCESS:{
        return {
            ...state,
        }
      }

      default: {
        return state;
      }
    }
  }