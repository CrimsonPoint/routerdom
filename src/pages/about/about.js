import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/header'

const About = () => {
    return (
        <Container>
            <Header />
            <Row>
                <Col>
                    <h1>О нас</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <img
                        src="https://via.placeholder.com/500x500.png?text=Image"
                        alt="Команда"
                        className="img-fluid rounded"
                    />
                </Col>
                <Col md={6}>
                    <h2>Наша команда</h2>
                    <p>
                        Мы - команда профессионалов в области веб-разработки, которые создают качественные и инновационные решения для наших клиентов.
                    </p>
                    <p>
                        Наша миссия - помочь нашим клиентам достичь своих целей в Интернете. Мы всегда находимся на переднем крае технологических инноваций и стремимся к совершенству в нашей работе.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
