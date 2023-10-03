export default function EventCard({ name, quantity, category }) {
    return (
        <div className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2">
            <h2 className="text-xl font-bold"> {name}</h2>
            <p>{quantity}</p>
            <p>{category}</p>
        </div>
    );
}