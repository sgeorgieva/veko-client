import { PostsProvider } from "@/app/contexts/PostsContext";
import dynamic from "next/dynamic";
import Loader from "../../components/Loader";
import { i18n } from "@/i18n.config"; // Uncomment if needed

const Post = dynamic(() => import("../PostContent/page"), {
  ssr: false,
  loading: () => <Loader />,
});

export async function generateStaticParams() {
  // Fetch posts dynamically, or define them statically as needed
  const posts = await fetchPosts(); // Implement this function to fetch your posts
  return posts.flatMap((post) =>
    i18n.locales.map((locale) => ({
      id: post.id.toString(),
      lang: locale,
    }))
  );
}

// Default export for the page component
export default function PostPage({ params }) {
  return (
    <PostsProvider>
      <Post params={params} /> {/* Pass params if needed */}
    </PostsProvider>
  );
}

// You may need to implement a function to fetch posts if you haven't already
async function fetchPosts() {
  return [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    // ... more posts
  ];
}
