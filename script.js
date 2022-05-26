
window.addEventListener('mouseout', function(){
  const pullDownButton = document.getElementById("lists")
  pullDownButton.addEventListener('mouseover', function(){
    pullDownButton.setAttribute("style", "background-color:blue;")
  })
  pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.removeAttribute("style", "background-color:red;")
  })
  pullDownButton.addEventListener('click', function(){
    pullDownButton.setAttribute("style", "background-color:green;")
  })
})
