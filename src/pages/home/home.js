import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../../components/header'


const Home = () => {
    return (
        <Container>
            <Header />
            <Row className="my-5">
                <Col md={7}>
                    <h1>Добро пожаловать на наш сайт</h1>
                    <p>Мы рады приветствовать вас на нашем сайте. Здесь вы найдете всю необходимую информацию о нашей компании и наших продуктах.</p>
                    <p>Мы предлагаем широкий ассортимент продуктов, включая продукты питания, бытовую технику, мебель, одежду и многое другое. Мы гарантируем высокое качество продукции и быструю доставку по всей стране.</p>
                    <Button variant="primary" className="mt-3">
                        Узнать больше
                    </Button>
                </Col>
                <Col md={5}>
                    <img src="https://via.placeholder.com/500x350" alt="Продукты" className="img-fluid rounded" />
                </Col>
            </Row>
            <Row className="my-5">
                <Col md={4}>
                    <img src="https://via.placeholder.com/500x350" alt="Продукты" className="img-fluid rounded mb-3" />
                    <h2>Продукты питания</h2>
                    <p>Мы предлагаем широкий выбор свежих и качественных продуктов питания по доступным ценам.</p>
                    <Button variant="secondary">
                        Посмотреть все
                    </Button>
                </Col>
                <Col md={4}>
                    <img src="https://via.placeholder.com/500x350" alt="Техника" className="img-fluid rounded mb-3" />
                    <h2>Бытовая техника</h2>
                    <p>Мы предлагаем широкий выбор бытовой техники от ведущих мировых производителей.</p>
                    <Button variant="secondary">
                        Посмотреть все
                    </Button>
                </Col>
                <Col md={4}>
                    <img src="https://via.placeholder.com/500x350" alt="Мебель" className="img-fluid rounded mb-3" />
                    <h2>Мебель</h2>
                    <p>Мы предлагаем широкий выбор мебели для дома и офиса, включая диваны, кровати, столы и стулья.</p>
                    <Button variant="secondary">
                        Посмотреть все
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
