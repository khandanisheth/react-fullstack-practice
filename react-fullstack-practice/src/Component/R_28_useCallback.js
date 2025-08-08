import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
});

export default function R_28_useCallback() {
  const [count, setCount] = useState(0);

  // ✅ Memoized function
  const handleClick = useCallback(() => {
    console.log("Child Clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <Child onClick={handleClick} />
    </div>
  );
}


// ✅ 🔰 Basic Definition (Simple Hindi):
// useCallback ek React hook hai jo kisi function ko yaad(memoize) rakhta hai, taaki wo har render ke time
// pe dobara banaya na jaye — jab tak uski dependencies(Refrence Change ) change nahi hoti.

// 🧠 Ek line me samjho:
// "useCallback kaam karta hai function ke saath, bilkul useMemo jaise — lekin function ko yaad rakhta hai."



// ✅ Summary — Why use useCallback?

// | Reason 📝                                                     | Benefit ✅                      |
// | ------------------------------------------------------------- | ------------------------------ |
// | Function ko baar-baar create hone se roke                     | Performance improve hoti hai   |
// | React.memo wale child ko unnecessary render se bachaye        | Component efficient banata hai |
// | Function reference same rakhta hai                            | `===` comparison pass hota hai |
// | Stable function dependency chahiye (e.g., useEffect, useMemo) | Avoid unwanted effects trigger |



// | Hook / Tool       | Definition (Simple Hindi + English)                                                                                                                  |
// | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
// | **`React.memo`**  | Ek **Higher Order Component (HOC)** hai jo functional component ko wrap karta hai. Agar props change nahi hue, to component **re-render nahi hota**. |
// | **`useMemo`**     | Ek hook hai jo **kisi value ya calculation ka result** ko yaad (memoize) rakhta hai, taaki wo baar-baar calculate na ho jab tak dependency na badle. |
// | **`useCallback`** | Ek hook hai jo **function ka reference** same rakhta hai jab tak dependency na change ho — taaki har render pe naya function create na ho.           |




// | Feature               | `React.memo` 🔄                     | `useMemo` 🔢                  | `useCallback` 🧠              |
// | --------------------- | ----------------------------------- | ----------------------------- | ----------------------------- |
// | **Type**              | Higher Order Component              | React Hook                    | React Hook                    |
// | **Memoizes**          | Complete Component                  | Return value (expensive calc) | Function  refrence memo                     |
// | **Primary Use**       | Avoid component re-render           | Avoid recalculation           | Avoid function recreation     |
// | **Common Use Case**   | Component with same props           | Sorting, filtering, math      | Props with function callbacks |
// | **Used On**           | Functional Component                | Return value                  | Function                      |
// | **Dependencies?**     | ❌ No (React shallow compares props) | ✅ Yes (`[dep1, dep2]`)        | ✅ Yes (`[dep1, dep2]`)        |
// | **Performance Boost** | On UI rendering                     | On heavy logic                | On reference comparison       |




// ✅ 🎓 Interview Style Explanation
// 🔹 React.memo
// "React.memo functional component ko wrap karta hai aur tab tak dobara render nahi karta jab tak uske props change na ho jayein. 
// Ye performance boost karta hai jab component bar-bar render ho raha ho bina props ke badle."

// 🔹 useMemo
// "useMemo ek hook hai jo kisi heavy ya expensive calculation (e.g., sorting, filtering, loops) ko memoize karta hai.
//  Jab tak dependency same hai, wo purana result hi return karta hai. Isse unnecessary calculation se bacha ja sakta hai."

// 🔹 useCallback
// "useCallback function ka reference same rakhta hai between renders. Agar hum kisi function ko prop ke through child component me bhejte hain,
//  to useCallback ka use karke unnecessary re-rendering roki ja sakti hai."

// ✅ Code Snippet Examples

// ✅ React.memo
// const MyComponent = React.memo(({ value }) => {
//   console.log("Rendered");
//   return <div>{value}</div>;
// });


// ✅ useMemo
// const sortedData = useMemo(() => {
//   return data.sort((a, b) => a - b);
// }, [data]);


// ✅ useCallback
// const handleClick = useCallback(() => {
//   console.log("Clicked");
// }, []);
// ✅ 



// Final Summary Table :

// | Tool          | Memoizes     | Re-renders Avoided     | Dependency Required | Best Use Case                    |
// | ------------- | ------------ | ---------------------- | ------------------- | -------------------------------- |
// | `React.memo`  | Component    | Yes (if props same)    | ❌ No                | When props do not change often   |
// | `useMemo`     | Return value | Yes (calc skipping)    | ✅ Yes               | Expensive calculations           |
// | `useCallback` | Function     | Indirectly (via props) | ✅ Yes               | Passing functions to child props |
