// import React from "react";
// import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
// import './Reviews.css';
// import Person1 from '../utils/img/person1.jpg';
// import Person2 from '../utils/img/person2.jpg';
// import Person3 from '../utils/img/person3.jpg';
// import Person4 from '../utils/img/person4.jpg';

// export function Reviews() {
//     return (
//         <div className="reviews-section container">
//             <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Testimonies</h2>
//             <div className="row g-4">
//                 <div className="col-lg-6">
//                     <Card className="h-100 shadow">
//                         <CardBody>
//                             <div className="p-4">
//                                 <CardText>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
//                                 </CardText>
//                             </div>
//                         </CardBody>
//                         <CardFooter className="d-flex align-items-center">
//                             <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
//                             <CardTitle className="text-success">Kamohelo Mohapi</CardTitle>
//                         </CardFooter>
//                     </Card>
//                 </div>
//                 <div className="col-lg-6">
//                     <Card className="h-100 shadow">
//                         <CardBody>
//                             <div className="p-4">
//                                 <CardText>
//                                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?
//                                 </CardText>
//                             </div>
//                         </CardBody>
//                         <CardFooter className="d-flex align-items-center">
//                             <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
//                             <CardTitle className="text-success">Sithembile Simelane </CardTitle>
//                         </CardFooter>
//                     </Card>
//                 </div>
//                 <div className="col-lg-6">
//                     <Card className="h-100 shadow">
//                         <CardBody>
//                             <div className="p-4">
//                                 <CardText>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!
//                                 </CardText>
//                             </div>
//                         </CardBody>
//                         <CardFooter className="d-flex align-items-center">
//                             <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
//                             <CardTitle className="text-success">Forgive Maake</CardTitle>
//                         </CardFooter>
//                     </Card>
//                 </div>
//                 <div className="col-lg-6">
//                     <Card className="h-100 shadow">
//                         <CardBody>
//                             <div className="p-4">
//                                 <CardText>
//                                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!
//                                 </CardText>
//                             </div>
//                         </CardBody>
//                         <CardFooter className="d-flex align-items-center">
//                             <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
//                             <CardTitle className="text-success">Vumani Dlamini</CardTitle>
//                         </CardFooter>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import Person1 from '../utils/img/person1.jpg';
import Person2 from '../utils/img/person2.jpg';
import Person3 from '../utils/img/person3.jpg';
import Person4 from '../utils/img/person4.jpg';

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Testimonies</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow" style={{ border: "1px solid #ced4da", borderRadius: "10px" }}>
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center" style={{ borderTop: "1px solid #ced4da", padding: "1rem" }}>
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" style={{ width: "15%", borderWidth: "thin" }} />
                            <CardTitle className="text-success" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Vumani Dlamini</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow" style={{ border: "1px solid #ced4da", borderRadius: "10px" }}>
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center" style={{ borderTop: "1px solid #ced4da", padding: "1rem" }}>
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" style={{ width: "15%", borderWidth: "thin" }} />
                            <CardTitle className="text-success" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Kamohelo Mohapi</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow" style={{ border: "1px solid #ced4da", borderRadius: "10px" }}>
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center" style={{ borderTop: "1px solid #ced4da", padding: "1rem" }}>
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" style={{ width: "15%", borderWidth: "thin" }} />
                            <CardTitle className="text-success" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Kgomotso Moeti</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow" style={{ border: "1px solid #ced4da", borderRadius: "10px" }}>
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center" style={{ borderTop: "1px solid #ced4da", padding: "1rem" }}>
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" style={{ width: "15%", borderWidth: "thin" }} />
                            <CardTitle className="text-success" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Forgive Make</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                
                {/* Repeat similar structure for other testimonials */}
            </div>
            <div className='mb-5'><br/></div>
        </div>
       
    )
}

export default Reviews;

