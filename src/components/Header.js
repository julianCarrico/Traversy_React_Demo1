import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title = 'Task Tracker', onAdd, showAdd }) => {
    return (
        <header className='header'>
            {/* Now it uses the passed 'title' or the default 'Task Tracker' */}
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = { 
//     color: 'red',
//     backgroundColor: 'black'
// }


export default Header
