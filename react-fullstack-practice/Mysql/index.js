import mysql from 'mysql2/promise';

const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6375',
    database: "reactdata"
});

console.log("✅ MySQL Connected Successfully");

// Show all databases
// const [databases] = await conn.execute("SHOW DATABASES");
// console.log("📂 Databases:", databases);

// Create table (if not exists)
// await conn.execute(`
//   CREATE TABLE IF NOT EXISTS react_tb (
//     id INT NOT NULL AUTO_INCREMENT,
//     name VARCHAR(45) NOT NULL,
//     email VARCHAR(45) NOT NULL,
//     num VARCHAR(13) NOT NULL,
//     PRIMARY KEY (id)
//   )
// `);
// console.log("🧱 Table 'react_tb' created (if not exists)");

//! Insert data
// await conn.execute("INSERT INTO react_tb (name, email, num) VALUES ('dk', 'dek@g.c', '8920')");
// console.log("📥 Data inserted into 'react_tb'");





// prepeared statement
await conn.execute("INSERT INTO react_tb (name, email, num) VALUES(?,?,?)", ["at", "at", "85"]);
console.log("📥 Data inserted into 'react_tb'");


const data = [
    ["Ali", "ali@example.com", "1234567890"],
    ["Ravi", "ravi@example.com", "9876543210"],
    ["Danish", "danish@example.com", "5551234567"]
];


await conn.query(
    "INSERT INTO react_tb (name, email, num) VALUES ?",
    [data]
);

console.log("📥 Multiple rows inserted successfully.");



// FAtch fatach data 
const [row] = await conn.execute(`select * from react_tb`);

console.log(row)

const [rows, fields] = await conn.execute(`select * from react_tb`);

console.log("Actual data => ", rows);   // Actual data
console.log(" Columns/fields info =>", fields); // Columns/fields info



// delete 

await conn.execute("delete from react_tb where id = 8<10");
await conn.end();



