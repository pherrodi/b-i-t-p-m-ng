var arrNumber = [];

document.getElementById('btn-nhap').onclick = function () {
    // input giá trị nhập 
     var giaTriThem = +document.getElementById('nhapSo').value;
     arrNumber.push(giaTriThem);   
    document.getElementById('arrNhap').innerHTML = arrNumber;
}


// bài 1  tính tổng số dương

document.getElementById('btn-b1').onclick = function () {
    document.getElementById('kq-b1').innerHTML = tinhTongSoDuong(arrNumber);
}
// hàm tính tổng số dương
function tinhTongSoDuong (arr) {
    var tongSoDuong = 0;
    for (var index = 0 ; index < arr.length ; index++) {
        if ( arr[index] > 0) {
            tongSoDuong += arr[index];
        }
    }
    return tongSoDuong ;
}

// bài 2 đếm số lượng số dương trong mảng

document.getElementById('btn-b2').onclick = function () {
    document.getElementById('kq-b2').innerHTML = demSoDuong(arrNumber);
}

// hàm đếm số dương trong mảng
function demSoDuong (arr) {
    var dem = 0 ;
    for (var index = 0 ; index < arr.length ; index++) {
        if (arr[index] > 0) {
            dem ++;
        }
       
    }
    return dem ;
}

// bài 3 tìm số nhỏ nhất trong mảng 

document.getElementById('btn-b3').onclick = function () {
    document.getElementById('kq-b3').innerHTML = soNhoNhat(arrNumber);
}

// hàm tìm số nhỏ nhất trong mảng
function soNhoNhat (arr) {
    var soMin = arr[0];
    var soMinLa = 0;
    for ( var i = 0 ; i < arr.length ; i++) {
        if (arr[i] < soMin) {
            soMinLa = arr[i];
        }
    }
    return soMinLa;
}

// bài 4 tìm số dương nhỏ nhất trong mảng 

document.getElementById('btn-b4').onclick = function () {
    document.getElementById('kq-b4').innerHTML = soDuongNhoNhat(arrNumber);
}

// hàm tìm số dương nhỏ nhất trong mảng

function soDuongNhoNhat (arr) {
    var soMin = arr[0];
    var soMinDuong = 0;
    for ( var i=0;i<arr.length;i++) {
        if (arr[i]>0 && arr[i]<soMin) {
            soMinDuong = arr[i];
        }
    }
    return soMinDuong;
}

// bài 5 tìm số chắn cuối cùng
document.querySelector('#btn-b5').onclick = function () {
    document.querySelector('#kq-b5').innerHTML = timSoChanCuoiCung(arrNumber);
}
// hàm tìm số chắn cuối cùng 

function timSoChanCuoiCung (arr) {
    var soChan = 0;
    for ( var i=0 ; i<arr.length;i++) {
        if (arr[i]%2 == 0) {
            soChan = arr[i];
        }
    }
    return soChan ;
}