// todo: authentication and limitations

function AllData(){
	const [data, setData] = React.useState('');

	React.useEffect(() => {
		//fetch accounts from API
		fetch('/accounts/all')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setData(JSON.stringify(data));
			});
	}, []);

	return (
		<>
			<h5>All Data in Store:</h5>
			{data}
		</>
	);
}
