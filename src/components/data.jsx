const data = [
  {id: 1, label: 'Aircraft ferrying', activity: '1.2.2', obj1: 'b', obj2: '4', obj3: 'ii' },
  {id: 2, label: 'Aerospace supply chain optimization', activity: '1.1.1', obj1: null, obj2: null, obj3: 'div' },
  {id: 3, label: 'Aerospace equipment procurement', activity: '1.1.2', obj1: 'b', obj2: null, obj3: 'div' },
  {id: 4, label: 'Aerospace personnel recruiting', activity: '1.1.2', obj1: 'f', obj2: null, obj3: null },
  {id: 5, label: 'Logistics for space launches', activity: '1.2.1', obj1: 'b', obj2: '4', obj3: 'ii' }
]

let uniqueData = [];
let colorIds = {};
let hue = 0;

data.forEach(object => {
  uniqueData.push(object.activity);
  uniqueData.push(object.obj1);
  uniqueData.push(object.obj2);
  uniqueData.push(object.obj3);
});

uniqueData = uniqueData
  .filter((item, idx, ary) => ary.indexOf(item) === idx)
  .filter((item) => item !== null)
  .map(elem => {
    colorIds = Object.assign({}, colorIds, { [elem]: hue })
    hue +=29;
    return colorIds;
  });

export {data, colorIds};
