import { Link } from "react-router-dom";

const categories = [
  {
    id: "gold",
    name: "Gold Bangles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-W2PmCnka_JcNb5LKFRodrOCOXnNqcuHRx-ukRG7Hw&s=10",
  },
  {
    id: "diamond",
    name: "Diamond Bangles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQ4jLF4e24eVj11FkY2ZKfiraGK8jPyoPHYlGL3UpRA&s=10",
  },
  {
    id: "kada",
    name: "Kada",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7v6t6Sdlg47rgOB1R1WcCtuKzHHeSACtHHwBDyWEUQ&s=10",
  },
  {
    id: "metal",
    name: "Metal Bangles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5HZ_i93IdoJl9EaUDfZpOmlHNov3Oscqibt6cwPIaQ&s=10",
  },
  
];

export default function Bangles() {
  return (
    <div className="bangles-page">
      <h1>Bangles Collection</h1>

      <div className="bangles-grid">
        {categories.map((item) => (
          <div className="bangles-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <Link to={`/bangles/${item.id}`} className="btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

