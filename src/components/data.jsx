import { results } from './Locus_seattle_aerospace';

let uniqueData = [];
let colorIds = {};
let hue = 0;

let data = [];

results.data.forEach(array => {
  let dataSet = {
    id: array[0].trim(),
    activity: array[2],
    obj1: array[3],
    obj2: array[4],
    obj3: array[5]
  }
  data.push(dataSet);
});

data.forEach(object => {
  uniqueData.push(object.activity);
  uniqueData.push(object.obj1);
  uniqueData.push(object.obj2);
  uniqueData.push(object.obj3);
});

uniqueData = uniqueData
  .filter((item, idx, ary) => ary.indexOf(item) === idx)
  .filter((item) => item !== "")
  .map(elem => {
    colorIds = Object.assign({}, colorIds, { [elem]: hue })
    let num = Math.random() * (100 - 20) + 20;
    hue += num;
    return colorIds;
  });

data = data.slice(1);

export {data, colorIds};
