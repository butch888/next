import Link from "next/link";

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function Home() {
  const posts = await fetchData();
  return (
    <div>
      <h1>Main page</h1>
      <div>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>
              {post.title}
            </h3>
            {/* <p>
              {post.body}
            </p> */}
            <Link href={'/post/' + post.id}>More...</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
