var result = $("[name='option']").val()
console.log(result)

$(".ajaxbtn").click(function(evt){
  // 防止表單自動送出                  
  evt.preventDefault()  
  console.log("ajax送出")  
  post()
})

function post(){
  var datas = $("form").serializeArray()
  datas.find((obj)=>obj.name=="json").value="true"
  console.log(datas)
  $.ajax({
    url: "https://2017.awiclass.monoame.com/api/demo/feedback",
    method: "post",
    data: datas,
    success: function(res){
      console.log("ajax result:")
      console.log(res)
      $(".feedback").text(res.response)
      $("button").text("已收到您的意見")
    }
    
    
  })
}