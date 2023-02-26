import { CustomLink } from '@/atoms/custom-link/CustomLink';
import { formatDate, milisecondsToMinutes } from '@/utils/formats';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { PodcastTableProps } from './podcast-table.types';
import '@/molecules/podcast-table/podcast-table.css';

const PodcastTable = ({ data }: PodcastTableProps): ReactElement => {
	const getRows = data.map((episode, i) => {
		return (
			<tr key={i}>
				<td>
					<CustomLink link={episode.link.url}>{episode.link.label}</CustomLink>
				</td>
				<td>{formatDate(episode.date)}</td>
				<td>{milisecondsToMinutes(episode.duration)}</td>
			</tr>
		);
	});

	return (
		<div>
			<table className="podcast-table">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Date</th>
						<th scope="col">Duration</th>
					</tr>
				</thead>
				<tbody>{getRows}</tbody>
			</table>
		</div>
	);
};

PodcastTable.propTypes = {
	data: PropTypes.array,
};

export default PodcastTable;
