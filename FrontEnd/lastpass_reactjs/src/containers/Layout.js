//React & Redux imports
import React, { Component } from 'react';
import axios from 'axios'
class Layout extends Component {
    render() {
        console.log("WE re here")
        //here I will test the fetch function on django framework
        // const data = { username: 'example' };

        // fetch('http://127.0.0.1:8000/lastpass_api/feed_clone/', {
        //     method: 'GET', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Token 5b01d4b70a5f82081ba49ce3ed1b6168d8bf1052`
        //     }
        //     //body: {}, /*JSON.stringify(data)*/
        // })
        //     .then(response => {
        //         console.log(response.json())
        //         if (response.ok) {
        //             console.log("The response", response);
        //         } else {
        //             var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //             error.response = response;
        //             throw error;
        //         }
        //     },
        //         error => {
        //             var errmess = new Error(error.message);
        //             throw errmess;
        //         })
        //     .then(response => {

        //         console.log("JSONIFED ", response.body())
        //     })
        //     .then(data => {
        //         console.log('Success:', data)
        //     })
        //     .catch(error => console.log(error.message));


        //Async/await methodology
        let getData = async () => {
            await axios.get('http://127.0.0.1:8000/lastpass_api/feed_clone/', {
                // method: 'GET', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token 5b01d4b70a5f82081ba49ce3ed1b6168d8bf1052`
                }
            })
                .then(response => {
                    // let data = response.data

                    console.log(response)
                    console.log("The data:", response.data)
                })
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        getData()
        return (
            <React.Fragment>

                <h2>I works</h2>

            </React.Fragment>
        );
    }
}
export default Layout;
