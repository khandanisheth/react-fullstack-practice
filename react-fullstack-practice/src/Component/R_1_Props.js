// Prop naam ka component banaya gaya hai jo props receive karta hai
function R_1_Props({ name, email, objst, children }) {
  return (
    <div>
      {/* Name aur objst ka name print kar rahe hain */}
      <h3>{name}{objst.name}</h3>

      {/* Email address print kar rahe hain */}
      <p>{email}</p>

      {/* Jo bhi children pass hue the unko render kar rahe hain */}
      {children}

      {/* Ek static text print kar rahe hain */}
      <p>kljkjklml</p>
    </div>
  );
}

// Prop component ko export kar rahe hain
export default R_1_Props;
