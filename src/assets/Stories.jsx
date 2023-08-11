import { useState, useEffect } from 'react';
import StoryCard from './StoryCard';
import fetchStories from './FetchStoreis';
import Loading from '../Components/Loading';
import PropTypes from 'prop-types';

const Stories = ({ category }) => {
  const [stories, setStories] = useState([]);
  const [section, setSection] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const Timeout = (time) => setTimeout(() => setIsLoading(false), time);

  const filterText = (stories) =>
    stories.filter((element) => element.title && element.abstract);

  useEffect(() => {
    const getStories = async () => {
      setIsLoading(true);
      try {
        const response = await fetchStories({ category });
        const filtered = filterText(response.data.results).splice(0, 10);
        setSection(response.data);
        setStories(filtered);
        Timeout(2000);
      } catch (error) {
        console.log(error.message);
      }
    };
    getStories();
  }, [category]);

  return (
    <main className="mt-12 text-white">
      {isLoading ? (
        <Loading category={category} />
      ) : (
        <>
          <h1 className="text-center">{section.section}</h1>
          <StoryCard stories={stories} />
        </>
      )}
    </main>
  );
};

Stories.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Stories;
