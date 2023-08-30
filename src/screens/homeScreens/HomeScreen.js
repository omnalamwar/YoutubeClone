import React from 'react';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import { Col, Container, Row } from 'react-bootstrap';
import Video from '../../components/video/Video';

function HomeScreen(){
    return(
        <Container>
            <CategoriesBar/>
            <Row>
                {[...new Array(20)].map(()=>(
                    <Col lg={3} md={4}>
                        <Video/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomeScreen;