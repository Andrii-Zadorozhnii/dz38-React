

const menuItems = ["Dashboard", "Sales", "Catalog", "Customers", "Reviews"];
const imagesMenuItems = ["account_circle", "icon-user-group", "icon-dashboard", "icon-dollar", "icon-pictures", "icon-rate_review", "icon-reload"];

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
            <li key={index} style={{display: 'flex', marginBottom: '10px', width: '200px'}}>
                <a href='/' style={{display: 'flex', marginBottom: '10px'}}>
                    <img src={`../images/${imagesMenuItems[index]}.svg`} style={{marginLeft: "10px"}}/>
                    <span
                        style={{marginLeft: '10px'}}>{item}
                    </span>
                </a>
            </li>
        );
    });

    return <ul>{items}</ul>;
}

export default MenuList;

