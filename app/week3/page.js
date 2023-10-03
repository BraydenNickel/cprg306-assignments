import ItemList from "./item-list"; 

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> Week 3
      <div>
        <h1 className="text-4xl font-bold m-6 text-center text-purple-300">My Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}