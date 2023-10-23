const wheelsInner = document.querySelectorAll('.wheel__inner');

const getTransformRotateStyle = (style) => {
  const matrix = style.match(/^matrix\((.+)\)$/);

  const matrixValues = matrix[1].split(',').map(parseFloat);
  const skewY = matrixValues[1];
  const scaleY = matrixValues[3];

  let angleInRadians = Math.atan2(skewY, scaleY);
  const angleInDegrees = (angleInRadians * 180) / Math.PI;

  return Math.round(angleInDegrees);
};

const initRotateImg = () => {
  wheelsInner.forEach((wheelInner) => {
    const transformStyle = getComputedStyle(wheelInner).getPropertyValue('transform');
    const deg = getTransformRotateStyle(transformStyle);
    wheelInner.querySelector('.wheel__img').style.transform = `rotate(${-deg}deg)`;
  });
};

export {initRotateImg};
