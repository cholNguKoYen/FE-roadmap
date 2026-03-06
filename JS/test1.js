class Student {
  constructor(sID, sName, sDOB, sSex, sDeptID) {
    this.sID = sID;
    this.sName = sName;
    this.sDOB = sDOB;
    this.sSex = sSex;
    this.sDeptID = sDeptID;
  }
}

class Department {
  constructor(deptID, deptName) {
    this.deptID = deptID;
    this.deptName = deptName;
  }
}

let deptList = [
  new Department("CS", "Computer Science"),
  new Department("Math", "Mathematics"),
  new Department("Phy", "Physics"),
  new Department("Eng", "English"),
];
let studentList = []; //current data for showing
let originStudentList = []; //current data for searching
let defaultStudentList = []; //default data when load page

function randomDate(start = 1999, end = 2006) {
  const year = Math.floor(Math.random() * (end - start + 1)) + start;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
}

function randomName() {
  const familyName = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng"];
  const firstName = ["Văn", "Thị", "Minh", "Anh", "Đức"];
  const lastName = ["Hùng", "Lan", "Tú", "Hà", "Nam", "Trang"];
  return (
    familyName[Math.floor(Math.random() * familyName.length)] +
    " " +
    firstName[Math.floor(Math.random() * firstName.length)] +
    " " +
    lastName[Math.floor(Math.random() * lastName.length)]
  );
}

function initialStudentData(i) {
  const sID = "SV" + i;
  const sName = randomName();
  const sDOB = randomDate();
  const sSex = Math.random() < 0.5 ? "Nam" : "Nữ";
  const sDeptIDList = deptList[Math.floor(Math.random() * deptList.length)];
  return new Student(sID, sName, sDOB, sSex, sDeptIDList.deptID);
}

function getInitData() {
  for (let i = 0; i < 20; i++) {
    studentList.push(initialStudentData(i));
  }
  originStudentList = [...studentList];
  defaultStudentList = [...studentList]; //set default when search null
  renderTable(studentList);
}

function renderTable(data) {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";
  let header = `
        <tr>
            <th><input type="checkbox" id="checkAll"></th>
            <th>No.</th>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>DOB</th>
            <th>Sex</th>
            <th>Department</th>
            <th>Action</th>
        </tr>
    `;
  tbody.innerHTML += header;

  data.forEach((student, index) => {
    let dept = deptList.find((k) => k.deptID === student.sDeptID);

    const row = `
            <tr>
                <td><input type = 'checkbox' class = 'rowCheck' value='${student.sID}'> </td>
                <td>${index + 1}</td>
                <td>${student.sID}</td>
                <td>${student.sName}</td>
                <td>${student.sDOB}</td>
                <td>${student.sSex}</td>
                <td>${dept ? dept.deptName : ""}</td>
                <td>
                    <button onclick = "EditStudent('${student.sID}')">Edit</button>
                    <button onclick = "RemoveStudent('${student.sID}')">Remove</button>
                </td>
            </tr>`;
    tbody.innerHTML += row;
  });

  document.getElementById("checkAll").onclick = function () {
    document.querySelectorAll(".rowCheck").forEach((cb) => {
      cb.checked = this.checked;
    });
  };
}

function getDataFromForm() {
  const fID = document.getElementById("txtMaSV").value.trim();
  const fName = document.getElementById("txtTenSV").value.trim();
  const fDOB = document.getElementById("txtNgaySinh").value;
  const fSex =
    document.querySelector('input[name="rdbGioiTinh"]:checked')?.value || "";
  const fDept = document.getElementById("drpKhoa").value;
  return new Student(fID, fName, fDOB, fSex, fDept);
}

function validate(s) {
  if (!s.sID) {
    alert("Fill ID field");
    return false;
  }
  if (!s.sName) {
    alert("Fill Name field");
    return false;
  }
  if (!s.sDeptID) {
    alert("Choose DeptID");
    return false;
  }
  return true;
}

document.getElementById("btnAdd").onclick = function () {
  document.querySelector("form").reset();
  document.getElementById("txtMaSV").readOnly = false;
};

document.getElementById("btnUpdt").onclick = function () {
  let s = getDataFromForm();
  if (!validate(s)) return;

  let i = studentList.findIndex((k) => k.sID === s.sID);
  if (i === -1) {
    studentList.push(s);
  } else {
    studentList[i] = s;
  }

  originStudentList = [...studentList];
  renderTable(studentList);
  alert("Saved");
};

function EditStudent(sID) {
  let foundStudent = studentList.find((s) => s.sID === sID);
  if (!foundStudent) {
    alert("Cannot find student to edit");
    return;
  }
  document.getElementById("txtMaSV").value = foundStudent.sID;
  document.getElementById("txtTenSV").value = foundStudent.sName;
  document.getElementById("txtNgaySinh").value = foundStudent.sDOB;
  document.querySelector(
    `input[name="rdbGioiTinh"][value="${foundStudent.sSex}"]`,
  ).checked = true;
  document.getElementById("drpKhoa").value = foundStudent.sDeptID;
  document.getElementById("txtMaSV").readOnly = true;
}

function RemoveStudent(sID) {
  if (!confirm(`Are you sure to delete this student ID: ${sID}`)) return;
  studentList = studentList.filter((s) => s.sID !== sID);
  originStudentList = [...studentList];
  renderTable(studentList);
}

//Delete many rows
document.getElementById("btnRst").onclick = function () {
  let selected = document.querySelectorAll(".rowCheck:checked");
  if (selected.length === 0) {
    alert("Have not chosen any student yet");
    return;
  }
  if (!confirm("Are you sure to delete all chosen students?")) return;

  let ids = [...selected].map((cb) => cb.value);
  studentList = studentList.filter((s) => !ids.includes(s.sID));
  originStudentList = [...studentList];
  renderTable(studentList);
};

document.getElementById("btnSearch").onclick = function () {
  let keyword = document.getElementById("txtTuKhoa").value.trim().toLowerCase();

  if (!keyword) {
    renderTable(defaultStudentList);
    return;
  }

  let result = originStudentList.filter((s) => {
    let dept = deptList.find((d) => d.deptID === s.sDeptID);
    return (
      s.sID.toLowerCase().includes(keyword) ||
      s.sName.toLowerCase().includes(keyword) ||
      s.sDOB.toLowerCase().includes(keyword) ||
      s.sSex.toLowerCase().includes(keyword) ||
      s.sDeptID.toLowerCase().includes(keyword) ||
      (dept && dept.deptName.toLowerCase().includes(keyword))
    );
  });

  renderTable(result);
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

//Auto search by input
document.getElementById("txtTuKhoa").addEventListener("input", function () {
  document.getElementById("btnSearch").click();
});

getInitData();
