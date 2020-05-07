/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;