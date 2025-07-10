import Link from 'next/link';

export default async function NotFound() {
  return (
    <div>
      <title>Not Found</title>
      <h1 className="h2">Not Found</h1>
      <p className="mt-4">
        <Link className="text-blue500" href="/" />
      </p>
    </div>
  );
}
