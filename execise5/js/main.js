$(document).ready(function () {

  function ktma() {
    let mavalue = $("#txtma").val();
    let ctrma = /^(17)|(18)|(19)|(20)|(21)\d{5}1$/;
    if (ctrma.test(mavalue)) {
      $("#erma").html("(*)");
      return true;
    } else {
      if ($("#txtma").val().trim().length === 0) {
        $("#erma").html("(*)");
        alert("bat buoc nhap");
      } else {
        $("#erma").html("17|18|19|20YYYYY1");
      }
      return false;
    }
  }
  $("#txtma").blur(function () {
    ktma();
  });
  
  function ktho() {
    let hovalue = $("#txtho").val();

    if (hovalue.trim().length === 0) {
      $("#erho").html("(*)");
      alert("bat buoc nhap");
      return true;      
    } else {
      $("#erho").html("(*)");
      return false;
    }
  }
  $("#txtho").blur(function () {
    ktho();
  });

  function ktten() {
    let hovalue = $("#txtten").val();

    if (hovalue.trim().length === 0) {
      $("#erten").html("(*)");
      alert("bat buoc nhap");

      return true;
    } else {
      $("#erten").html("(*)");
      return false;
    }
  }
  $("#txtten").blur(function () {
    ktten();
  });

//   sdt
  function ktsdt() {
    let dtvalue = $("#txtsdt").val();
    let ctrma = /^0\d{9}$/;
    if (ctrma.test(dtvalue)) {
      $("#erdt").html("(*)");
      return true;
    } else {
      if ($("#txtsdt").val().trim().length === 0) {
        $("#erdt").html("(*)");
        alert("bat buoc nhap");
      } else {
        $("#erdt").html("XXXX XXX XXX");
      }
      return false;
    }
  }
  $("#txtsdt").blur(function () {
    ktsdt();
  });

  function ktng() {
    let todo = new Date();
    todo.setDate(todo.getDate() + 3);

    let dtvalue = $("#txtng").val();
    let check = new Date(dtvalue);
    if (check > todo) {
      $("#erng").html("");
      return true;
    } else {
      $("#erng").html("sau ngày hiện tại ít nhất 3 ngày");
      return false;
    }
  }
  $("#txtng").blur(function () {
    ktng();
  });

  $("#btn").click(function () {
    let ngvalue = $("#txtng").val();
    let dtvalue = $("#txtsdt").val();
    let htenvalue = $("#txtten").val();
    let hovalue = $("#txtho").val();
    let mavalue = $("#txtma").val();
    let gioitinh = $("input[name=gt]:checked").val();
    let hoatdongdk = $("#loaihd option:selected").val();

    let hdtn = [];
    $.each($("input[name=tn]:checked"), function () {
        hdtn.push($(this).val());
    })
    let c = 1;
    if(!ktho()&&ktma()&&ktng()&& !ktten()&&ktsdt()) {
        let trnew = "<tr><td>" + c++ + "</td><td>" +mavalue+ "</td><td>"+ hovalue + " " + htenvalue + "</td><td>" + 
        gioitinh+ "</td><td>"+dtvalue+ "</td><td>"+ngvalue+ "</td><td>" +hoatdongdk+ "</td><td>"+hdtn+ "</td></tr>";

       $('#tbll').append(trnew);    
    }
  });

});
