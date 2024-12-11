interface ISearchProps {
    input: string,
    language: string,
    shouldFetch: number,
    setInput: React.Dispatch<React.SetStateAction<string>>,
    setLanguage: React.Dispatch<React.SetStateAction<string>>
    setShouldFetch: React.Dispatch<React.SetStateAction<number>>
}

const Search: React.FC<ISearchProps> = (props) => {

    return (  
        <section className="search">
            <input onChange={(e) => props.setInput(e.target.value)} type="text" placeholder="type to search"/>
            <select onChange={(e) => props.setLanguage(e.target.value)} className="language">
                <option value="">Select your language</option>
                <option value="ar">Arabic</option>
                <option value="de">German</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="he">Hebrew</option>
                <option value="it">Italian</option>
                <option value="nl">Dutch</option>
                <option value="no">Norwegian</option>
                <option value="pt">Portuguese</option>
                <option value="ru">Russian</option>
                <option value="sv">Swedish</option>
                <option value="ud">Urdu</option>
                <option value="zh">Chinese (Mandarin)</option>
            </select>
            <button onClick={() => props.setShouldFetch(props.shouldFetch + 1)}>Search</button>
        </section>
    );
}

export default Search;