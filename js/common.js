var navModule = {
  navBar: document.getElementById("navBar"),
  navList: document.getElementById("listWrap"),
  flag: true,
  init: function() {
    var that = this;
    this.navBar.onclick = function() {
      if (that.flag) {
        that.navList.style.display = "block";
        that.flag = false;
        that.navBar.classList.add("ani-nav");
      } else {
        that.navList.style.display = "none";
        that.flag = true;
        that.navBar.classList.remove("ani-nav");
      }
    };

    window.addEventListener("resize", function() {
      if (innerWidth <= 768) {
        that.flag = true;
        that.navList.style.display = "none";
        that.navBar.classList.remove("ani-nav");
      } else {
        that.flag = false;
        that.navList.style.display = "block";
      }
    });
  }
};
navModule.init();
