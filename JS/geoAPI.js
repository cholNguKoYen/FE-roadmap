// const x = document.getElementById("geo_api");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, error);
//   } else {
//     x.innerHTML = "Doesn't support for this";
//   }
// }

// function success(position) {
//   x.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br> Longitude: " +
//     position.coords.longitude;
// }

// function error() {
//   alert("Error!");
// }

// document.getElementById("btnRst").onclick = function () {
//   const id = document.getElementById("txtMaSV").value;

//   if (!id) {
//     alert("Enter Student ID to delete!");
//     return;
//   }

//   studentList = studentList.filter(student => student.sID !== id);
//   renderTable();
//   alert("Deleted!");
// };

// document.getElementById("btnSearch").onclick = function () {
//   const keyword = document.getElementById("txtTuKhoa").value.trim();

//   if (!keyword) {
//     renderTable(); // show all
//     return;
//   }

//   const result = studentList.filter((student) => student.sID.includes(keyword));

//   if (result.length === 0) {
//     alert("No student found!");
//   }

//   renderTable(result);
// };

// ======================
// 1. CLASS DEFINITIONS
// ======================

class Khoa {
  constructor(maKhoa, tenKhoa) {
    this.maKhoa = maKhoa;
    this.tenKhoa = tenKhoa;
  }
}

class SinhVien {
  constructor(maSV, tenSV, ngaySinh, gioiTinh, maKhoa) {
    this.maSV = maSV;
    this.tenSV = tenSV;
    this.ngaySinh = ngaySinh;
    this.gioiTinh = gioiTinh;
    this.maKhoa = maKhoa;
  }
}

// ======================
// 2. DATA STORAGE
// ======================

let danhSachKhoa = [
  new Khoa("CS", "Khoa CS"),
  new Khoa("Math", "Khoa Toán"),
  new Khoa("Phy", "Khoa Vật Lý"),
];

let danhSachSinhVien = [];
let danhSachGoc = []; // dùng để reset khi search rỗng

// ======================
// 3. KHỞI TẠO 10 SINH VIÊN MẶC ĐỊNH
// ======================

function khoiTaoDuLieu() {
  for (let i = 1; i <= 10; i++) {
    let sv = new SinhVien(
      "SV" + i,
      "Sinh viên " + i,
      "01/01/2000",
      i % 2 === 0 ? "Nam" : "Nữ",
      danhSachKhoa[i % 3].maKhoa,
    );
    danhSachSinhVien.push(sv);
  }

  danhSachGoc = [...danhSachSinhVien];
  renderTable(danhSachSinhVien);
}

// ======================
// 4. RENDER TABLE
// ======================

function renderTable(data) {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";

  let header = `
        <tr>
            <th><input type="checkbox" id="checkAll"></th>

            <th>No</th>
            <th>Mã SV</th>
            <th>Tên SV</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Khoa</th>
            <th>Action</th>
        </tr>
    `;

  tbody.innerHTML += header;

  data.forEach((sv, index) => {
    let khoa = danhSachKhoa.find((k) => k.maKhoa === sv.maKhoa);

    let row = `
            <tr>
                <td><input type="checkbox" class="rowCheck" value="${sv.maSV}"></td>
                <td>${index + 1}</td>
                <td>${sv.maSV}</td>
                <td>${sv.tenSV}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.gioiTinh}</td>
                <td>${khoa ? khoa.tenKhoa : ""}</td>
                <td>
                    <button onclick="hienThiSua('${sv.maSV}')">Sửa</button>
                    <button onclick="xoaSinhVien('${sv.maSV}')">Xóa</button>
                </td>
            </tr>
        `;
    tbody.innerHTML += row;
  });

  document.getElementById("checkAll").onclick = function () {
    document.querySelectorAll(".rowCheck").forEach((cb) => {
      cb.checked = this.checked;
    });
  };
}

// ======================
// 5. LẤY DỮ LIỆU FORM
// ======================

