// Necesitas descargar una imagen con el nombre image.png

const sharp = require('sharp');

sharp('images.png')
    .resize(80)
    .tofile('resized.png')