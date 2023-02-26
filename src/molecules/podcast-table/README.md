# music-podcast-app

## PodcastTable

- A table to show podcast link, date and duration.

### Example

```tsx
const fakeData = [
	{
		link: { label: 'linkName', url: '/' },
		date: '2023-02-04T08:30:00Z',
		duration: 8384000,
	},
	{
		link: { label: 'linkName', url: '/' },
		date: '2023-01-05T08:30:00Z',
		duration: 7384000,
	},
	{
		link: { label: 'linkName', url: '/' },
		date: '2023-04-06T08:30:00Z',
		duration: 6384000,
	},
	{
		link: { label: 'linkName', url: '/' },
		date: '2023-04-06T08:30:00Z',
		duration: 6384000,
	},
];

<PodcastTable data={fakeData} />;
```

## Author

With ❤️ by [Alicia Parra](https://github.com/aliparra)
