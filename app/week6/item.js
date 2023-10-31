export default function Items ({ items }) {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.quantity}</p>
                    <p>{item.category}</p>
                </div>
            ))}
        </div>
    )
}