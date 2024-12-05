import { Row } from "reactstrap";

export default function MenuButtons({ handleCategory }) {
  const categories = [
    { id: "kore", icon: "Assets/Iteration-2-assets/icons/1.svg", text: "YENİ! Kore" },
    { id: "pizza", icon: "Assets/Iteration-2-assets/icons/2.svg", text: "Pizza" },
    { id: "burger", icon: "Assets/Iteration-2-assets/icons/3.svg", text: "Burger" },
    { id: "kızartma", icon: "Assets/Iteration-2-assets/icons/4.svg", text: "Kızartmalar" },
    { id: "fastfood", icon: "Assets/Iteration-2-assets/icons/5.svg", text: "Fast Food" },
    { id: "icecek", icon: "Assets/Iteration-2-assets/icons/6.svg", text: "Gazlı İçecek" },
  ];

  return (
    <Row className="menu-button-section g-0 my-4">
      {categories.map((category) => (
        <button
          key={category.id}
          className="menu-buttons"
          onClick={() => handleCategory(category.id)}
        >
          <img className="home-icons" src={category.icon} alt={category.text} />
          <span className="icon-text">{category.text}</span>
        </button>
      ))}
    </Row>
  );
}
