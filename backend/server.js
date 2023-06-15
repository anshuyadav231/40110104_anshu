const express = require('express');
const axios = require('axios');
const { mergeArrays, removeDuplicates, sortNumbers } = require('./utils');

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  const urlList = Array.isArray(urls) ? urls : [urls];
  const result = [];
  const promises = [];

  for (const url of urlList) {
    promises.push(
      axios
        .get(url, { timeout: 500 })
        .then((response) => response.data.numbers)
        .catch(() => [])
    );
  }

  try {
    const responses = await Promise.all(promises);
    const mergedNumbers = mergeArrays(responses);
    const uniqueNumbers = removeDuplicates(mergedNumbers);
    const sortedNumbers = sortNumbers(uniqueNumbers);

    res.json({ numbers: sortedNumbers });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
