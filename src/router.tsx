import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Root from './routes/root/Root';
import PodcastPage from '@/routes/podcast-page/PodcastPage';
import EpisodePage from '@/routes/episode-page/EpisodePage';
import NavBar from '@/molecules/nav-bar/NavBar';

const NavbarWrapper = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};

// Define application routes and it's page components
export const router = createBrowserRouter([
	{
		path: '/',
		element: <NavbarWrapper />,
		children: [
			{
				path: '/',
				element: <Root />,
			},
			{
				path: '/podcast/:podcastId',
				element: <PodcastPage />,
			},
			{
				path: '/podcast/:podcastId/episode/:episodeId',
				element: <EpisodePage />,
			},
		],
	},
]);
