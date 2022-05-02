import React from 'react';
const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div classNameName="banner">
      <div classNameName="container">
        
      {/* Header */}
    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                            <h1>Farmacias Zacatelco</h1>
                            <p className="p-large">Use Tivo to automate your marketing actions in order to reach a much larger audience</p>
                            <a className="btn-solid-lg page-scroll" href="sign-up.html">SIGN UP</a>
                        </div> {/* end of text-container */}
                    </div> {/* end of col */}
                    <div className="col-lg-6 col-xl-7">
                        <div className="image-container">
                            <div className="img-wrapper">
                                <img className="img-fluid" src="images/header-software-app.png" alt="alternative"/>
                            </div> {/* end of img-wrapper */}
                        </div> {/* end of image-container */}
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div> {/* end of header-content */}
    </header> {/* end of header */}
    {/* end of header */}
    </div>
    </div>

  );
};

export default Banner;
