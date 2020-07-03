//here I will test the fetch function on django framework
import axios from 'axios'
const data = { username: 'example' };

axios.get('http://127.0.0.1:8000/lastpass_api/feed_clone/', {
    // method: 'GET', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token 5b01d4b70a5f82081ba49ce3ed1b6168d8bf1052`
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });