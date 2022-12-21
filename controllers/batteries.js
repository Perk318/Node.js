const db = require('./db');
const config = require('../config');


const gatherAll = 'id, employee_id, building_id, Type, status, CommissionDate, LastInspectionDate, Notes'



const getSingle = async function (id) {
        const rows = await db.query(
            `SELECT ${gatherAll}
            FROM batteries WHERE id=${id}`
        );
        return rows[0];
}









module.export = {
    getSingle
}