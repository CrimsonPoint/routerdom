import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 - Страница не найдена</h1>
            <p>К сожалению, запрашиваемая страница не найдена.</p>
            <Link to="/">Вернуться на главную страницу</Link>
        </div>
    );
};

export default NotFound;