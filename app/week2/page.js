import StudentInfo from "../StudentInfo";
import Link from "next/link";
export default function Week2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>My Shopping List</h1>
        <StudentInfo />
        <Link href="https://github.com/BraydenNickel">
          Brayden Nickel GitHub
        </Link>
      </div>
    </main>
  );
}