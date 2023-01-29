import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {useHistory} from "react-router-dom";

function CoffeeCard({ blend_name, variety, origin, notes, id }) {
    let history = useHistory()
    return (
        <Col style={{
            marginTop: '10px',
        }}>
            <Card key={id} style={{
                    padding: '20px',
                    border: "2px solid black"
                }}>
                <Card.Title onClick={() => history.push(`/coffee/${id}`)}className='text-center'>{blend_name}</Card.Title>

                <Card.Text className='text-center text-truncate'>{origin}</Card.Text>
                <Card.Text className='text-center'>{variety}</Card.Text>
                <Card.Text className='text-center'>{notes}</Card.Text>

            </Card>
        </Col>
    )
}

export default CoffeeCard