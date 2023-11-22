
import { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Articles Page',
}

interface IArticle {
  _id?: string;
  title: string;
  keyword: string;
  description: string;
  content: string;
  date: string;
}

const fetchArticles = async ()=>{
  const res =  await fetch('http://localhost:8080/api/v1/articles',
  { next: { revalidate: 30 } }); 
  return res.json();
}


export default async function Page() {
  const articles = await fetchArticles();
  return (
    <>
      <h1><strong>ARTICLES INFO</strong></h1>
      <ul>
        {
          articles?.data.map((article: IArticle)=>{
            return <li key={article._id}>
             <Link href={`articles/${article._id}`}>
              <span><strong>{article.title}</strong></span>
              <br></br>
              <span>{article.content}</span>
              </Link>
            </li>
          })
        }
      </ul>

    </>
  )
}

