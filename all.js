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



// render
let data = []
function render(){
  let str = ""
  data.forEach(function(item,index){
    let content = 
    `<li  data-thing="${index}">
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



// 進度分類
filterBtn.addEventListener('click', function(e){
  if(e.target.className == "tab"){
    return
  }

  
  let str = ""
  data.forEach(function(item,index){
    if (e.target.getAttribute('class')=="active") {
      str +=  
      `<li  data-thing="${index}">
        <label class="checkbox  for="">
          <input class="checkBtn" type="checkbox" />
          <span>${item.content}</span>
        </label>
        <a href="#" class="delete"></a>
      </li>`
      console.log(str)
    }
    if (e.target.getAttribute('class')=="pending") {
      str += 
      `<li  data-thing="${index}">
      <label class="checkbox  for="">
        <input class="checkBtn" type="checkbox" />
        <span>${item.content}</span>
      </label>
      <a href="#" class="delete"></a>
    </li>`
    } 
    if (e.target.getAttribute('class')=="complete") {
      if (li.getAttribute('class')=="finished") {
        str +=  
      `<li data-thing="${index}">
        <label class="checkbox  for="">
          <input class="checkBtn" type="checkbox" />
          <span>${item.content}</span>
        </label>
        <a href="#" class="delete"></a>
      </li>`
      }
    }
      list.innerHTML = str
    })
  })
    

 





// 已完成頁面：選項賦予一個 class="finished"
list.addEventListener("click", function(e){
  if(e.target.nodeName == "INPUT"){
    const todoThing = document.querySelector('.list li') 
    todoThing.setAttribute("class", "finished")
  }
  
})


