function openTimetable() {
  let unitCode = document.getElementById("unitCode");
  let url = `https://www.bristol.ac.uk/timetables/html.jsp?unit=${unitCode.value}`;
  window.open(url);
}

function enrollment() {
  let unitCode = document.getElementById("unitCode");
  let tb = data.find(u => u.code === unitCode.value).tb;
  let url = `https://www.bristol.ac.uk/mystudents/StudentsByUnit.do?unit_code=${unitCode.value}&teaching_block=TB-${tb}`;
  window.open(url);
}

let u = document.getElementById("unitList");
data.forEach(e => {
  let o = document.createElement("option");
  o.setAttribute("value", e.code);
  o.textContent = e.code + " " + e.title;
  u.appendChild(o);
});