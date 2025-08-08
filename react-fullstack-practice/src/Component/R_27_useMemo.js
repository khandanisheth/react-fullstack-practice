import React, { useState, useMemo } from 'react';

// // ❌ Non-optimized component
// function WithoutMemo() {
//   console.log("⛔ WithoutMemo rendered");

//   // Slow calculation (every time)
//   let total = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     total += i;
//   }

//   return <p>Without Memo Total: {total}</p>;
// }

// ✅ Optimized component using useMemo
function WithMemo() {
  console.log("✅ WithMemo rendered");

  const total = useMemo(() => {
    console.log("🧮 Calculating with memo...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return <p>With Memo Total: {total}</p>;
}

export default function R_27_useMemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1>useMemo Performance Comparison</h1>

      <button onClick={() => setCount(count + 1)}>
        Click Me! Count: {count}
      </button>

      <hr />
      {/* <WithoutMemo /> */}
      <hr />
      <WithMemo />
    </div>
  );
}



// ✅ 🔰 Basic Definition (Simple Hindi):
// useMemo ek React Hook hai jo kisi heavy (expensive) calculation ka result yaad (memoize) rakhta hai.
// Agar dependency same ho, to React usko dobara calculate nahi karta — pehle wala result hi use karta hai.

// React.Memo
// 📘 Interview Me Aise Bol Sakte Ho:
// "React.memo ek higher order component hai jo functional component ke around ek wrapper banata hai.
// Ye props ke changes ko compare karta hai. Agar props me koi change nahi hai, to wo component ko dobara
// render nahi karta — isse performance improve hoti hai."


// | 🔧 Hook/Tool | 📋 Kya karta hai                                                                                   |
// | ------------ | -------------------------------------------------------------------------------------------------- |
// | `useMemo`    | **Kisi value (return of function)** ko memoize karta hai — taaki wo baar-baar calculate na ho.     |
// | `React.memo` | **Pura component** ko memoize karta hai — agar props change nahi hue to dobara render nahi karega. |




// ✅ Comparison Table:
// | Feature                      | `useMemo`                           | `React.memo`                          |
// | ---------------------------- | ----------------------------------- | ------------------------------------- |
// | Kya memoize karta hai?       | Return value of a function          | Entire functional component           |
// | Kis level pe kaam karta hai? | Variable/function ke result level   | Component level                       |
// | Dependency chahiye?          | ✅ Haan (array)                      | ❌ Nahi (React khud compare karta hai) |
// | Use case                     | Heavy calculation (e.g., sort, sum) | Prevent re-render when props same     |
// | Syntax type                  | Hook (function ke andar)            | HOC (component ke around wrap)        |
// | Can be used together?        | ✅ Haan                              | ✅ Haan                                |



// useMemo =>    this are return of function Value 
// React.memo =>  this is a return Components props change hone par re-render hotha he 
// useCallback =>  this is a return Function reference ko sam rakta refrence change ho ne
//  par re -render hotha he 