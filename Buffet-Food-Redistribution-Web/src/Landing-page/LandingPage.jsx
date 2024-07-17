import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import video from '../components/videos/f.mp4';
import logo from '../components/FoodShareNetwork.jpeg';
import { FaTachometerAlt } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faInfoCircle, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../App';

const LandingPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <section id="video-section" className="header-banner mb-3 mt-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-2 p-0">
              <div className="bg-secondary text-light vh-100 d-flex flex-column align-items-center pt-3 rounded-end">
                <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
                <Link to="/Donordashboard" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
                  <FaTachometerAlt size={20} className="me-2" />
                  <span className="fw-bold">Dashboard</span>
                </Link>
                <Link to="/foodform" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
                  <BiDonateHeart size={20} className="me-2" />
                  <span className="fw-bold">Donate</span>
                </Link>
                <Link to="/Historys" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
                  <FontAwesomeIcon icon={faCircle} size="lg" className="me-2" />
                  <span className="fw-bold">Record</span>
                </Link>
                <Link to="/contact" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" className="me-2" />
                  <span className="fw-bold">Contact</span>
                </Link>
                <Link to="/about" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
                  <FontAwesomeIcon icon={faInfoCircle} size="lg" className="me-2" />
                  <span className="fw-bold">About</span>
                </Link>
                <Link to="/" onClick={handleLogout} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
                  <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="me-2" />
                  <span className="fw-bold">Logout</span>
                </Link>
              </div>
            </div>
            <div className="col-md-10">
              <div className="text-center position-relative mt-5">
                <div className="position-relative">
                  <video
                    autoPlay
                    loop
                    muted
                    className="img-fluid"
                  >
                    <source src={video} type="video/mp4"></source>
                  </video>
                  <div
                    className="position-absolute w-100 h-100" style={{
                      top: 0,
                      left: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    }}
                  ></div>
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h1 className="text-white fw-bold">Welcome to FoodShare Network!</h1>
                    <p className="text-white fw-bold">WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...</p>
                  </div>
                </div>
                <div className="header-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section mt-5 mb-5">
        {/* Features section content */}
      </section>
    </>
  );
};

export default LandingPage;

