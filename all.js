const active = document.querySelector('.active'); 
const pending = document.querySelector('.pending');
const complete = document.querySelector('.complete');
const list = document.querySelector('.list');
const btn_add = document.querySelector('.btn_add')
const thing = document.querySelector('.thing')
const filterBtn = document.querySelector('.tab')
const deleteBtn = document.querySelector('.delete') 
const checkBtn = document.querySelector('.checkBtn')
const todoThing = document.querySelector('.list li') 



// 初始 render
let data = []
let deleteData = []
function render(){
  let str = ""
  data.forEach(function(item,index){
    let content = 
    `<li data-thing="${index}">
      <label class="checkbox  for="">
        <input class="checkBtn" type="checkbox" />
        <span>${item.content}</span>
      </label>
      <a href="#" class="delete"></a>
    </li>`
    str += content
  })
  list.innerHTML = str
}
render()

// 新增待辦事項
btn_add.addEventListener('click', function(e){
  if(thing.value.trim()==""){
    alert("請輸入待辦事項")
    return
  }
  let obj = {}
  obj.content = thing.value
  data.push(obj)
  thing.value = ""
  render();
  
})

// 勾選已完成事項，賦予 complete
list.addEventListener("click", function(e){
  if(e.target.nodeName == "INPUT"){
    const todoThing = document.querySelector('.list li') 
    todoThing.setAttribute("class", "complete")
    deleteData.push(todoThing)
    console.log(deleteData)
  }  
})


// 進度分類
filterBtn.addEventListener('click', function(e){
  console.log(e.target.className)
  if(e.target.className == "tab"){
    return
  }

  let str = ""
  data.forEach(function(item,index){
    if (e.target.className=="active") {
      str +=  
      `<li  data-thing="${index}">
        <label class="checkbox  for="">
          <input class="checkBtn" type="checkbox" />
          <span>${item.content}</span>
        </label>
        <a href="#" class="delete"></a>
      </li>`
    }
    if (e.target.className=="pending") {
      console.log(todoThing.className)
        // let num =  e.target.getAttribute("data-num")
        // data.splice(num,1)
      str += 
      `<li  data-thing="${index}">
      <label class="checkbox  for="">
        <input class="checkBtn" type="checkbox" />
        <span>${item.content}</span>
      </label>
      <a href="#" class="delete"></a>
    </li>`
    } 
    if (e.target.className=="todoThing.value") {
    //   str +=  
    // `<li data-thing="${index}">
    //   <label class="checkbox  for="">
    //     <input class="checkBtn" type="checkbox" />
    //     <span>${item.content}</span>
    //   </label>
    //   <a href="#" class="delete"></a>
    // </li>`
    }
      list.innerHTML = str
    })
  })
    






