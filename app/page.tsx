import { GetStaticProps, GetStaticPaths } from 'next'

interface Post {
  id: number;
  title: string;
  content: string;
}

interface BlogPageProps {
  post: Post | null;
}

const BlogPage = ({ post }: BlogPageProps) => {
  if (!post) {
    return <div>Post not found!</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { slug: 'matematik-ogrenme' } },
    { params: { slug: 'turev-giris' } }
    // Burada dinamik olarak slug verilerinizi alabilirsiniz.
  ]

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({ params }) => {
  const { slug } = params as { slug: string }

  // Burada veriyi slug ile çekin
  const post = {
    id: 1,
    title: 'Örnek Yazı',
    content: 'Bu bir örnek yazıdır.'
  }

  // Gerçek projelerde, burada slug ile veriyi fetch edebilirsiniz
  // const res = await fetch(`https://api.example.com/posts/${slug}`)
  // const data = await res.json()

  return {
    props: {
      post: post || null
    }
  }
}

export default BlogPage
