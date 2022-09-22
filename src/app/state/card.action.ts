import { createAction, Action } from "@ngrx/store";
import { User } from "../models/user.model";

export enum ActionCardEnum {

    // action for qr code generate
    GET_QR_CODE_GENERATE = "Get QR Code Generate",
    GET_QR_CODE_GENERATE_SUCCESS = "Get QR Code Generate success",
    GET_QR_CODE_GENERATE_ERROR = "Get QR Code Generate error",

    // action for upload image 
    UPLOAD_PHOTO_USER = "upload photo user",
    UPLOAD_PHOTO_USER_SUCCESS = "upload photo user success",
    UPLOAD_PHOTO_USER_ERROR = "upload photo user error",

}

// action for qr code generate

export class QrCodeGenerateAction implements Action {
    type = ActionCardEnum.GET_QR_CODE_GENERATE;
    constructor(public payload: User) {
    }
}

export class QrCodeGenerateActionSuccess implements Action {
    type = ActionCardEnum.GET_QR_CODE_GENERATE_SUCCESS;
    constructor(public payload: User) {
    }
}

export class QrCodeGenerateActionError implements Action {
    type = ActionCardEnum.GET_QR_CODE_GENERATE_ERROR;
    constructor(public payload: any) {
    }
}

// action for upload image 

export class UplaodPhotoAction implements Action {
    type = ActionCardEnum.UPLOAD_PHOTO_USER;
    constructor(public payload: any) {
    }
}

export class UplaodPhotoActionSuccess implements Action {
    type = ActionCardEnum.UPLOAD_PHOTO_USER_SUCCESS;
    constructor(public payload: any) {
    }
}

export class UplaodPhotoActionError implements Action {
    type = ActionCardEnum.UPLOAD_PHOTO_USER_ERROR;
    constructor(public payload: any) {
    }
}


export type CardActionsTypes = QrCodeGenerateAction | QrCodeGenerateActionSuccess | QrCodeGenerateActionError |
                                UplaodPhotoAction  | UplaodPhotoActionError | UplaodPhotoActionSuccess;