const { GoogleSpreadsheet } = require('google-spreadsheet');

const credenciales = require('./json/credenciales.json');

let googleId = "1NsdMUgQQFZXt74yvm4m33OsslTCHuMfgMsOUYUpevcs";

async function accederGoogleSheet(){
    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    
   const sheet = documento.sheetsByIndex[0];
const registros = await sheet.getRows();
    

    return registros;
}

async function guardarDatos(pObjecto){
    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();

    const sheet = documento.sheetsById[0];
    await sheet.addRow(pObjecto);

}


module.exports = {
    accederGoogleSheet: accederGoogleSheet,
    guardarDatos: guardarDatos
}