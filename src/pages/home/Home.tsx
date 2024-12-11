import { useState } from "react";
import Fetch from "../../components/fetch/Fetch";
import Search from "../../components/search/Search";

const Home = () => {
    const [input, setInput] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [shouldFetch, setShouldFetch] = useState<number>(0);

    return (  
        <div className="home__page">
            <h1>Breaking News</h1>
            <Search input={input} setInput={setInput} language={language} setLanguage={setLanguage} shouldFetch={shouldFetch} setShouldFetch={setShouldFetch} />
            <Fetch input={input} language={language} shouldFetch={shouldFetch}/>
        </div>
    );
}

export default Home;