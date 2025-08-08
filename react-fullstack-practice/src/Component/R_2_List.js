function R_2_List() {
    const items = ['Apple', 'Banana', 'Cherry'];
    const users = [
        { id: 1, name: 'Geeks', age: 30 },
        { id: 2, name: 'for', age: 25 },
        { id: 3, name: 'Geeks', age: 20 },
    ];

    const handleClick = (age) => {
        alert(`You clicked on ${age}`);
    };

    const arr = items.map((value) => <li key={value}>{value}</li>);
    const arruser = users.map((value, index) => (
        <li key={index}>
            {value.id} {value.name} {value.age}
        </li>
    ));

    return (
        <div>
            <ul style={{ listStyleType: 'none' }}>
                {items.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>

            <ul>
                {users.map((val) => (
                    <li key={val.id} style={{ listStyle: 'none' }}>
                        {`${val.id} = ${val.name} = ${val.age}`}
                    </li>
                ))}
            </ul>

            <ul>{arr}</ul>
            <ul>{arruser}</ul>

            {/* Conditional Age Check */}
            <ul>
                {users.map((user) =>
                    user.age >= 30 ? (
                        <li key={user.id}>{user.name} is over 30 years old</li>
                    ) : (
                        <li key={user.id}>{user.name} is under 30 years old</li>
                    )
                )}
            </ul>

            {/* Click Event */}
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <button onClick={() => handleClick(user.age)}>Click</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default R_2_List;
