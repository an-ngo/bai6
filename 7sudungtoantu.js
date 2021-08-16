function takeValue(){
    let inputwidth = prompt("nhap vao chieu rong","15");
    document.write('Enter width: </br>' + inputwidth + '<br/>')
    let inputheight = prompt("nhap vao chieu cao","20");
    document.write('Enter height: <br/>' + inputheight+ '<br/>')
    let width = parseInt(inputwidth)
    let height = parseInt(inputheight);
    document.write('The Area is: '+width*height)
}
