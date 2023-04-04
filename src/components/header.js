import PropTypes from 'prop-types';
function Header(props) {
    return (
        <header className="container">
            <h2>{props.text}</h2>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

Header.poropTypes = {
    text: PropTypes.string,
}
export default Header;