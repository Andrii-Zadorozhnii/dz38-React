import Reviewer1 from "./ReviuerLogoImg/AvatarMaker10.png";
import Reviewer2 from "./ReviuerLogoImg/AvatarMaker11.png";
import Reviewer3 from "./ReviuerLogoImg/AvatarMaker12.png";
import RateStar from "../subsection-two/rateStar.svg";

const ReviewerImg = [Reviewer1, Reviewer2, Reviewer3];

function SectionTwo() {
  const reviews = ReviewerImg.map((img, index) => {
    return (
      <div
        key={index}
        style={{
          width: "100%",
          height: "fitContent",
          border: "1px solid gray",
          borderBottom: "2px solid gray",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "10px",
          display: "flex",
          gap: "15px",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            border: ".2px solid gray",
            width: "50px",
            height: "50px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          src={img}
          alt={`Reviewer ${index + 1}`}
        />
        <div className={"Review"+index} style={{}}>
          <button  style={{
            border: "0px",
            backgroundColor: "inherit",
          }}>
            <img
              src={RateStar}
              alt="rateStar"
              style={{
                borderRadius: "50%",
                border: ".2px solid gray",
                width: "20px",
                backgroundColor: "gray",
                padding: "3px",
              }}
            />
          </button>
          <p style={{maxHeight:"40px", overflow:'overlay', fontSize:'12px', paddingRight:'20px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil in laborum praesentium itaque, mollitia iste sint aspernatur laboriosam delectus? Quasi amet dolorum consequuntur doloribus, eaque ab minus non hic pariatur?</p>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        width: "20%",
        height: "fitContent",
        border: "1px solid gray",
        borderBottom: "2px solid gray",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {reviews}
    </div>
  );
}

export default SectionTwo;
