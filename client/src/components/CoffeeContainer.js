import React from "react";
import CoffeeCard from "./CoffeeCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function CoffeeContainer({coffees, user}){
    
    const CoffeeList = coffees.map((coffee) => {
        return (
          <CoffeeCard
            key={coffee.id}
            blend_name={coffee.blend_name}
            origin={coffee.origin}
            variety={coffee.variety}
            notes={coffee.notes}
            id={coffee.id}
        
          />
        );
      });
    
     
      
      return (
        <div style={{
          marginTop: '80px',
          marginBottom: '50px',
          width: '100%',
        }}>
          {user ? <h1 className='text-center'>Welcome {user.name}!</h1> : null}
          <Container style={{
          }}>
            <Row xs={4}>
              {CoffeeList}
            </Row>
          </Container>
        </div>
      );
    }

export default CoffeeContainer