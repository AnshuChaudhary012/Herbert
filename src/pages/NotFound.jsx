import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center px-6 text-center">
      <div>
        <p className="text-sm text-orange-500">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-neutral-900">
          Page not found
        </h1>
        <Link to="/" className="mt-6 inline-block text-brand underline hover:text-orange-800 focus-visible:rounded-sm focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ink">
          Return home
        </Link>
      </div>
    </main>
  );
}
