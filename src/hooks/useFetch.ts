import { useEffect, useState } from 'react';

//Declare types
type FetchTypes = {
	data: any;
	isLoading: boolean;
	hasError: null | boolean;
};

// Declare custom hook
export const useFetch = (url: string) => {
	const [state, setState] = useState<FetchTypes>({
		data: null,
		isLoading: true,
		hasError: null,
	});

	//FUNCTIONS

	/** -------------------------------------
	 * 1. Generate an expiration date based on ttl (in milliseconds)
	 * @returns a number
	 */
	const getExpirationDate = (ttl: number = 86400000) => {
		const now = new Date().getTime();
		const expirationDate = now + ttl;
		return expirationDate;
	};

	/**-------------------------------------
	 * 2. Check if cache is expired
	 * @returns A boolean value.
	 */
	const isCacheExpired = (expirationDate: number) => {
		const currentDate = new Date().getTime();
		return expirationDate < currentDate;
	};

	/**-------------------------------------
	 * 3. Do api call and set the response in cache and hook state
	 * @returns void
	 */
	const callToApi = async (cache: Cache, expirationDate: number) => {
		// --api call --
		const response = await fetch(url);
		const data = await response.json();

		// --store response in cache --
		cache.put(
			url,
			new Response(JSON.stringify({ data: data, expirationDate }))
		);

		// --set response in hook state --
		setState({
			data,
			isLoading: false,
			hasError: null,
		});
	};

	/** -------------------------------------
	 * 4. Get data (From cache or from the API) and set to data hook state
	 * @returns void
	 */

	const getData = async () => {
		// ---Before having data, set isLoading to true---
		setState({
			...state,
			isLoading: true,
		});

		try {
			// ---Opens the cache---
			const cache = await caches.open('api-cache');

			// ---Create cache expiration date---
			const expirationDate = getExpirationDate();

			// ---Check if the response is cached---
			const cachedResponse = await cache.match(url);

			if (cachedResponse) {
				const cachedData = await cachedResponse.json();

				if (isCacheExpired(cachedData.expirationDate)) {
					//--- cache time expired ---
					await cache.delete(url);
					callToApi(cache, expirationDate);
				} else {
					//--- cached time not expired ---
					setState({
						data: cachedData.data,
						isLoading: false,
						hasError: null,
					});
				}
			} else {
				//--- Response is not cached, call the api ---
				callToApi(cache, expirationDate);
			}
		} catch (error) {
			// ---Error handling---
			console.log(error);
			setState({
				...state,
				isLoading: false,
				hasError: true,
			});
		}
	};

	useEffect(() => {
		getData();
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
