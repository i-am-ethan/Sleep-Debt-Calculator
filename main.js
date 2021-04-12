const target = document.getElementById("target");
const result = document.getElementById("result");
const dept = document.getElementById("dept");
const total = document.getElementById("total");

const getTargetVal = target.addEventListener("change", () => {
  let targetVal = target.value;
  console.log(targetVal);
  dept.innerHTML = ` ${targetVal} - ? = ?`;

  const getResultVal = result.addEventListener("change", () => {
    let resultVal = result.value;
    console.log(resultVal);
    dept.innerHTML = ` ${targetVal} - ${resultVal} = ${targetVal - resultVal}`;

    console.log(targetVal - resultVal);
  }); // end getResultVal
}); // end getTargetVal
