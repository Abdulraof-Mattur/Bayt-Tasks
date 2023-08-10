var nestedOject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function searches(obj, val) {
  for (var i in obj) {
    if (typeof obg[i] === "object") {
      if (searches(obj[i], val)) {
        return `Yes => ${val}`;
      }
    } else {
      if (obj[i] === val) {
        return true;
      }
    }
  }
  return `No => ${val}`;
}

var result = searches(nestedOject, 44);
console.log(result);
var result2 = searches(nestedOject, "foo");
console.log(result2);
