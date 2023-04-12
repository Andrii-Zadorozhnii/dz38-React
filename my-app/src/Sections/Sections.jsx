import Dollar from "./images/dollar-white.svg";
import Review from "./images/rate_review-white.svg";
import Cart from './images/0_cart.svg';
import NewCustomer from "./images/0_user-add.svg";

const images = [Dollar, Cart, Review, NewCustomer];

const bgColor = ["purple", "orange", "red", "green"];

const headerText = [
  "Monthly Revenue",
  "New Orders",
  "Pending Reviews",
  "New Customers",
];
const amount = [1385, 12, 3, 9];

function Sections() {
  const boxes = headerText.map((text, index) => {
    return (
      <div
        className={`box-${index}`}
        key={index}
        style={{
          width: "20%",
          textAlign: "end",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid gray",
          borderBottom: "2px solid gray",
          borderRadius: "10px",
          paddingRight: "10px",
          paddingTop: "10px",
          cursor: "pointer",
          backgroundColor: "white",
        }}
      >
        <div className="image" style={{ width: "100px", height: "120px" }}>
          <img
            className="image"
            src={images[index]}
            alt="img"
            style={{
              position: "relative",
              bottom: "25px",
              width: "80px",
              height: "90px",
              marginLeft: "10px",
              marginRight: "10px",
              zIndex: "999",
              borderRadius: "10px",
              border: "1px solid gray",
              padding: "20px",
              backgroundColor: bgColor[index],
            }}
          />
        </div>
        <div className="someText" style={{ margin: "auto 0" }}>
          <h2 className="someText-header" style={{ marginBottom: "15px" }}>
            {text}
          </h2>
          <p className="someText-amount">{amount[index]}</p>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "1920px",
        width: "100%",
        paddingLeft: "20px",
        paddingRight: "10px",
        gap: "5%",
        height: "90px",
      }}
    >
      {boxes}
    </div>
  );
}

export default Sections;
