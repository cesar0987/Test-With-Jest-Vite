import PropTypes from 'prop-types';
const FirstApp = ({title,subTitle,name}) => {
    return (
        <>
        <div data-testid="test-title">{title}</div>
        <p>{subTitle}</p>
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