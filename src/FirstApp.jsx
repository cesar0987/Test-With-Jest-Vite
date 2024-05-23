import PropTypes from 'prop-types';
const FirstApp = ({title,subTitle,name}) => {
    return (
        <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{name}</p>
        </>
    );
    }

export default FirstApp;

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}