function layDuLieuForm() {
  const maSV = document.getElementById("txtMaSV").value.trim();
  const tenSV = document.getElementById("txtTenSV").value.trim();
  const ngaySinh = document.getElementById("txtNgaySinh").value;
  const gioiTinh =
    document.querySelector('input[name="rdbGioiTinh"]:checked')?.value || "";
  const maKhoa = document.getElementById("drpKhoa").value;

  return new SinhVien(maSV, tenSV, ngaySinh, gioiTinh, maKhoa);
}

// ======================
// 6. VALIDATION
// ======================

function validate(sv) {
  if (!sv.maSV) {
    alert("Thiếu Mã SV");
    return false;
  }
  if (!sv.tenSV) {
    alert("Thiếu Tên SV");
    return false;
  }
  if (!sv.maKhoa) {
    alert("Thiếu Khoa");
    return false;
  }
  return true;
}

// ======================
// 7. THÊM MỚI (CHỈ CLEAR FORM)
// ======================

document.getElementById("btnAdd").onclick = function () {
  document.querySelector("form").reset();
  document.getElementById("txtMaSV").readOnly = false;
};

// ======================
// 8. CẬP NHẬT (THÊM HOẶC SỬA)
// ======================

document.getElementById("btnUpdt").onclick = function () {
  let sv = layDuLieuForm();
  if (!validate(sv)) return;

  let index = danhSachSinhVien.findIndex((s) => s.maSV === sv.maSV);

  if (index === -1) {
    // thêm mới
    danhSachSinhVien.push(sv);
  } else {
    // cập nhật
    danhSachSinhVien[index] = sv;
  }

  danhSachGoc = [...danhSachSinhVien];
  renderTable(danhSachSinhVien);
  alert("Lưu thành công!");
};

// ======================
// 9. HIỂN THỊ SỬA
// ======================

function hienThiSua(maSV) {
  let sv = danhSachSinhVien.find((s) => s.maSV === maSV);
  if (!sv) return;

  document.getElementById("txtMaSV").value = sv.maSV;
  document.getElementById("txtTenSV").value = sv.tenSV;
  document.getElementById("txtNgaySinh").value = sv.ngaySinh;
  document.querySelector(
    `input[name="rdbGioiTinh"][value="${sv.gioiTinh}"]`,
  ).checked = true;
  document.getElementById("drpKhoa").value = sv.maKhoa;

  document.getElementById("txtMaSV").readOnly = true;
}

// ======================
// 10. XÓA 1 SINH VIÊN
// ======================

function xoaSinhVien(maSV) {
  if (!confirm("Bạn có chắc muốn xóa?")) return;

  danhSachSinhVien = danhSachSinhVien.filter((s) => s.maSV !== maSV);
  danhSachGoc = [...danhSachSinhVien];
  renderTable(danhSachSinhVien);
}

// ======================
// 11. XÓA NHIỀU
// ======================

document.getElementById("btnRst").onclick = function () {
  let selected = document.querySelectorAll(".rowCheck:checked");

  if (selected.length === 0) {
    alert("Chưa chọn sinh viên nào");
    return;
  }

  if (!confirm("Bạn có chắc muốn xóa các sinh viên đã chọn?")) return;

  let ids = [...selected].map((cb) => cb.value);

  danhSachSinhVien = danhSachSinhVien.filter((s) => !ids.includes(s.maSV));

  danhSachGoc = [...danhSachSinhVien];
  renderTable(danhSachSinhVien);
};

// ======================
// 12. SEARCH
// ======================

document.getElementById("btnSearch").onclick = function () {
  let keyword = document.getElementById("txtTuKhoa").value.trim().toLowerCase();

  if (!keyword) {
    renderTable(danhSachGoc);
    return;
  }

  let result = danhSachSinhVien.filter(
    (s) =>
      s.maSV.toLowerCase().includes(keyword) ||
      s.tenSV.toLowerCase().includes(keyword) ||
      s.ngaySinh.toLowerCase().includes(keyword) ||
      s.gioiTinh.toLowerCase().includes(keyword) ||
      s.maKhoa.toLowerCase().includes(keyword),
  );

  renderTable(result);
};

// ======================
// INIT
// ======================

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

khoiTaoDuLieu();
