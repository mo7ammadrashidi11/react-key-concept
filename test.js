function execf() {
  const obj = {
    name: "mamad",
    a: this,
    f() {
      return function () {
        console.log(this);
      };
    },
  };
  obj.f()();
  console.log("A:", obj.a);
}
execf();
