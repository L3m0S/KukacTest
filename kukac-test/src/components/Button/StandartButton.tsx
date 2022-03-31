import { Link } from 'react-router-dom';
import './StandartButton.css';

interface Iprops {
    text: string;
    url: string;
};

export function StandartButton(props: Iprops): JSX.Element {
    const { text, url } = props;

    return (
        <Link to={url}>
            <button  type="button" className="button">{text}</button>
        </Link>
        
    );
};