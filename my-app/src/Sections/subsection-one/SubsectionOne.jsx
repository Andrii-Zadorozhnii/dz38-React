import AdminImg from './img/adminImg.jpeg';


function SubsectionOne (){
    return (
        <div className="adminDemo" style={{
            width: '44.6%',
            height: 'content-fit',
            backgroundColor: 'white',
            border: '1px solid gray',
            borderBottom: "2px solid gray",
            borderRadius: '10px',
        }}>
            <div className="adminDemo-img" style={{padding:'10px'}}>
                <img src={AdminImg} alt="adminFoto" style={{
                    width: '100%',
                    height: '200px',
                    boxSizing:'border-box',
                    marginBottom: '20px',
                }}/>
                <h2 style={{marginBottom:'20px', fontWeight:"700"}}>Welcome to react Admin-demo</h2>
                <p>This is to admin of an imaginary poster shop. Fell free to explore and modify the data - it's local to your computer, and will reset each time your reload</p>
            </div>
        </div>
    );
};

export default SubsectionOne;