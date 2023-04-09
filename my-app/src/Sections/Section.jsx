const headerText = ["Monthly Revenue", "New Orders", "Pending Reviews", "New Customers"];
const amount = [1385, 12, 3, 9];

function Section() {
    const box = headerText.map((text, index) => {
        return (
            <div key={index} style={{width: '25%', textAlign: "end"}}>
                <div className="image"></div>
                <div className="someText">
                    <h2 className="someText-header" style={{marginBottom: "15px"}}>{text}</h2>
                    <p className="someText-amount">{amount[index]}</p>
                </div>
            </div>
        );
    });

    return (
        <div style={{display: 'flex', maxWidth: '1920px', width: '100%', paddingLeft: '20px', paddingRight:"10px"}}>
            {box}
        </div>
    );
}

export default Section;
