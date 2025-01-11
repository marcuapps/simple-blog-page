// app/posts/[id]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Post Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}