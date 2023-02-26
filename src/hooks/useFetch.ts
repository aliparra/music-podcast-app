import { useEffect, useState } from 'react';

type FetchTypes = {
	data: any;
	isLoading: boolean;
	hasError: null | boolean;
};

export const useFetch = (url: string) => {
	const [state, setState] = useState<FetchTypes>({
		data: null,
		isLoading: true,
		hasError: null,
	});

	// An async function that calls the api to obtain data
	const getFetch = async () => {
		setState({
			...state,
			isLoading: true,
		});

		try {
			const response = await fetch(url);
			const data = await response.json();
			setState({
				data,
				isLoading: false,
				hasError: null,
			});
		} catch (error) {
			console.log(error);
			setState({
				...state,
				isLoading: false,
				hasError: true,
			});
		}
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
