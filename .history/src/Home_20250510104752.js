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

      <div className="couverture flex items-center mt-10 justify-between bg-gradient-to-r text-white p-12 h-max w-max flex-wrap">


{/* Partie gauche */}

<div className="flex flex-col items-start space-y-4 max-w-md w-max h-max">
  <h3 className="text-xl text-white font-semibold">Oussama SEYID JEBARI</h3>
  <h3 className="text-lg text-white">Développeur Logiciel</h3>
  <div className="w-200 h-200 mt-4 ml-20">
    <img src="oussama_img.png" alt="photo de profil" className="rounded-lg object-cover w-full h-full" />
  </div>
</div>

{/* Partie droite */}
<div className="text-right max-w-md mt-10 md:mt-30">
  <h1 className="text-4xl text-white font-bold mb-6 leading-tight">
    Bienvenue sur <br /> mon Portfolio
  </h1>
  <button className="bg-white text-blue-700 font-bold py-2 px-6 rounded shadow hover:bg-gray-100 transition">
    Voir mon CV
  </button>
</div>

</div>

      <BlogList blogs={blogs} title="tous les Blogs" handleDelete={handleDelete}/> <br/>
    
      <Footbar/>
    </div>
  );
}
 
export default Home;