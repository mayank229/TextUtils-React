// import { useState } from 'react';

function About(props) {
    let myStyle = props.mode === "dark" ? { color: "white", backgroundColor: "rgb(79 87 91)" } : { color: "black", backgroundColor: "white" };
    let btnStyle = props.mode === "dark" ? { color: "white", backgroundColor: "rgb(70 75 79)" } : { color: "black", backgroundColor: "white" };


    return (
        <div className="container my-5" >
            <h2 className="my-3 container" style={{color: props.mode === "dark" ? "white" : "black"}}>About Us</h2>

            <div className="accordion container my-6" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={btnStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Text Utils</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text Utils is a utility to manipulate your text with different features such as Convert to upppercase, Convert to lowercase, word counter, remove extra spaces etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={btnStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Browser Compatibility</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            The application is compatible with chrome, firefox and edge.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button style={btnStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Contact us</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            Write us at mayankrathor229@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;



