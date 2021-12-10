
/* calculator.js */

import { db } from './db.js'

export async function getMortgageOptions(data) {
	
	let sql = `SELECT *  FROM mortgageOptions where addedBy = "${data}";`
	let records = await db.query(sql)
	
	return records;
}
export async function getFinancialData(data) {
	
	let sql = `SELECT *  FROM FinancialData where user = "${data}";`
	let records = await db.query(sql)
	
	return records;
}

export async function saveOptions(data) {

    
	const sql = `INSERT INTO mortgageOptions(totalAmount, amounttoDeposit, Years ,
totalAmountwithIntrestRate,monthlyMortgage , addedBy )
VALUES(${data.planamount * 1}, ${data.plandeposit * 1}, ${ data.years * 1 } , ${data.totalAmount * 1}, ${data.monthlyAmount * 1}, "${data.addedBy}" )`
	console.log(sql)
	await db.query(sql)
	return true
}

export async function deleteOption(data) {
	
    
	const sql = `DELETE FROM mortgageOptions WHERE id = ${+data.optionId};`
	console.log(sql)
	await db.query(sql)
	return true
}

export async function addFinancialData(data) {

//	const sql = `UPDATE mortgageOptions SET monthlyWage = ${+data.Monthlywage} ,  monthlyOutgoing = ${+data.montlyOutgoings} , monthlyRent = ${+data.monthlyRent}  WHERE addedBy = "${data.authorised}";`
//	await db.query(sql)
	
    const sql2 = `INSERT INTO FinancialData(user, monthlyWage, monthlyOutgoing , monthlyRent,wageLeft , amountToDeposit, amounttoBorrow )
VALUES("${data.authorised}", ${data.Monthlywage}, ${ data.montlyOutgoings } , ${data.monthlyRent},
${(data.Monthlywage - data.montlyOutgoings) - data.monthlyRent }, ${data.monthlyAmount} , ${data.totalAmount} )`;
    console.log(sql2)
    await db.query(sql2)
	return true
}
