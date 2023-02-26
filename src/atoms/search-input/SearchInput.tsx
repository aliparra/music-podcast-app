import React, { ReactElement, useState } from 'react';
import PropTypes from 'prop-types';
import { SearchInputProps } from '@/atoms/search-input/search-input.types';

const SearchInput = ({
	filterData,
	placeholder,
}: SearchInputProps): ReactElement => {
	const [searchTerm, setSearchTerm] = useState('');

	/**
	 * The handleChange function takes an event as an argument, and then sets the searchTerm state to the
	 * value of the event target, and then calls the filterData function (which will be executed on the parent) with the value of the event
	 * target.
	 * @param event - React.ChangeEvent<HTMLInputElement>
	 */
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		filterData(event.target.value);
	};

	return (
		<div>
			<input
				className="form-control p-2"
				type="text"
				placeholder={placeholder}
				value={searchTerm}
				onChange={handleChange}
			/>
		</div>
	);
};

SearchInput.defaultProps = {
	placeholder: 'search...',
};

SearchInput.propTypes = {
	placeholder: PropTypes.string,
	filterData: PropTypes.func.isRequired,
};

export default SearchInput;
