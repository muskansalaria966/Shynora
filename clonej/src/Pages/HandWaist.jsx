import { Link } from "react-router-dom";

const categories = [
  {
    id: "hathphool",
    name: "Maang Tikka ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirV_xN-BrrQTYkM5xTHFFWsjvSIuAW3u4Ln-Lp0Tzew&s=10",
  },
  {
    id: "handchain",
    name: "Matha Patti",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtO5-zXettq9g48JFw0Kmiy82TJhLBpYdMYX9QHEWyw&s=10",
  },
  {
    id: "fingerbracelet",
    name: "Judda Pins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRje4sG5DrcbC_M-Vydk9PH5NXOIOLPJwSOXGom3SGpw&s=10",
  },
  {
    id: "waistchain",
    name: "Hair Pins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrr8UFCT-8k6oN-SjzByFaWv8TxKat7oWQd5dlb59sQ&s=10",
  },
  {
    id:"kamarbandh",
    name:"Hair Chains",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeJQvaD1NrTiu8BAvBiE6lkuYaFVprlRLoMQnXmDgFg&s=10 ",
  },
  {
    id:"bellychain",
    name:"Hair Clips",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1zRruREvq3oPeE0DzXzxP_EK0R6btw-hkxHRzaadJA&s=10 ",
  }
 
  
];

export default function HandWaist() {
  return (
    <div className="handwaist-page">
      <h1>Hand & Waist Collection</h1>

      <div className="handwaist-grid">
        {categories.map((item) => (
          <div className="handwaist-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <Link to={`/handwaist/${item.id}`} className="btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

