# music-podcast-app

## DescriptionCard

- A description card that displays an image (with url and description), a title an author and a description.

### Example

```tsx

//Basic example (Default image, no redirection)
<DescriptionCard
	title="Title example"
	author="Author name"
	description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dolor impedit vero laboriosam ipsa beatae ducimus nesciunt excepturi"
/>;

//Complete example
const redirectSomewhere = () => {
	console.log('redirect!)
};

<DescriptionCard
	image={{
		url: 'https://via.placeholder.com/150',
		description: 'Image description',
	}}
	title="Title example"
	author="Author name"
	description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dolor impedit vero laboriosam ipsa beatae ducimus nesciunt excepturi"
	handleRedirection={redirectSomewhere}
/>;
```

## Author

With ❤️ by [Alicia Parra](https://github.com/aliparra)
