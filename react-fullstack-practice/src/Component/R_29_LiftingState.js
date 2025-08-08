export default function R_29_LiftingState() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Child1 count={count} setCount={setCount} />
            <Child2 count={count} />
        </>
    );
}

function Child1({ count, setCount }) {
    return <button onClick={() => setCount(count + 1)}>Click: {count}</button>;
}

function Child2({ count }) {
    return <p>Child2 also sees count: {count}</p>;
}
