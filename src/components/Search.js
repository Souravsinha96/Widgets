import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    //creating if statement so that there is no initial delay in the first render
    // if (term && !results.length) {
    //   search();
    // } else {
    //   const timeoutId = setTimeout(() => {
    //     if (term) {
    //       search();
    //     }
    //   }, 1000);
    //   //clean up function
    //   return () => {
    //     clearTimeout(timeoutId);
    //   };
    // }
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} style={{ padding: "10px" }} className="item">
        <div className="right floated content">
          <a
            //below is the method to go to specific page in wikipedia(use page id as query parameter
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui positive button"
            target="_blank"
            rel="noreferrer"
          >
            Go {""}
            <i className="external square alternate icon"></i>
          </a>
        </div>
        <div className="content">
          <div className="ui header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>
              <h4>Enter Search Term</h4>
            </label>
            <input
              onChange={(e) => setTerm(e.target.value)}
              type="text"
              placeholder="Enter a keyword"
              value={term}
            />
          </div>
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </div>
  );
};

export default Search;
