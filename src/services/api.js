import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		// Authorization:
		// 	'Bearer BQC9Z3Gif-xUDA7IqEUcDKX9AV958bVGly3RltYTnqCIyAQN7ZnZzfrWk_FdbafF9EckYw5WtZ7JHL4W2wDLj-Fae7J9bUQAw7U8xPjB3_d2KlDHC-LpSQ1kA9K8b1Eec5ZEZY7WtBGyFv1S3DQNJ6u5QMd--OBDyLbpPISSTZMvZN1DrwFbWTA'
		Authorization:
			localStorage.getItem('@SpotiFood:type') +
			' ' +
			localStorage.getItem('@SpotiFood:token')
	}
});

export default api;
