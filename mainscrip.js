// function onload1() {
//     var data = prompt("Moi ban nhap vao nhiet do");
//     while (data > 100 || data < 20) {
//         if (data > 100) {
//             alert('Pls dow temperature');
//             data = prompt("Moi ban nhap vao nhiet do");
//         } else if (data < 20) {
//             alert('Pls push temperature');
//             data = prompt("Moi ban nhap vao nhiet do");
//         }
//     }
// }
// window.onload = onload1;
//------------------------Bai 3: In ra 20 so dau tien cua day fibonasi----------------------------------------
function printfibonacci() {
    var i=1;
        while (i<20){
            document.write(Fibonacci(i)+" ");
            i++;
        }
}
function Fibonacci(n) {
    if(n==1||n==2) return 1;
    return Fibonacci(n-1)+Fibonacci(n-2);

}
//-----------------------Bai 4: So dau tien cua day fibonacci chia het cho 5----------------------------------

function firstfibonacci() {
    var i=1;
    while (i<20){

        if(Fibonacci(i)%5==0)
        {
            document.write(Fibonacci(i));
            break}
        i++;
    }
}
//-----------------------Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.-----------------------------
function sumoffibonacci() {
    var i=1;
    var tong=0;
    while (i<20){
        tong+=parseInt(Fibonacci(i));
        i++;
    }
    document.write(tong);
}
//----------------------Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.--------------
function sum() {
    var flag=true;
    var i=2;
    while (i<10){
        var j=2;
        for(j;j<i;j++) {
            if(i%j==0){
                flag=false
                break;
            } else flag=true;
        }
        i++;
        if (flag==true){
            alert(i+" La so nguyen to");
        }
        else alert(i+" Khong phai so nguyen to")
    }
}