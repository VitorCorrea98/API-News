import axios from 'axios';

const fetchStories = async ({ category }) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=zrmJnOrGiS2q7iCkvFBxzfA7I1sISSx3`
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export default fetchStories;
