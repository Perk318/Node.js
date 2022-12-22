const db = require('./db');
const config = require('../config');

const cusSpecs = 'address_id, user_id, CustomerCreationDate,date, CompanyName, CompanyHQAdress, FullNameOfCompanyContact,CompanyContactPhone, CompanyContactEMail, CompanyDesc, FullNameServiceTechAuth, TechAuthPhoneService, TechManagerEmailService, created_at, updated_at '



const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${cusSpecs}
      FROM customers WHERE id=${id} `
    );
    return rows[0]
}

const getALL = async function () {
    const rows = await db.query(
      `SELECT ${cusSpecs}
      FROM customers `
    );
    return rows
}

const create = async function (customers) {
    const result = await db.query(
      `INSERT INTO customers 
      
      (${customers.address_id}, ${customers.user_id}, "${customers.CustomerCreationDate}",
      "${customers.date}", "${customers.CompanyName}", "${customers.CompanyHQAdress}", 
      "${customers.FullNameOfCompanyContact}", "${customers.CompanyContactPhone}", 
      "${customers.CompanyContactEMail}", "${customers.CompanyDesc}", 
      "${customers.FullNameServiceTechAuth}", "${customers.TechAuthPhoneService}", 
      "${customers.TechManagerEmailService}", ${customers.created_at}, 
      ${customers.updated_at} )`
    );
  
    let message = 'Error in creating customer';
  
    if (result.affectedRows) {
      message = 'customer created successfully';
    }
  
    return {message};
}






module.exports = {
    getSingle,
    getALL,
    create
}