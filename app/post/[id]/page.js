import Link from "next/link";

export async function generateMetadata({params, searchParams}) {
  const post = await fetchData(params.id);
  return {
    title: 'Post ' + params.id,
    description: post.body
  }
}

async function fetchData(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const result = await res.json();
  return result;
}

const PagePost = async ({params: {id}}) => {
  const post = await fetchData(id);
  
  return (
    <div>
      <Link href='/'>Назад</Link>
     <h3>{post.title}</h3>
     <p>{post.body}</p>
     <strong>Autor ID: {post.userId}</strong>
    </div>
  )
}

export default PagePost;
