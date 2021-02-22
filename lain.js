document.getElementById("tombol_form").addEventListener("click", tampilkan_nilai_form)

function tampilkan_nilai_form(){
    var nilai_form=document.getElementById("nilai_form").innerHTML;
    document.getElementById("hasil").innerHTML=nilai_form;
}

