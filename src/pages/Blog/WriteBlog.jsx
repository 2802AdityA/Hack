import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { useOutletContext } from 'react-router';
import { useNavigate } from 'react-router-dom';

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

    let navigate = useNavigate();

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

        navigate("/blog");
        window.location.reload();
    }

    return (
        // <div style={{margin:"200px auto",width:"200px"}}>
        //     <div>
        //         <label>Write your title</label>
        //         <br></br>
        //         <input type='text' placeholder='Enter title' onChange={handleTitleChange}></input>
        //     </div>
        //     <div>
        //         <label>Description</label>
        //         <br></br>
        //         <textarea placeholder='Enter description' onChange={handleContentChange}></textarea>
        //     </div>
        //     <button onClick={handleSubmit}>Write Post</button>
        // </div>
        <div class="mx-auto max-w-md rounded py-6 px-12" style={{margin:"200px auto",width:"50%",boxShadow:"inherit "}}> 
            <div>
                <label class="block font-medium text-3xl mb-1" style={{padding:"10px 30px"}}>Write your title</label>
                <input class="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" placeholder="Enter title" onChange={handleTitleChange} style={{padding:"10px 30px"}}/>
            </div>
            <div>
                <label class="block font-medium text-3xl mb-8" style={{padding:"10px 30px"}}>Description</label>
                <textarea class="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter description" onChange={handleContentChange} style={{padding:"10px 30px"}}></textarea>
            </div>
            <button class="w-full px-4 py-2 font-medium mt-4 " onClick={handleSubmit} style={{height:"50px",width:"300px",backgroundColor:"#9a1750",color:"white",borderRadius:"10px"}}>Write Post</button>
        </div>

    )
}

export default WriteBlog;