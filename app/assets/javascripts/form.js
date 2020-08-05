$(function (){
  window.addEventListener("load", function() {
    let tabs = document.getElementsByClassName("button");
    tabsAry = Array.prototype.slice.call(tabs);

    function tabSwitch() {
      document.getElementsByClassName("active")[0].classList.remove("active");

      this.classList.add("active");

      document.getElementsByClassName("show")[0].classList.remove("show");

      const index = tabsAry.indexOf(this);

      document.getElementsByClassName("form-none")[index].classList.add("show");

      $(this.form).find("textarea, :text, :file, select").val("").end().find(":checked").prop("checked", false);
    }

    tabsAry.forEach(function(value) {
      value.addEventListener("click", tabSwitch);
    });
  });
});