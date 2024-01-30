const active = document.querySelector('.active'); 
const pending = document.querySelector('.pending');
const complete = document.querySelector('.complete');
const list = document.querySelector('.list');
const btn_add = document.querySelector('.btn_add')
const thing = document.querySelector('.thing')
const filterBtn = document.querySelector('.tab')
const deleteBtn = document.querySelector('.delete') 


let data = []


function render(){
  let str = ""
  data.forEach(function(item){
    let content = 
    `<li><label class="checkbox" for="">
    <input type="checkbox" />
    <span>${item.content}</span>
    </label>
    <a href="#" class="delete"></a></li>`
    const obj = {}
    obj.content = item.content
    data.push(obj)
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
  render()
})


// 進度分類
filterBtn.addEventListener('click', function(e){
  let str = ""
  data.forEach(function(item){
    if (e.target.getAttribute('class')=="active") {
      str ==  
      `<li><label class="checkbox" for="">
      <input type="checkbox" />
      <span>${item.content}</span>
      </label>
      <a href="#" class="delete"></a></li>`
    }
    console.log(str)
    if (e.target.getAttribute('class')=="pending") {
      str += 
      `<li><label class="checkbox" for="">
      <input type="checkbox" />
      <span>${item.content}</span>
      </label>
      <a href="#" class="delete"></a></li>`
    }
    if (e.target.getAttribute('class')=="complete") {
      str +=  
      `<li><label class="checkbox" for="">
      <input type="checkbox" />
      <span>${item.content}</span>
      </label>
      <a href="#" class="delete"></a></li>`
    }
  })
  list.innerHTML = str
})
