const db = require('./db');
const config = require('../config');

const colSpecs = 'battery_id, id, Type, NumOfFloorsServed, Status, Information, Notes, created_at, updated_at'
const eleFields = 'column_id, id, SerialNumber, Model, Type, Status, CommisionDate, LastInspectionDate, InspectionCert, Information, Notes, created_at, updated_at ' 

const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${colSpecs}
      FROM columns WHERE id=${id} `
    );
    return rows[0]
}

const getALL = async function () {
    const rows = await db.query(
      `SELECT ${colSpecs}
      FROM columns `
    );
    return rows
}

const getElev = async function (id) {
    const rows = await db.query(
        `SELECT ${eleFields}
        FROM elevators WHERE column_id =${id} `
    );
    return rows[0]
}


module.exports = {
    getSingle,
    getALL,
    getElev
}