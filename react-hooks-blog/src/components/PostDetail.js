import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from '../firebase';
import {doc, getDoc} from 'firebase/firestore'

function PostDeatil() {

    const [post, setPost] = useState({});
    const {postId} = useParams();

    useEffect(() => {
        const getAllData = async () => {
            const docRef = doc(db, "posts", postId);
            const docSnap = await getDoc(docRef);

            setPost(docSnap.data());
          }
          getAllData();
    }, [])

    return(
        <div className="post-detail">
            <h1>{post.title}</h1>
            <h3>{post.subTitle}</h3>
            <p>{post.content}</p>

        </div>
    ); 
}

export default PostDeatil;