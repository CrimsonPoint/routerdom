import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../../components/header'


const Contact = () => {
    return (
        <Container>
            <Header />
            <Row>
                <Col>
                    <h1>Контакты</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Ваше имя</Form.Label>
                            <Form.Control type="text" placeholder="Введите имя" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Ваш email</Form.Label>
                            <Form.Control type="email" placeholder="Введите email" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Ваше сообщение</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Введите сообщение" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Отправить
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h2>Свяжитесь с нами</h2>
                    <p>
                        Если у вас есть вопросы или предложения, свяжитесь с нами, используя форму обратной связи на этой странице.
                    </p>
                    <p>
                        Наш адрес: ул. Примерная, д. 1, г. Примерный.
                    </p>
                    <p>
                        Наш телефон: +7 123 456 7890.
                    </p>
                    <p>
                        Наш email: example@mail.com.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
