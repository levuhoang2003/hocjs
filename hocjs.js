var danhSachSinhVien = [];
    var sinhVienDangChinhSua = -1;

    function nhapSoLuong() {
        document.getElementById("sinhVienForm").style.display = "block";
        document.getElementById("chinhSuaThongTin").style.display = "none";
    }

    function taoDanhSachSV() {
    var soLuongSV = document.getElementById("soLuongSV").value;

    danhSachSinhVien = [];
    sinhVienDangChinhSua = -1;

    var formHTML = "<h2>Thông tin sinh viên</h2>";

    for (var i = 0; i < soLuongSV; i++) {
        formHTML += "<div id='sinhVien_" + i + "'>";
        formHTML += "<label for='maSV_" + i + "'>Mã sinh viên " + (i + 1) + ":</label>";
        formHTML += "<input type='text' id='maSV_" + i + "'>";
        formHTML += "<label for='hoTen_" + i + "'>Họ và tên " + (i + 1) + ":</label>";
        formHTML += "<input type='text' id='hoTen_" + i + "'>";
        formHTML += "<label for='ngaySinh_" + i + "'>Ngày sinh " + (i + 1) + ":</label>";
        formHTML += "<input type='date' id='ngaySinh_" + i + "'>";
        formHTML += "<label for='lopHoc_" + i + "'>Lớp học " + (i + 1) + ":</label>";
        formHTML += "<input type='text' id='lopHoc_" + i + "'>";
        formHTML += "<label for='diemGPA_" + i + "'>Điểm GPA " + (i + 1) + ":</label>";
        formHTML += "<input type='number' id='diemGPA_" + i + "' min='0' max='10'>";
        formHTML += "<button onclick='chinhSuaThongTin(" + i + ")'>Chỉnh sửa</button>";
        formHTML += "<button onclick='xoaSinhVien(" + i + ")'>Xóa</button>";
        formHTML += "</div>";
    }

    formHTML += "<button onclick='luuVaHienThiThongTin()'>Lưu thông tin</button>";

    document.getElementById("danhSachSV").innerHTML = formHTML;
}


    function luuVaHienThiThongTin() {
        var soLuongSV = document.getElementById("soLuongSV").value;

        danhSachSinhVien = [];

        for (var i = 0; i < soLuongSV; i++) {
            var maSV = document.getElementById("maSV_" + i).value;
            var hoTen = document.getElementById("hoTen_" + i).value;
            var ngaySinh = document.getElementById("ngaySinh_" + i).value;
            var lopHoc = document.getElementById("lopHoc_" + i).value;
            var diemGPA = document.getElementById("diemGPA_" + i).value;

            var sinhVien = {
                maSV: maSV,
                hoTen: hoTen,
                ngaySinh: ngaySinh,
                lopHoc: lopHoc,
                diemGPA: diemGPA
            };

            danhSachSinhVien.push(sinhVien);
        }

        alert("Thông tin sinh viên đã được lưu!");

        // Nếu bạn muốn tự động cập nhật sau khi lưu, hãy gọi hàm hiển thị thông tin ở đây
        hienThiThongTin();
    }

    function hienThiThongTin() {
        var thongTinSVHTML = "<h2>Thông tin sinh viên</h2>";

        for (var j = 0; j < danhSachSinhVien.length; j++) {
            thongTinSVHTML += "<div id='sinhVien_" + j + "'>";
            thongTinSVHTML += "<p><strong>Mã SV:</strong> " + danhSachSinhVien[j].maSV + "</p>";
            thongTinSVHTML += "<p><strong>Họ và tên:</strong> " + danhSachSinhVien[j].hoTen + "</p>";
            thongTinSVHTML += "<p><strong>Ngày sinh:</strong> " + danhSachSinhVien[j].ngaySinh + "</p>";
            thongTinSVHTML += "<p><strong>Lớp học:</strong> " + danhSachSinhVien[j].lopHoc + "</p>";
            thongTinSVHTML += "<p><strong>Điểm GPA:</strong> " + danhSachSinhVien[j].diemGPA + "</p>";
            thongTinSVHTML += "<button onclick='chinhSuaThongTin(" + j + ")'>Chỉnh sửa</button>";
            thongTinSVHTML += "<button onclick='xoaSinhVien(" + j + ")'>Xóa</button>";
            thongTinSVHTML += "</div>";
        }

        document.getElementById("danhSachSV").innerHTML = thongTinSVHTML;
        document.getElementById("chinhSuaThongTin").style.display = "none";
    }

    function chinhSuaThongTin(index) {
        sinhVienDangChinhSua = index;

        document.getElementById("maSV_edit").value = danhSachSinhVien[index].maSV;
        document.getElementById("hoTen_edit").value = danhSachSinhVien[index].hoTen;
        document.getElementById("ngaySinh_edit").value = danhSachSinhVien[index].ngaySinh;
        document.getElementById("lopHoc_edit").value = danhSachSinhVien[index].lopHoc;
        document.getElementById("diemGPA_edit").value = danhSachSinhVien[index].diemGPA;

        document.getElementById("chinhSuaThongTin").style.display = "block";
    }

    function luuChinhSua() {
        if (sinhVienDangChinhSua !== -1) {
            danhSachSinhVien[sinhVienDangChinhSua].maSV = document.getElementById("maSV_edit").value;
            danhSachSinhVien[sinhVienDangChinhSua].hoTen = document.getElementById("hoTen_edit").value;
            danhSachSinhVien[sinhVienDangChinhSua].ngaySinh = document.getElementById("ngaySinh_edit").value;
            danhSachSinhVien[sinhVienDangChinhSua].lopHoc = document.getElementById("lopHoc_edit").value;
            danhSachSinhVien[sinhVienDangChinhSua].diemGPA = document.getElementById("diemGPA_edit").value;

            alert("Thông tin sinh viên đã được cập nhật!");
            hienThiThongTin();
        }
    }

    function xoaSinhVien(index) {
        var xacNhan = confirm("Bạn có chắc chắn muốn xóa sinh viên này?");
        if (xacNhan) {
            danhSachSinhVien.splice(index, 1);
            alert("Sinh viên đã được xóa!");
            hienThiThongTin();
        }
    }