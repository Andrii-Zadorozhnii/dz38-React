import CustomerAvatar1 from './avatarsImg/AvatarMaker1.png';
import CustomerAvatar2 from "./avatarsImg/AvatarMaker2.png";
import CustomerAvatar3 from "./avatarsImg/AvatarMaker3.png";
import CustomerAvatar4 from "./avatarsImg/AvatarMaker4.png";
import CustomerAvatar5 from "./avatarsImg/AvatarMaker5.png";
import CustomerAvatar6 from "./avatarsImg/AvatarMaker6.png";
import CustomerAvatar7 from "./avatarsImg/AvatarMaker7.png";
import CustomerAvatar8 from "./avatarsImg/AvatarMaker8.png";
import CustomerAvatar9 from "./avatarsImg/AvatarMaker9.png";

const customersAvatars = [
  CustomerAvatar1,
  CustomerAvatar2,
  CustomerAvatar3,
  CustomerAvatar4,
  CustomerAvatar5,
  CustomerAvatar6,
  CustomerAvatar7,
  CustomerAvatar8,
  CustomerAvatar9
];

const customersNames = [
  "Elena Johnson",
  "Isaac Rodriguez",
  "Sophie Lee",
  "Miles Davis",
  "Ava Martin",
  "Maxwell Smith",
  "Lily Chen",
  "Nathan Patel",
  "Emma Williams"
];

function SubSectionThree() {
  return (
    <div style={{ alignItems: "center", width:'20%', padding:'10px', border:'1px solid gray', borderBottom:'2px solid gray', borderRadius:'10px' }}>
      {customersAvatars.map((avatar, index) => (
        <div key={index} style={{  display: "flex", gap:'10px', alignItems:'center', marginBottom:'10px' }}>
          <img src={avatar} alt={`Customer Avatar ${index + 1}`}  style={{width:'50px', height:'50px', borderRadius:'50%', border:'0.2px solid gray'}}/>
          <p>{customersNames[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default SubSectionThree;
