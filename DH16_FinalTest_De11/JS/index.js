$(document).ready(function() {
    
    function ktSoSR(){
        let so=$('#txtso').val();
        let ctso=/^[A-Z-0-9]{6,}$/
        if(ctso.test(so)){
            $('#erso').html("So serial in trên kiện hàng nếu có");
            return true;
        }else{
            if( so.trim().length === 0) {
                $("#erso").html("*");
            } else {

                $("#erso").html("Sai cú pháp");
            }
            return false;
        }
    }
    function ktTL() {
        let tl= eval( $('#txttl').val());
     
        if( tl >0)
        {
            $("#ertl").html("*");
            return true;

        } else {
            if( $('#txttl').val().trim().length === 0) {
                $("#ertl").html("*");
            } else {
                $("#ertl").html("Trọng lượng phải lớn hơn 0");

            }
            return false;
        }
    }
    function ktMT(){
        let mt=$('txtmota').val();
        if(mt.trim().length===0){
            $('#ermota').html("*");
            return true;
        }else{
            $('#ermota').html("*");
        }
    }
    $('#txtso').blur(function (e) { 
        ktSoSR();        
    });
    $('#txttl').blur(function (e) { 
        ktTL();
    });
    $('#txtmota').blur(function (e) { 
       ktMT();
        
    });
    let count=1;
    $('#btn').click(function (e) { 
        let so=$('#txtso').val();
        let mota=$('#txtmota').val();
        let tl=eval($('#txttl').val());
        let anh=$('#txtanh').val();
        let pvc=0;
        if(tl>=1 && tl <=20){
            pvc=tl*35000;
        }else if(tl>=21 && tl<=50){
            pvc=tl*30000;
        }
        else{
            pvc=tl*15000;
        }
        
        if(ktSoSR() && ktTL()){
            let trnew="<tr><td>"+ count++ +"</td><td>"+ so +"</td><td>" + mota + "</td><td>" + anh + "</td><td>" + tl + "</td><td>" + pvc + "</td></tr>";
            $('#tb').append(trnew);
        }

    });
    $('#txttl').change(function () {
        let tl= eval( $('#txttl').val());
        let pvc = 0;
        if(tl >=1 && tl <=20) {
            pvc =tl*35000;
        } else  if(tl >=21 && tl <=50) {
            pvc =tl*30000;
        } else {
            pvc =tl*15000;
        }
        $('#txtpvc').val(pvc);
    })
})