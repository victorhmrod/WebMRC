import PropTypes from 'prop-types';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    id="theme-toggle"
    type="button"
    onClick={onToggle}
    aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
  >
    {isDark ? <IoSunny /> : <IoMoon />}
  </button>
);

ThemeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ThemeToggle;
