function LinksSetColor(color) {
  for (i = 0; i < alist.length; i++) {
    console.log(alist[i]);
    alist[i].style.color = color;
  }
}

var Body = {
  setColor: function (color) {
    // document.querySelector("body").style.color = color;
    $("body").css("color",color);
  },
  setBackgroundColor: function (color) {
    // document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor",color);
  },
};

var Links = {
  setColor: function (color) {
    //   for (i = 0; i < alist.length; i++) {
    //     console.log(alist[i]);
    //     alist[i].style.color = color;
    //   }
    $('a').css('color',color);
  }
};

function night_handler(self) {
  // 위 객체사용 + 매소드 사용
  if (self.vaule === "Night") {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.vaule = "Day";
    Links.setColor("blue");
  } else {
    //객체 안사용 그냥 박치기
    document.querySelector("body").style.backgroundColor = "Black";
    document.querySelector("body").style.color = "white";
    self.vaule = "Night";
    Links.setColor("powderblue");
  }
}

var alist = document.querySelectorAll("a");
