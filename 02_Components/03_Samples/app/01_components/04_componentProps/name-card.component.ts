import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "namecard",
    templateUrl: "name-card.component.html",
    inputs: ["firstName", "lastName"]
})
export class NameCardComponent {
    // свойство
    firstName: string;

    // закрытое поле
    private _lastName: string;

    // getter для получения значения закрытого поля _lastName
    get lastName(): string {
        return this._lastName;
    }

    // setter для установки значения закрытому полю _lastName
    set lastName(value: string) {
        this._lastName = value;
    }

    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}