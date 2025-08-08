import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());
const fruits = [
  { id: 1, fname: 'mango', city: 'jaipur1' },
  { id: 2, fname: 'banana', city: 'jaipur2' },
  { id: 3, fname: 'ice-cream', city: 'jaipur3' }
];

// console.log(fruits[0].city);

app.get("/show", (req, res) => {
  res.json({ fruits });
});
// let fid = 4;
// app.post("/insert", (req, res) => {
//   const { fname, city } = req.body;
//   if (!fname || !city) {
//     console.log("Both fields are required!");
//     return;
//   }
//   const newFruit = { id: fid++, fname, city };
//   fruits.push(newFruit);
//   res.json({ fruits });
// });


app.post("/insert", (req, res) => {
  const { fname, city } = req.body;
  if (!fname || !city) {
    return res.status(400).json({ message: "Both fields are required!" });
  }

  // ✅ Step 1: Get list of used IDs
  const usedIds = fruits.map(f => f.id);

  // ✅ Step 2: Find lowest unused ID
  let newId = 1;
  while (usedIds.includes(newId)) {
    newId++;
  }

  // ✅ Step 3: Create and push new fruit
  const newFruit = { id: newId, fname, city };
  fruits.push(newFruit);

  res.json({ fruits });
});



// Array se element hata bhi sakta hai aur add bhi (original array ko modify karta hai)
// Syntax: array.splice(start, deleteCount, item1, item2,...)

app.delete("/delete/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let index = fruits.findIndex(f => id === f.id);
  if (index === -1) console.log("Item not found and Not Valid Of id ");
  const deleted = fruits.splice(index, 1);
  res.json({ fruits });
})
app.put("/update/:id", (req, res) => {
  const { fname, city } = req.body;
  let id = parseInt(req.params.id);
  let index = fruits.findIndex(f => id === f.id);
  if (index === -1) console.log("Item not found and Not Valid Of id ")
  else {
    fruits[index].fname = fname;
    fruits[index].city = city;
  }
  res.json({ fruits });
});
// Start server
app.listen(3001, () => {
  console.log("✅ Server is running on http://localhost:3001");
});
