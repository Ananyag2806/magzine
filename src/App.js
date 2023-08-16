import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

function App() {
	const [result, setResult] = useState('');

	useEffect(() => {
		const openai = new OpenAIApi(
			new Configuration({
				apiKey: process.env.REACT_APP_API_KEY,
			})
		);

		openai
			.createChatCompletion({
				model: 'gpt-3.5-turbo',
				messages: [
					{
						role: 'user',
						content: 'Hello ChatGpt',
					},
				],
			})
			.then((res) => {
				console.log(res.data.choices[0].message.content);
				setResult(res.data.choices[0].message.content);
			});
	}, []);
	return <div className='App'>{result}</div>;
}

export default App;
