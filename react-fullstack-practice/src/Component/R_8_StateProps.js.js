import { click } from '@testing-library/user-event/dist/click';
import download from '../data/download.svg';
const { Button, Card, } = require("react-bootstrap");

function R_8_StateProps({ items }) {
    let clickk = () => {
        alert('Click Button');
    }
    return (

        <Card style={{ margin: '10px' }}>
            {/* Image */}
            <Card.Img
                variant="top"
                src={download}
                alt="Card Image"
            />
            {/* Card Body */}
            <Card.Body>
                <Card.Title>{items.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{items.email}</Card.Subtitle>
                <Card.Text>{items.body}</Card.Text>
                <Button variant="primary" onClick={clickk}>Contact</Button>
            </Card.Body>
        </Card>

    )
}
export default R_8_StateProps;