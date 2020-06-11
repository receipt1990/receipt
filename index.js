if(localStorage.getItem('test')){
    add_to_dom()
}else{
    localStorage.setItem('test', 'true')
    let meal0 = {
        title : 'Beef',
        ingredients : ["is simply dummy text of the printing and", "ypesetting industry. Lorem Ipsum has been",
                        "the industry's standard dummy text ever since the 1500s", "when an unknown printer took a galley of type and scrambled it"],
        instructions : ["to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
                        "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."],
        pic : "pic3.jpg",
    }
    let meal1 = {
        title : 'Meat',
        ingredients : ["It is a long established fact that a reader will be distracted", "by the readable content of a page when looking at its layout",
        "The point of using Lorem Ipsum is that it has a ", "Many desktop publishing packages and web page editors now",
        "default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."],
        instructions : ["over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source"],
        pic : "pic4.jpg",
    }
    let meal2 = {
        title : 'Vegitiranien',
        ingredients : ["Lorem Ipsum comes from sections ", '1.10.32 and 1.10.33 of "de Finibus Bonorum', "(The Extremes of Good and Evil) by Cicero",
        "written in 45 BC. This book is a", "treatise on the theory of ethics", "very popular during the Renaissance. The first line",
        'of Lorem Ipsum, "Lorem ipsum dolor sit amet.."', "comes from a line in section 1.10.32."],
        instructions : ['The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"',
        'by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],
        pic : "pic2.jpg",
    }
    localStorage.setItem('meal0', JSON.stringify(meal0))
    localStorage.setItem('meal1', JSON.stringify(meal1))
    localStorage.setItem('meal2', JSON.stringify(meal2))
    add_to_dom()
}
function add_to_dom(){
    for(let i = 0; i < get_meal_keys().length; i++){
        add_this_on(get_meal_keys()[i])
    }
}
function add_this_on(item){
    let div = document.createElement('div')
    div.className = 'col-3 '+item
    let mybox = document.createElement('div')
    mybox.className = 'my_box'
    let img = document.createElement('img')
    img.src = JSON.parse(localStorage.getItem(item)).pic
    img.className = 'img'
    let h3 = document.createElement('h3')
    h3.innerText = JSON.parse(localStorage.getItem(item)).title
    let btn = document.createElement("button")
    btn.className = 'btn btn-success'
    btn.innerHTML = 'Get receipt'
    btn.setAttribute('data-target', '#'+item)
    btn.setAttribute('data-whatever', '@'+item)
    btn.setAttribute('data-toggle', "modal")
    creat_modal(item)
    mybox.appendChild(h3)
    mybox.appendChild(img)
    mybox.appendChild(btn)
    div.appendChild(mybox)
    document.querySelector(".container").querySelector(".whereto").appendChild(div)
}
//Function that gives an array of keys in localStorage that are relating to meals
function get_meal_keys(){
    let res = []
    for(let i = 0; i < Object.entries(localStorage).length ; i++){
        if((/meal/).test(Object.entries(localStorage)[i])){
            res.push(Object.entries(localStorage)[i][0])
        }
    }
    return res
} 
function creat_modal(item){
    let div = document.createElement('div')
    div.id = item
    div.className = 'modal fade'
    div.setAttribute('tabindex', '-1')
    div.setAttribute('role', 'dialog')
    div.setAttribute('aria-labelledby', 'exampleModalLabel')
    div.setAttribute('aria-hidden', 'true')
    let modal_dialog = document.createElement('div')
    modal_dialog.className = 'modal-dialog modal-lg'
    modal_dialog.setAttribute('role', 'document')
    let modal_content = document.createElement('div')
    modal_content.className = 'modal-content'
    let modal_header = document.createElement('div')
    modal_header.className = 'modal-header'
    let h5 = document.createElement('h5')
    h5.className = 'modal-title'
    h5.id ='exampleModalLabel'
    h5.innerText = JSON.parse(localStorage.getItem(item)).title
    let btn = document.createElement('button')
    btn.className = 'close'
    btn.setAttribute('data-dismiss',"modal")
    btn.setAttribute('aria-label', "Close")
    btn.innerHTML = '<span aria-hidden="true">&times;</span>'
    modal_header.appendChild(h5)
    modal_header.appendChild(btn)
    let modal_body = document.createElement('div')
    modal_body.className = 'modal-body'
    modal_body.appendChild(add_to_body_modal(item))
    let modal_footer = document.createElement('div')
    modal_footer.className = 'modal-footer'
    modal_footer.appendChild(add_footer_modal(item))
    modal_content.appendChild(modal_header) 
    modal_content.appendChild(modal_body) 
    modal_content.appendChild(modal_footer)
    modal_dialog.appendChild(modal_content)
    div.appendChild(modal_dialog)
    document.querySelector('body').appendChild(div) 
}
function add_to_body_modal(item){
    let container = document.createElement('div')
    container.className = 'container-fluid'
    let row = document.createElement('div')
    row.className = 'row'
    let col_6_1 = document.createElement('div')
    col_6_1.className = 'col-6'
    let col_6_2 = document.createElement('div')
    col_6_2.className = 'col-6'
    let h6 = document.createElement('h6')
    h6.innerText = 'Ingredients'
    let p = document.createElement('p')
    p.innerText = JSON.parse(localStorage.getItem(item)).ingredients
    let h6_2 = document.createElement('h6')
    h6_2.innerText = 'Instructions'
    let p2 = document.createElement('p')
    p2.innerText = JSON.parse(localStorage.getItem(item)).instructions
    let img = document.createElement('img')
    img.src = JSON.parse(localStorage.getItem(item)).pic
    img.className = 'img'
    col_6_1.appendChild(h6)
    col_6_1.appendChild(p)
    col_6_1.appendChild(h6_2)
    col_6_1.appendChild(p2)
    col_6_2.appendChild(img)
    row.appendChild(col_6_1)
    row.appendChild(col_6_2)
    container.appendChild(row)
    return container
}
function add_footer_modal(item){
    let div = document.createElement('div')
    div.className = 'footer'
    let btn = document.createElement('button')
    btn.className = 'btn btn-danger footer_button'
    btn.innerText = 'Delete'
    btn.id = item+'delete'
    let btn1 = document.createElement('button')
    btn1.className = 'btn btn-warning footer_button'
    btn1.innerText = 'Edit'
    btn1.id = item+'edit'
    div.appendChild(btn)
    div.appendChild(btn1)
    return div
}
function find_em_delete(){
    let res = []
    for(let i = 0; i < document.querySelectorAll('button').length; i++){
        if(/delete/.test(document.querySelectorAll('button')[i].id)) res.push(document.querySelectorAll('button')[i].id)
    }
    return res
}
function find_em_edit(){
    return find_em_delete().map(x => x.replace("delete", "edit"))
}
for(let i = 0; i < find_em_delete().length; i++){
    let function_name = 'fun('+find_em_delete()[i]+')'
    let function_name_2 = 'funedit('+find_em_edit()[i]+')'
    document.getElementById(find_em_delete()[i]).setAttribute('onclick', function_name)
    document.getElementById(find_em_edit()[i]).setAttribute('onclick', function_name_2)
}
function fun(i){
    let x = i.id.match(/(meal\d+)/)[1]
    localStorage.removeItem(x)
    location.reload()
}
function funedit(j){
    let x = j.id.match(/(meal\d+)/)[1]
    let div = document.getElementById(x).querySelectorAll('p')
    div[0].innerHTML = '<textarea id="ingreedit" class="form-control" rows="7">'+JSON.parse(localStorage.getItem(x)).ingredients+'</textarea>'
    div[1].innerHTML = '<textarea id="instredit" class="form-control" rows="7">'+JSON.parse(localStorage.getItem(x)).instructions+'</textarea>'
    let btn = document.createElement('button')
    btn.className = 'btn btn-primary submitbutton footer_button'
    btn.innerText = "Submit"
    document.getElementById(x).querySelector('.modal-footer').querySelector('.footer').appendChild(btn)
    let fun = 'submitfun('+x+')'
    btn.setAttribute('onclick', fun)
}
function submitfun(x){
     let updatedItem = {
         title : JSON.parse(localStorage.getItem(x.id)).title,
         ingredients : document.getElementById("ingreedit").value,
         instructions : document.getElementById('instredit').value,
         pic : JSON.parse(localStorage.getItem(x.id)).pic
     }
    localStorage.setItem(x.id, JSON.stringify(updatedItem))
    location.reload()
}
function creat_an_element(name, atrs=[]){
    let div = document.createElement(name)
    if(atrs.length > 0){
        for(let i = 0; i < atrs.length; i++){
            div.setAttribute(atrs[i][0], atrs[i][1])
        }
    }
    return div
}
function add_thi_one_sir(t, ing, ins, pic){
    let item = "meal"+find_em_delete().length
    if(t != "" && ing != "" &&ins != ""){
        let obj = {
            title : t,
            ingredients : ing,
            instructions : ins,
            pic : pic
        }
        localStorage.setItem(item, JSON.stringify(obj))
        location.reload()
    }
}
function apifunction(){
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+document.getElementById('search').value
    fetch(url)
    .then(data => data.json())
    .then(data => tryit(data, document.getElementById('search').value))
}

function tryit(data, mytitle){
    document.querySelector('.whereto').innerHTML = ""
    let div1 = creat_an_element('div', [['class', 'col-4']])
    let div2 = creat_an_element('div', [['class', 'col-8']])
    let my_box = creat_an_element('div', [['class', 'my_box']])
    if(data.meals){
        let item = "meal"+find_em_delete().length
        console.log(item)
        let ingr = ''
        for(let i = 0; i < get_ingre(Object.keys(data.meals[0])).length; i++){
            ingr += data.meals[0][get_ingre(Object.keys(data.meals[0]))[i]]
        }
        let obj = {
            title : mytitle,
            ingredients : ingr,
            instructions : data.meals[0].strInstructions,
            pic : data.meals[0].strMealThumb
        }
        let h3 = creat_an_element('h3')
        h3.innerText = obj.title
        let img = creat_an_element('img', [["src", obj.pic], ["class", 'img']])
        let btn = creat_an_element('button', [['class', 'btn btn-secondary']])
        btn.innerText = "add"
        let tab = [obj.title, obj.ingredients]
        let f = 'addfunction("'+item+'", '+JSON.stringify(obj)+')'
        btn.setAttribute('onclick', f)
        my_box.appendChild(h3)
        my_box.appendChild(img)
        my_box.appendChild(btn)
        div1.appendChild(my_box)
        let h5 = creat_an_element('h5')
        h5.innerText = 'Ingredients'
        let p = creat_an_element('p')
        p.innerText = obj.ingredients
        let h52 = creat_an_element('h5')
        h52.innerText = 'Instructions'
        let p2 = creat_an_element('p')
        p2.innerText = obj.instructions
        div2.appendChild(h5)
        div2.appendChild(p)
        div2.appendChild(h52)
        div2.appendChild(p2)
    }else{
        let h1 = creat_an_element("h1")
        h1.innerText = 'No Result'
        div1.appendChild(h1)
    }
    document.querySelector('.whereto').appendChild(div1)
    document.querySelector('.whereto').appendChild(div2)
}
function addfunction(i, t){
    localStorage.setItem(i, JSON.stringify(t))
    location.reload()
}
function get_ingre(tab){
    let res = []
    for(let i = 0; i < tab.length; i++){
        if(/strIngredient/.test(tab[i])) res.push(tab[i])
    }
    return res
}
