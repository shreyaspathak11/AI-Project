import { useState } from 'react';
import axios from 'axios';

function SearchAndSummary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [summary, getSummary] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: searchTerm,
        length: '3'
      },
      headers: {
        'X-RapidAPI-Key': '09b452bdf9msha2b0e2c364f30f8p1fd296jsn142bf2d30b09',
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      getSummary(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter article URL"
        />
        <button type="submit">Summarize</button>
      </form>

     { console.log(summary.summary)}

      {summary && (
        <div>
          <h2>Article Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default SearchAndSummary;
