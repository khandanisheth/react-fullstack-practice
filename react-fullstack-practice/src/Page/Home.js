import R8StateProps from "../Component/R_8_StateProps.js";
import { Col, Container, Row } from 'react-bootstrap'; // Bootstrap ke Container, Row, Col le rahe hain
import { blog } from '../data/Stdata';
import R1Props from '../Component/R_1_Props';
import R2List from '../Component/R_2_List';
import R3Boots from '../Component/R_3_Boots';
import R4FontAwUse from '../Component/R_4_FontAwUse';
import R5StateComDidMoun from '../Component/R_5_StateComDidMoun';
import R6Clscom from '../Component/R_6_Clscom';
import R7StateFull from '../Component/R_7_StateFull';
import R9Ruf from '../Component/R_9_Ruf';
import R10Eventhandling from '../Component/R_10_Eventhandling';
import R11Eventhandling from '../Component/R_11_IfElseRendring.js';
const Home = () => {
    // Ek object bana rahe hain jisko hum Prop me pass karenge
    let objst = {
        name: "dk",
        age: 20,
        add: 8920,
    };
    return (
        <>
            {/* Prop Component ko call karte hue values pass kar rahe hain */}
            {/* Yaha kuch child elements bhi bhej rahe hain (children ke roop me)  */}
            <R1Props name="John" email="john@example.com" objst={objst}>
                <h1>Hello Pop</h1>
                <h1>Hello Prop</h1>
                <h1>Hello Prop</h1>
                <h1>Hello Prop</h1>
            </R1Props>
            {/* List Component Render kar rahe hain */}
            <R2List />
            <R3Boots />
            <R4FontAwUse />
            <R5StateComDidMoun />
            <R6Clscom name="John" email="john@example.com" objst={objst} />
            <R7StateFull />
            <h1 className='text-center text-danger'> Array To Comes To Use With Prop </h1>
            <Container fluid style={{ background: '#efefef' }} className='p-4'>
                <Row>
                    {blog.map((v, i) => (
                        <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center mb-4">
                            <R8StateProps items={v} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <R9Ruf />
            <R10Eventhandling />
            <R11Eventhandling />
        </>
    )
}

export default Home;