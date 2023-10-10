import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-indigo-950"> Week 4
      <div>
        <h1 className="text-4xl font-bold m-6 text-center text-purple-300">My Shopping List</h1>
        <NewItem />
      </div>
    </main>
  );
}