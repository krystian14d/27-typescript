type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if(resultConversion === 'as-number'){
    return +result;
  }else {
    return result.toString();
  }
}

const combinedAges = combine(20, 36, 'as-number');

const combinedStringAges = combine('30', '26', 'as-number');

const combinedNames = combine('Max', 'Anna', 'as-text');
