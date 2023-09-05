import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shortenUrl = async () => {
    try {
      const response = await axios.post('/shorten', { longUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter a long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <button onClick={shortenUrl}>Shorten</button>
      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
}

export default App;
