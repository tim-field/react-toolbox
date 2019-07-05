import rippleFactory from './Ripple.js';
import theme from './theme.module.scss';

export const Ripple = (options) => rippleFactory({ ...options, theme });
export default Ripple;
