import React, { useEffect, useState } from "react";
import { INews } from "../../interfaces/INews";


const API_KEY = '0845a50fee3c4f3184c8df3a09cd2e48';
const BASE_URL = `https://newsapi.org/v2/everything`;

interface IFetchProps {
    input: string,
    language: string,
    shouldFetch: number
}

const Fetch: React.FC<IFetchProps> = (props) => {
    const [news, setNews] = useState<null | INews>(null);

    useEffect(() => {
        fetch(`${BASE_URL}?q=${props.input || 'berlin'}&language=${props.language || 'de'}&apiKey=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setNews(data))
            .catch((err) => console.error('Fetching error', err));
    }, [props.shouldFetch]);

    return (  
        <section>
            {
                news?.articles && news.articles.map((article, index) => (
                    <div key={index}>
                        <h4>{article.title}</h4>
                        <img src={article.urlToImage === null ? 'https://placeholder.pics/svg/150x150/DEDEDE/555555/Image%20not%20found' : article.urlToImage} alt={article.title}/>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Zum Artikel</a>
                    </div>
                ))
            }
        </section>
    );
}

export default Fetch;