import React, { useState } from 'react';
import axios from 'axios';
import '../Translator.css';
import trans from '../assests/images/trans.png';

const Translator = () => {
  const [originalText, setOriginalText] = useState('Hello World!');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('it'); // Italian in this example

  const translateText = async () => {
    const apiKey = '0e6f86d804msh4e2ada246eb4b98p1d8550jsna4f19e168737';
    const translationEndpoint = 'https://translated-mymemory---translation-memory.p.rapidapi.com/get';

    const params = {
      langpair: `en|${targetLanguage}`,
      q: originalText,
      mt: '1',
      onlyprivate: '0',
      de: 'a@b.c',
    };

    const headers = {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
    };

    try {
      const response = await axios.get(translationEndpoint, { params, headers });
      const translatedText = response.data.matches[0]?.translation || 'Translation not available';
      setTranslatedText(translatedText);
    } catch (error) {
      console.error('Translation error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='translate'>
      <div className="translator-container">
        <div className="image-container mt-5">
          <img src={trans} alt="translator" />
        </div>
        <div className="content-container mb-5 mt-5">
          <h1>Online Translator!</h1>
          <p className="mb-4">Heyy, struggling with language, no problem let's come and translate your language👩‍💻 </p>
          <div className="mb-3 d-flex">
            <div className="flex-grow-1 me-2">
              <label htmlFor="originalText">Original Text:</label>
              <input
                type="text"
                id="originalText"
                className="form-control"
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="targetLanguage">Target Language:</label>
              <input
                type="text"
                id="targetLanguage"
                className="form-control"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" onClick={translateText}>
              Translate
            </button>
          </div>
          <div>
            <h3>Translated Text:</h3>
            <p className="translated-text">{translatedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator;
