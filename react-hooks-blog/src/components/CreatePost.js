import { useState } from "react";
import { db } from './../firebase.js' ;
import { useFormInput } from './../hooks.js';
import { addDoc, collection } from "firebase/firestore"; 

function CreatePost() {
    const title = useFormInput('') ;
    const subTitle = useFormInput('') ;
    const content = useFormInput('') ;

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('title', title);
        console.log('subTitle', subTitle);
        console.log('content', content);

        try {
            const docRef = await addDoc(collection(db, "posts"), {
              title: title.value,
              subTitle: subTitle.value,
              content: content.value,

            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return(
        <div className="create-post">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input {...title} />
                </div>
                <div className="form-field">
                    <label>Sub Title</label>
                    <input {...subTitle} />
                </div>
                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content}></textarea>
                </div>

                <button className="create-post-btn">Create Post</button>
                
            </form>
        </div>

    );
}

export default CreatePost;