import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
}) // reikia multi:true, kad butu galima pridet savo validatoriu prie ng_validators

export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {
        const addressControl = formGroup.controls.address;
        const cityControl = formGroup.controls.city;
        const countryControl = formGroup.controls.country;
        const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;

        if ((addressControl && addressControl.value && cityControl && cityControl.value &&
            countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            return null; // null reiskia ner problemu
        } else {
            return {validateLocation: false};
        }
    }
}
