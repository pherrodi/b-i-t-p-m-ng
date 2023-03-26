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

// bài 6 đổi chỗ 

document.getElementById('btn-b6').onclick = function () {
    // input là 2 giá trị vị trí mà người dùng nhập vào.
    var viTri1 = +document.getElementById('vitri1').value;
    var viTri2 = +document.getElementById ('vitri2').value;
    var bienTam = arrNumber[viTri1];
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = bienTam;
    document.getElementById('kq-b6').innerHTML = arrNumber;
    }


// bài 7 sắp xếp tăng dần mảng
document.getElementById('btn-b7').onclick =  function () {
document.getElementById('kq-b7').innerHTML = sapXepGiaTriTangDan(arrNumber);
}
// hàm
function sapXepGiaTriTangDan(arr) {
    // Lặp qua từng phần tử trong mảng
    for (var i = 0; i < arr.length - 1; i++) {
      // Tìm phần tử nhỏ nhất trong mảng chưa được sắp xếp
      var giaTriNhoNhat = i;
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[giaTriNhoNhat]) {
          giaTriNhoNhat = j;
        }
      }
  
      // Hoán đổi phần tử nhỏ nhất với phần tử đầu tiên chưa được sắp xếp
      var bienTam = arr[i];
      arr[i] = arr[giaTriNhoNhat];
      arr[giaTriNhoNhat] = bienTam;
    }
  
    return arr;
  }

  // bài 8 tìm số nguyên tố đầu tiên 

  document.getElementById('btn-b8').onclick = function() {
    document.getElementById('kq-b8').innerHTML = timSoNguyenToDauTien(arrNumber);
  }

  function timSoNguyenToDauTien(arr) {
    // Lặp qua từng phần tử trong mảng
    for (var i = 0; i < arr.length; i++) {
      var soNguyenTo = true;
  
      // Kiểm tra xem phần tử đó có phải là số nguyên tố hay không
      if (arr[i] < 2) {
        soNguyenTo = false;
      } else {
        for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
          if (arr[i] % j === 0) {
            soNguyenTo = false;
            break;
          }
        }
      }
  
      // Nếu phần tử đó là số nguyên tố, trả về giá trị đó
      if (soNguyenTo) {
        return arr[i];
      }
    }
  
    // Nếu không tìm thấy số nguyên tố, trả về
    return `Không tìm thấy số nguyên tố `;
  }
  
  
  
