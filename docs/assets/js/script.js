function openUnitTimetable() {
  let unitCode = document.getElementById("unitCode");
  let url = `https://www.bristol.ac.uk/timetables/html.jsp?unit=${unitCode.value.trim()}`;
  window.open(url);
}

function openStudentTimetable() {
  let stuUser = document.getElementById("stuUser");
  let url = `https://www.bristol.ac.uk/timetables/html.jsp?student=${stuUser.value.trim()}`;
  window.open(url);
}

function enrolment() {
  let unitCode = document.getElementById("unitCode");
  let unit = data.find(u => u.code === unitCode.value);
  if (unit === undefined) { alert("Not a CS unit, cannot determine TB."); return; }
  let url = `https://www.bristol.ac.uk/mystudents/StudentsByUnit.do?unit_code=${unitCode.value}&teaching_block=TB-${unit.tb}`;
  window.open(url);
}

let u = document.getElementById("unitList");
data.forEach(e => {
  let o = document.createElement("option");
  o.setAttribute("value", e.code);
  o.textContent = e.code + " " + e.title;
  u.appendChild(o);
});