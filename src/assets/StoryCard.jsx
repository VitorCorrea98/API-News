import PropTypes from 'prop-types';

const StoryCard = ({ stories }) => {
  return (
    <ul className="flex flex-col px-40 py-12 text-center justify-center">
      {stories.map((story) => (
        <li
          key={story.url}
          className="flex flex-col border p-4 gap-12  xl:flex-row "
        >
          <div className="flex flex-col w-full h-min self-center gap-1">
            <a
              href={story.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col text-left  gap-1"
            >
              <img
                src={story.multimedia[1].url}
                alt={story.multimedia[1].caption}
                className=""
              />
              <span className="text-left text-xs">
                {story.multimedia[1].copyright
                  ? story.multimedia[1].copyright
                  : 'No copyright'}
              </span>
            </a>
          </div>
          <div className="flex flex-col items-center self-center gap-12 w-full h-full transition-colors duration-200 delay-200 hover:text-slate-500">
            <div>
              <span className=" text-left text-xs">{story.byline}</span>
              <h2 className="text-3xl">{story.title}</h2>
            </div>
            <p className="text-xl">{story.abstract}</p>
            <a
              href={story.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 border"
            >
              Read more
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

StoryCard.propTypes = {
  stories: PropTypes.array.isRequired,
  story: PropTypes.object.isRequired,
};

export default StoryCard;
