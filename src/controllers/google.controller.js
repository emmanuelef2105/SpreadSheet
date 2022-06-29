let googleSheet = require('../spreadsheet');

const obtenerDatos = async (req, res) => {
    registros = await googleSheet.accederGoogleSheet();
    res.render('index', {registros});
}

const pintarForm = (req, res) => {
    res.render('form',{});
}

const guardarDatos = async (req, res) => {
    googleSheet.guardarDatos(req.body);
    res.redirect('/');
}

module.exports = {
    obtenerDatos: obtenerDatos,
    pintarForm: pintarForm,
    guardarDatos: guardarDatos,
}