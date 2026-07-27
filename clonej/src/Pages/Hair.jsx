import { Link } from "react-router-dom";

const categories = [
  {
    id: "maang ",
    name: "Maang Tikka ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirV_xN-BrrQTYkM5xTHFFWsjvSIuAW3u4Ln-Lp0Tzew&s=10",
  },
  {
    id: "matha",
    name: "Matha Patti",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtO5-zXettq9g48JFw0Kmiy82TJhLBpYdMYX9QHEWyw&s=10",
  },
  {
    id: "judda",
    name: "Judda Pins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRje4sG5DrcbC_M-Vydk9PH5NXOIOLPJwSOXGom3SGpw&s=10",
  },
  {
    id: "Hair",
    name: "Hair Pins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrr8UFCT-8k6oN-SjzByFaWv8TxKat7oWQd5dlb59sQ&s=10",
  },
  {
    id:"chains",
    name:"Hair Chains",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeJQvaD1NrTiu8BAvBiE6lkuYaFVprlRLoMQnXmDgFg&s=10 ",
  },
  {
    id:"clips",
    name:"Hair Clips",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1zRruREvq3oPeE0DzXzxP_EK0R6btw-hkxHRzaadJA&s=10 ",
  }
 
  
];

export default function Hair() {
  return (
    <div className="hair-page">
      <h1>Hair Accessories Collection</h1>

      <div className="hair-grid">
        {categories.map((item) => (
          <div className="hair-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <Link to={`/hair/${item.id}`} className="btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

