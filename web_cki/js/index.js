$(document).ready(function () {
    function ktraMSSV() {
        var mssv = $("#ma").val();
        var mssvreg = /^[12]\d{7}$/;
        if (mssv == "") {
            $("#maError").html("Mssv không được để trống");
            return false;
        }
        else if (!mssvreg.test(mssv)) {
            $("#maError").html("Mssv phải đúng định dạng");
            return false;
        }
        else {
            $("#maError").html("(*)");
            return true;
        }
    }
    $("#ma").blur(ktraMSSV);


    function ktraHoTen() {
        var ten = $("#ten").val();
        var tenreg = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;
        if (ten == "") {
            $("#tenError").html("Ten không được để trống");
            return false;
        }
        else if (!tenreg.test(ten)) {
            $("#tenError").html("Ten phải đúng định dạng");
            return false;
        }
        else {
            $("#tenError").html("(*)");
            return true;
        }
    }
    $("#ten").blur(ktraHoTen);


    function ktraEmail() {
        var email = $("#mail").val();
        var emailreg = /^[a-zA-Z0-9#$@!%^&*()_+]{3,}@iuh.edu.vn$/;
        if (email == "") {
            $("#mailError").html("Email không được để trống");
            return false;
        }
        else if (!emailreg.test(email)) {
            $("#mailError").html("EMmail phải đúng định dạng");
            return false;
        }
        else {
            $("#mailError").html("(*)");
            return true;
        }
    }
    $("#mail").blur(ktraEmail);


    function ktraSDT() {
        var sdt = $("#sdt").val();
        var sdtRegex = /^(03|04|05|06|07|08|09)\d{8}$/;
        if (sdt == "") {
            $("#sdtError").html("sdt không được để trống");
            return false;
        }
        else if (!sdtRegex.test(sdt)) {
            $("#sdtError").html("sdt phải đúng định dạng");
            return false;
        }
        else {
            $("#sdtError").html("(*)");
            return true;
        }
    }
    $("#sdt").blur(ktraSDT);

    function ktraNgaySinh() {
        var ngaySinh = $("#ns").val();
        var dateNew = new Date(ngaySinh);
        var now = new Date();

        if (ngaySinh == "") {
            $("#nsError").html("Ngày Sinh không được để trống");
            return false;
        }
        else if (dateNew > now) {
            $("#nsError").html("Ngày sinh phải trước ngày hiện tại ");
            return false;
        }
        else {
            $("#nsError").html("(*)");
            return true;
        }
    }
    $("#ns").blur(ktraNgaySinh);


    var count = 1;
    $("#btn").click(function (e) {
        e.preventDefault(); // Ngăn form reload lại trang

        // Lấy các giá trị từ form
        var mssv = $("#ma").val();
        var ten = $("#ten").val();
        var email = $("#mail").val();
        var sdt = $("#sdt").val();
        var gt = $("input[type='radio']:checked").val();
        var ns = $("#ns").val();
        var khoa =$("input[name='khoa']:checked").val();
        var nganh =$("#nganh").val();
       
    
        // Tính tổng tiền và môn học
        var TongTien = 0;
        $.each($("input[name='mh']:checked"), function() {
            TongTien += eval($("input[name='mh']:checked").val());
        });

        var monHoc = $("input[name='mh']:checked").val();

        // Tạo nội dung hàng mới
        var newTable = "<tr><td>" + count++ + "</td><td>" + mssv + "</td><td>" + ten + "</td><td>"
            + email + "</td><td>" + sdt + "</td><td>" + gt + "</td><td>" + ns
            + "</td><td>" + khoa + "</td><td>"+nganh+ "</td><td>" + monHoc + "</td><td>" + TongTien + "</td></tr>";

        // Thêm dòng mới vào bảng
        $("#tb").append(newTable);


        // Xóa trống các ô input sau khi thêm
        $("#ma").val("");
        $("#ten").val("");
        $("#mail").val("");
        $("#sdt").val("");
        $("input[name='gt']").prop("checked", false); // Bỏ chọn radio button
        $("#ns").val("");
        $("#khoa").val(""); // Reset dropdown về mặc định
        $("input[name='nganh']").prop("checked", false); // Bỏ chọn các checkbox ngành
        $("input[name='mh']").prop("checked", false); // Bỏ chọn các checkbox môn học

    });
})