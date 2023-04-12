import Dashboard from "../images/dashboard.svg";
import Sales from "../images/dollar.svg";
import Catalog from "../images/pictures.svg";
import Customers from "../images/user-group.svg";
import Review from "../images/rate_review.svg";

const menuItems = ["Dashboard", "Sales", "Catalog", "Customers", "Reviews"];
const imagesMenuItems = [
  `${Dashboard}`,
  `${Sales}`,
  `${Catalog}`,
  `${Customers}`,
  `${Review}`,
];

// function Icon({ id, ...props }) {
//     return (
//         <svg {...props} style={{
//             width: '50px',
//         }}>
//             <use href={`../images/symbol-defs.svg#${id}`} />
//         </svg>
//     );
// }

// function MenuList() {
//     const items = manuItems.slice(0, 5).map((item, index) => {
//         return (
//             <li key={index}>
//                 <Icon id={imagesMenuItems[index]} />
//                 <span>{item}</span>
//             </li>
//         );
//     });
//
//     return <ul>{items}</ul>;
// }
//
// export default MenuList;

function MenuList() {
  const items = menuItems.map((item, index) => {
    return (
      <li
        key={index}
        style={{ display: "flex", alignItems:"center", marginBottom: "10px", width: "200px" }}
      >
        <a href="/" style={{ display: "flex", marginBottom: "10px" }}>
          <img
            src={`${imagesMenuItems[index]}`}
            style={{ marginLeft: "10px" }}
            alt="img"
          />
          <p style={{ margin: " auto 10px" }}>{item}</p>
        </a>
      </li>
    );
  });

  //   function showSibeMenu(){
  //     document.querySelector("item").addEventListener("click", () => {
  //         <ul style={{ display: "block" }}>{items}</ul>;
  //       });
  //   }
  //   showSibeMenu();

  return <ul style={{ display: "block" }}>{items}</ul>;
}

export default MenuList;
