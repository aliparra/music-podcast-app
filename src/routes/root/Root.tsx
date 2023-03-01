import './root.css';
import '@/atoms/card/Card';
import { useState, useEffect } from 'react';
import Card from '@/atoms/card/Card';
import { useFetch } from '@/hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import SearchInput from '@/atoms/search-input/SearchInput';
import Counter from '@/atoms/counter/Counter';

function Root() {
  // The podcasts API url
  const url =
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

  // Use custom fetch hook
  const { data, isLoading, hasError } = useFetch(url);
  const [podcastList, setPodcastList] = useState([]);

  useEffect(() => {
    //Set the podcast list
    setPodcastList(data?.feed?.entry);
  }, [data]);

  // Use navigate react-router-dom hook
  const navigate = useNavigate();

  // A function to navigate to a specific podcast getting the podcast id
  const handleClick = (podcastData: any) => {
    localStorage.setItem('podcastData', JSON.stringify(podcastData));
    navigate(`/podcast/${podcastData?.id}`);
  };

  /*A function to compare the search input value with podcasts titles and authors
    Set a list of the podcast that matched the search input value. to podcastList
  */
  const handleFilterList = (searchTerm: string) => {
    const podcastArr = data?.feed.entry.map((podcast: object) => podcast);
    const result = podcastArr.filter(
      (podcast: any) =>
        podcast.title.label.toLowerCase().includes(searchTerm) ||
        podcast['im:artist'].label.toLowerCase().includes(searchTerm)
    );
    setPodcastList(result);
  };

  /**
   * We're mapping over the data we get from the iTunes API and returning a Card component for each
   * podcast
   * @returns A list of podcasts
   */
  const getPodcasts = () => {
    return podcastList?.map((entry: any) => {
      return (
        <div
          className={'root__podcast__card'}
          key={entry.id.attributes['im:id']}
          onClick={() =>
            handleClick({
              id: entry.id.attributes['im:id'],
              title: entry?.title?.label,
              author: entry['im:artist'].label,
              imageLabel: entry?.title?.label,
              imageUrl: entry['im:image'][2].label,
              description: entry?.summary?.label,
            })
          }
        >
          <Card
            image={{
              url: entry['im:image'][2].label,
              description: entry?.title?.label,
            }}
            title={entry?.title?.label}
            author={entry['im:artist'].label}
          />
        </div>
      );
    });
  };

  return (
    <div className="root">
      <div className="root__input-wrapper">
        <Counter count={podcastList ? podcastList.length : 0} />
        <SearchInput
          filterData={handleFilterList}
          placeholder="Filter podcasts..."
        />
      </div>
      <div className="root__podcast__wrapper">
        {isLoading ? (
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          getPodcasts()
        )}
      </div>
    </div>
  );
}

export default Root;
