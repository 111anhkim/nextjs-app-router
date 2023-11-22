
interface IArticle {
  _id?: string;
  title: string;
  keyword: string;
  description: string;
  content: string;
  date: string;
}


const fetchArticleDetail = async (id: string)=>{
  const res =  await fetch(`http://localhost:8080/api/v1/articles/${id}`);
  return res.json();
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const articleDetail = await fetchArticleDetail(params.id);
  return {
    title: articleDetail?.data.title,
  }
}



export default async function Page({ params }: { params: { id: string } }) {
  const articleDetail = await fetchArticleDetail(params.id);
 
  return (
    <>
      <h1 className='text-3xl font-bold'>{articleDetail?.data.title}</h1>
      <div>
        {articleDetail?.data.content}
      </div>
      <br></br>
      <strong>{articleDetail?.data.date}</strong>
    </>

  )
}

export async function generateStaticParams() {
  const articles = await fetch('http://localhost:8080/api/v1/articles').then((res) => res.json())
  
  const shortArticles = articles?.data.slice(0,2);

  return shortArticles.map((article : IArticle) => ({
    id: article._id,
  }))
}