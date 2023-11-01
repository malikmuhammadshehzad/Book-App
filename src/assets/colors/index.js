 
import DarkColors from './DarkColors';
import LightColor from './LightColor';
 
const getCurrentThemColors = () => {
 
  const currentTheme = 'light';
  return currentTheme === 'dark' ? DarkColors : LightColor;
};
export default getCurrentThemColors();