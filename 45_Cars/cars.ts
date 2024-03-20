import { features } from "process";

function storeCarInformation(manufacturer: string, modelName: string, ...extraOption: { [Key: string]: any} [] ) {

    const CarInformation = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return CarInformation;
}

let answere = storeCarInformation('Toyota', 'Corolla', {color:'grey'}, {features:['Navigation', 'Powerwindow']})
console.log(answere);