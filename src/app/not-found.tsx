import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className="bg-white">
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
          <h1 className="text-6xl">404</h1>
          <Link href="/">Back to home</Link>
        </div>
      </section>
    </main>
  );
}
