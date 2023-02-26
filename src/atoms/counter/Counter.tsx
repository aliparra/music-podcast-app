import PropTypes from 'prop-types';
import { CounterProps } from '@/atoms/counter/counter.types';
import '@/atoms/counter/counter.css';

const Counter = ({ count }: CounterProps) => {
	return <div className="count">{count}</div>;
};

Counter.propTypes = {
	count: PropTypes.number.isRequired,
};

export default Counter;
