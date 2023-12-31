import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };
    const headerTextStyles = {
        color: textColor,
        textDecoration: 'underline',
        textUnderlineOffset: '0.4em',
    };
    return (
        <header style={headerStyles}>
            <div className="container">
                <Link to="/" style={headerTextStyles}>
                    <h2>{text}</h2>
                </Link>
            </div>
        </header>
    );
};

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0)',
    textColor: 'white',
};

export default Header;
