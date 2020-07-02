// import React from 'react';
// import { Form, Input, Button } from 'antd';

// import axios from 'axios';

// const FormItem = Form.Item;

// class CustomForm extends React.Component {

//     handleFormSubmit = (event, requestType, passID) => {
//         window.location.reload(true);
//         const title = event.title;
//         const url = event.url;
//         const username = event.username;
//         const password = event.password;
//         const notes = event.notes;

//         switch (requestType) {
//             case 'post':
//                 return axios.post('http://127.0.0.1:8000/lastpass_api/feed_clone/', {
//                     name_of_website: title,
//                     url_of_website: url,
//                     username_for_website: username,
//                     password_for_website: password,
//                     notes: notes

//                 })
//                     .then(res => console.log(res))
//                     .catch(error => console.error(error));

//             case 'put':
//                 return axios.put(`http://127.0.0.1:8000/lastpass_api/feed_clone/${passID}/`, {
//                     name_of_website: title,
//                     url_of_website: url,
//                     username_for_website: username,
//                     password_for_website: password,
//                     notes: notes
//                 })
//                     .then(res => console.log(res))
//                     .catch(error => console.log(error));
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Form onSubmit={(event) => this.handleFormSubmit(
//                     event,
//                     this.props.requestType,
//                     this.props.passID)}>
//                     <FormItem label="Name of the website" name="title">
//                         <Input placeholder="Enter name website " />
//                     </FormItem>
//                     <FormItem label="URL" name="url">
//                         <Input placeholder="Enter URL" />
//                     </FormItem>
//                     <FormItem label="Username" name="username">
//                         <Input placeholder="Enter username" />
//                     </FormItem>
//                     <FormItem label="Password" name="password">
//                         <Input placeholder="Enter password" />
//                     </FormItem>
//                     <FormItem label="Notes" name="notes">
//                         <Input placeholder="Enter Notes" />
//                     </FormItem>
//                     <FormItem>
//                         <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
//                     </FormItem>
//                 </Form>
//             </div>
//         );
//     }
// }

// export default CustomForm;

// //     {
// //         "id": 1,
// //         "ogUser": 3,
// //         "name_of_website": "Netflix",
// //         "url_of_website": "https://www.netflix.com/",
// //         "username_for_website": "shikamaru",
// //         "password_for_website": "test@1234",
// //         "notes": "The password is test@1234"
// //     },