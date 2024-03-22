const active = document.querySelector('.active'); 
const pending = document.querySelector('.pending');
const complete = document.querySelector('.complete');
const list = document.querySelector('.list');
const btnAdd = document.querySelector('.btn_add')
const thing = document.querySelector('.thing')
const filterBtn = document.querySelector('.tab')
const listFooter = document.querySelector('.list_footer')  


// 初始 render
let data = []

function render(completed = '') {
  let content = ""
  data.forEach(function(item) {
    if (completed == "" || String(item.completed) == completed) {
      content += liTemplate(item)
    }
  })

 list.innerHTML = content
 todoThing();
}

render()


// 新增待辦事項
btnAdd.addEventListener('click', function(e) {
  if (thing.value.trim() == "") {
    alert("請輸入待辦事項")
    return
  }

  data.push({
    id: new Date().getTime(),
    content: thing.value,
    completed: false 
  })
  thing.value = ""
  render();
  todoThing();
})

// 勾選已完成事項，賦予 complete
list.addEventListener("click", function(e){
  let clickedId = e.target.getAttribute("data-id")
  let clickedItem = data.find((item) => item.id == clickedId)
  clickedItem.completed = !clickedItem.completed

  todoThing();
})

// 刪除事項
list.addEventListener("click",function(e){
  if (e.target.nodeName == "A") {
    let selectedIitem = data.find((item) => item.id == e.target.getAttribute("data-id"))
    let idx = data.indexOf(selectedIitem)

    delete data[idx]
    render()
  }
})


// 進度分類
filterBtn.addEventListener("click", function(e){
  if (e.target.className == 'tab'){
    return
  }
  render(e.target.getAttribute("data-completed"))
})

filterBtn.addEventListener("click", function(e){
  if (e.target.nodeName == "LI"){
    let items = filterBtn.getElementsByTagName("li")
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("selected");
    }
    e.target.classList.add("selected")
  }
})


// 待完成項目數量顯示
function todoThing() {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (!data[i].completed) {
      count += 1;
    }
  }
  let content = `<p>${count}個待完成項目</p>
  <a href="#">清除已完成項目</a>`;
  listFooter.innerHTML = content;
}

//清除所有已完成項目
listFooter.addEventListener("click", function(e){
  if (e.target.nodeName !== "A") {
    return
  } else {
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].completed) {
        data.splice(i, 1); 
      }
    }
  }
  render()
})

// List Item 的模板
function liTemplate (item) {
  return `<li>
    <label class="checkbox  for="">
      <input class="checkBtn" type="checkbox" ${item.completed ? 'checked' : '' } data-id="${item.id}"/>
      <span>${item.content}</span>
    </label>
    <a href="#" class="delete" data-id="${item.id}"></a>
  </li>`
}