import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { QrCodeGeneratorService } from "../services/card.service";
import { ActionCardEnum, CardActionsTypes, QrCodeGenerateActionError, QrCodeGenerateActionSuccess, UplaodPhotoActionError, UplaodPhotoActionSuccess } from "./card.action";

@Injectable()
export class CardEffects{

    constructor(private qrcodegeneratorService: QrCodeGeneratorService , private effectsAction:Actions){

    }

    getQrCodeGenerate: Observable<Action> = createEffect(
        () => this.effectsAction.pipe(
            ofType(ActionCardEnum.GET_QR_CODE_GENERATE),
            mergeMap((action: CardActionsTypes) => {
                console.log(action.payload);
                return this.qrcodegeneratorService.QrCodeGenerator(action.payload)
                .pipe(
                    map(user => new QrCodeGenerateActionSuccess(user)),
                    catchError((err) => of( new QrCodeGenerateActionError(err.message)))
                )
            })
        )
    );

    uploadPhotoUser: Observable<Action> = createEffect(
        () => this.effectsAction.pipe(
            ofType(ActionCardEnum.UPLOAD_PHOTO_USER),
            mergeMap((action: CardActionsTypes) => {
                console.log(action.payload);
                return this.qrcodegeneratorService.uploadPhotoUser(action.payload)
                .pipe(
                    map(path => new UplaodPhotoActionSuccess(path)),
                    catchError((err) => of( new UplaodPhotoActionError(err.message)))
                )
            })
        )
    );

}