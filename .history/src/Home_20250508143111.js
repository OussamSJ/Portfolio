import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Random from "./Random";
import Navbar from "./Navbar";
import Footbar from "./Footbar";


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }


  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  })

  return (
    <div className="Home">
      <Navbar />


      <div className="couverture"> 
      <h3> Oussama SEYID JEBARI</h3>  
      <h3><span>Développeur Logicielle</span></h3> <br/>
      
      <div className="presentation">
      <div className="img-couverture"><img src="oussama_img.png"></img></div>
      <h1> Bienvenue sur <br/> mon Portfolio<br/></h1>  
      <button class="button">Voir mon CV</button>
      </div>
      </div>
      <BlogList blogs={blogs} title="tous les Blogs" handleDelete={handleDelete}/> <br/>
    
      <Footbar/>
    </div>
  );
}
 
export default Home;