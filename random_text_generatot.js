async function fetchRandomLoremIpsum(paragraphs = 1) {
  try {
    const response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.join('\n\n'); // Join paragraphs with double newlines
  } catch (error) {
    console.error("Error fetching random text:", error);
    return "Failed to generate random text.";
  }
}

// Example usage:
fetchRandomLoremIpsum(2).then(text => {
  console.log(text);
});