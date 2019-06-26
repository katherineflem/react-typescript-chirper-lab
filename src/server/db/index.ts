//index will export all tables
import * as mysql from 'mysql'
import Chirpsdb from './chirpsdb'
//import table
//create a connection to db
//create  connection exists on mysql and returns an object
export const Connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "chirprapp",
    password: "dbfun",
    database: "chirpr"
});
//helper function making queries to the database:
//the query can take in a string and/or values which can be an array of strings or numbers
export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        //call the database:
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        })

    })
}
//export all tables:
export default {
    Chirpsdb
}