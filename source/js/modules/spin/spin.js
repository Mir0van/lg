const wheelsInner = document.querySelectorAll('.wheel__inner');
// const wheelsContent = document.querySelectorAll('.wheel__content');
// const wheelsImg = document.querySelectorAll('.wheel__img');
// const degIndent = 44;
// const initDeg = -110;

// const rotate = (indent) => {
//   let deg = initDeg;
//   wheelsInner.forEach((wheelInner) => {
//     wheelInner.style.transform = `rotate(${deg}deg)`;
//     deg += indent;
//   });
// };

// const rotateReverse = (indent) => {
//   let deg = -initDeg;
//   wheelsImg.forEach((wheelImg) => {
//     wheelImg.style.transform = `rotate(${deg}deg)`;
//     deg += -indent;
//   });
// };

// rotate(degIndent);
// rotateReverse(degIndent);

const getTransformRotateStyle = (style) => {
  const matrix = style.match(/^matrix\((.+)\)$/);

  if (!matrix) {
    return;
  }

  const matrixValues = matrix[1].split(',').map(parseFloat);
  const skewY = matrixValues[1];
  const scaleY = matrixValues[3];

  let angleInRadians = Math.atan2(skewY, scaleY);
  const angleInDegrees = (angleInRadians * 180) / Math.PI;

  // eslint-disable-next-line consistent-return
  return Math.round(angleInDegrees);
};

const rotateImg = () => {
  wheelsInner.forEach((wheelInner) => {
    const transformStyle = getComputedStyle(wheelInner).getPropertyValue('transform');
    const deg = getTransformRotateStyle(transformStyle);
    wheelInner.querySelector('.wheel__img').style.transform = `rotate(${-deg}deg)`;
  });
};

rotateImg();
