import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './../firebase';
import { collection, getDocs } from "firebase/firestore";


function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const getAllData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      // const data = [];
      // console.log('querySnapshot', querySnapshot);
      const posts = querySnapshot.docs.map((doc) => {
        // data.push(doc.data());
        return {
          id: doc.id,
          ...doc.data(),
        }
    });
    console.log(posts);
    setPosts(posts);

    }
    getAllData();
    

  }, []);


  return (
    <div className="home">
      <h1 style={styles.heading}>Tech Blog</h1>
      <div id='blog-by'>Kanna</div>

      {posts.map((post, index) => (
            <div className='post' key={`post-${index}`}>
              <Link to={`/post/${post.id}`}>
                <h3>{post.subTitle}</h3>
              </Link>

              <p>{post.subTitle}</p>
            </div>
          ))}
    </div>

  );
}

export default Home;

const styles = {
  heading: {
    marginTop: 30,
    fontSize: 56,

  }
}