(() => {
    let ageList = $("#age");
    
    for(let i = 14; i < 80; i++){
        let option = $(`<option value="${i}">${i}</option>`);
        ageList.append(option);
    }
})()