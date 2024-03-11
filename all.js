const active = document.querySelector('.active'); 
const pending = document.querySelector('.pending');
const complete = document.querySelector('.complete');
const list = document.querySelector('.list');
const btn_add = document.querySelector('.btn_add')
const thing = document.querySelector('.thing')
const filterBtn = document.querySelector('.tab')
const list_footer = document.querySelector('.list_footer')  




// 初始 render
let data = []

function render(status = 'active'){
  let str = ""
  data.forEach(function(item,index){
    if (status == "active"){
    let content =
    `<li class="${item.status}">
      <label class="checkbox  for="">
        <input class="checkBtn" type="checkbox" data-thing="${index}"/>
        <span>${item.content}</span>
      </label>
      <a href="#" class="delete" data-thing="${index}"></a>
    </li>`
    str += content
  } else{
    if (item.status == status){
      let content =
      `<li class="${item.status}">
        <label class="checkbox  for="">
          <input class="checkBtn" type="checkbox" data-thing="${index}"/>
          <span>${item.content}</span>
        </label>
        <a href="#" class="delete" data-thing="${index}"></a>
      </li>`
      str += content
    }
   }

 })
 list.innerHTML = str
 todoThing();
}
render()





// 新增待辦事項
btn_add.addEventListener('click', function(e){
  if(thing.value.trim()==""){
    alert("請輸入待辦事項")
    return
  }
  let obj = {
    content: "",
    status: "pending"
  }
  obj.content = thing.value
  data.push(obj)
  thing.value = ""
  render();
  todoThing();
})

// 勾選已完成事項，賦予 complete
list.addEventListener("click", function(e){
  if(e.target.nodeName == "INPUT"){
    let num = e.target.getAttribute("data-thing")
    if (data[num].status == "complete"){
      data[num].status = "pending"
    }else {
      data[num].status = "complete"
    }
  }
  todoThing();
})

// 刪除事項
list.addEventListener("click",function(e){
  if (e.target.nodeName == "A"){
    let num =  e.target.getAttribute("data-thing")
    delete data[num]
    render()
  }
})


// 進度分類
filterBtn.addEventListener("click", function(e){
  if (e.target.className == 'tab'){
    return
  }
  render(e.target.className)
})
    

// 待完成項目數量顯示

function todoThing() {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "pending") {
      count += 1;
    }
  }
  let content = `<p>${count}個待完成項目</p>
  <a href="#">清除已完成項目</a>`;
  list_footer.innerHTML = content;
}




//清除所有已完成項目

list_footer.addEventListener("click", function(e){
  if (e.target.nodeName!=="A"){
    return
  }else {
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].status === "complete") {
        data.splice(i, 1); 
      }
    }
  }
  render()
})




