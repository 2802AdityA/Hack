import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { useOutletContext } from 'react-router';


// mutation to insert blog
const INSERT_BLOG = gql`
mutation insertBlog($title: String!, $date: String!, $content: String!, $authorName: String!){
    insert_document_one(object: {title: $title, date: $date, content: $content, author_name: $authorName}){
        title
        date
        content
        author_name
    }
  }
`;


const WriteBlog = () => {

    const { user } = useOutletContext();

    // set date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = day + "-" + month + "-" + year;


    // set title and content and author
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const authorFName = user?.metadata?.firstName;
    const authorLName = user?.metadata?.lastName;

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    // mutation to insert blog
    const [insertBlog] = useMutation(INSERT_BLOG);

    const handleSubmit = (e) => {
        e.preventDefault();
        insertBlog({
            variables: {
                title: title,
                date: currentDate,
                content: content,
                authorName: authorFName + " " + authorLName
            }
        })
    }

    return (
        <div>
            <div>
                <label>Write your title</label>
                <br></br>
                <input type='text' placeholder='Enter title' onChange={handleTitleChange}></input>
            </div>
            <div>
                <label>Description</label>
                <br></br>
                <textarea placeholder='Enter description' onChange={handleContentChange}></textarea>
            </div>
            <button onClick={handleSubmit}>Write Post</button>
        </div>
    )
}

export default WriteBlog;