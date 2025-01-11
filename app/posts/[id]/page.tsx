// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';
import type { Post } from '@/types/blog';

async function getPost(id: string) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    return null;
  }
}

async function getAuthor(userId: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    return null;
  }
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post: Post | null = await getPost(params.id);
  
  if (!post) {
    notFound();
  }

  const author = await getAuthor(post.userId);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
              {author ? (
                <p>Written by: {author.name}</p>
              ) : (
                <p>Author ID: {post.userId}</p>
              )}
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {post.body}
              </p>
            </div>

            <div className="mt-8 border-t dark:border-gray-700 pt-8">
              <a
                href="/"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                ← Back to all posts
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}