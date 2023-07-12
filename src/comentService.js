export const getComments = async () => {
    const response = await fetch('https://www.reddit.com');
    const data = await response.json();
    return data;
  };
  