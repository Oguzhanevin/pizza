import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function MenuCard({ category }) {
  const menuItems = [
    {
      category: "pizza",
      src: "Assets/Iteration-2-assets/pictures/food-1.png",
      title: "Terminal Pizza",
      rating: "4.9",
      order: "(200)",
      price: "60₺",
    },
    {
      category: "pizza",
      src: "Assets/Iteration-2-assets/pictures/food-2.png",
      title: "Position Absolute Acı Pizza",
      rating: "4.9",
      order: "(928)",
      price: "85₺",
    },
    {
      category: "burger",
      src: "Assets/Iteration-2-assets/pictures/food-3.png",
      title: "useEffect Tavuklu Burger",
      rating: "4.9",
      order: "(462)",
      price: "75₺",
    },
  ];

  const filteredItems = menuItems.filter((item) => item.category === category);

  return (
    <>
      {filteredItems.map(({ src, title, rating, order, price }, index) => (
        <Card key={index} className="menu-card">
          <img alt={title} src={src} className="menu-card-img" />
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardText className="menu-card-text">
              <span className="menu-rating">{rating}</span>
              <span className="menu-order">{order}</span>
              <span className="menu-price">{price}</span>
            </CardText>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
