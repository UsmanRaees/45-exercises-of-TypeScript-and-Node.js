"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInformation(manufacturer, modelName, ...extraOption) {
    const CarInformation = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return CarInformation;
}
let answere = storeCarInformation('Toyota', 'Corolla', { color: 'grey' }, { features: ['Navigation', 'Powerwindow'] });
console.log(answere);
