import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState('programming');
    const [results, setResults] = useState([]);

    // second argument:
    // [] - Runs at initial render only
    // nothing - Runs at initial render + Runs after each rerender
    // [data] - Run at initial render + Runs after every rerender if 
    //          data has changed since the last render
    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedTerm(term), 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                });
            setResults(data.query.search);
        };
        if (debouncedTerm) {
            search();
        }
    }, [debouncedTerm]);

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                        rel="noreferrer">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
                </div>
            </div >
        );
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        className="input"
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
}

export default Search;