import { openDb } from "../config/dbConnect.js";

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS heroes (id INTEGER PRIMARY KEY, nome TEXT, planeta TEXT, poder TEXT)')
    })
}