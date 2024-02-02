"use strict";

/* ストアの定義 */
const store = PetiteVue.reactive({
  sMemos: [],
  oMemos: [],
});

/* デザイン */
let switchDesignBef = {
  backgroundColor: "#ffffff",
  margin: "0",
  height: "35px",
  border: "solid 1px #000000",
  borderRadius: "5px",
  fontFamily: '"Zen Kaku Gothic New", sans-serif',
  fontSize: "medium",
  fontWeight: "bold",
  boxShadow: "0px 2px 0 #35aeae",
  width: "45%",
};

let classDesignBef = {
  backgroundColor: "#ffffff",
  margin: "0",
  height: "35px",
  border: "solid 1px #000000",
  borderRadius: "5px",
  fontFamily: '"Zen Kaku Gothic New", sans-serif',
  fontSize: "medium",
  fontWeight: "bold",
  boxShadow: "0px 2px 0 #35aeae",
  width: "20%",
};

let joinDesign = {
  backgroundColor: "#ffffff",
  width: "40px",
  height: "40px",
  border: "solid 1px #000000",
  borderRadius: "45px",
  textAlign: "center",
  fontSize: "large",
  boxShadow: "2px 2px 0 #fdec91",
};

/* メイン */
PetiteVue.createApp({
  // データプロパティ
  screen: 1,

  // メソッド
  setScreen(n, ev) {
    document
      .querySelectorAll("nav li")
      .forEach((el) => (el.style.backgroundColor = "white"));
    ev.currentTarget.style.backgroundColor = "#35AEAE";
    this.screen = n;
  },

  arrayhighschool: ["株式会社アルゴー", "A株式会社", "B株式会社", "C株式会社"],

  // ストア
  store,

  // コンポーネント
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
  Screen9,
  Screen10,
  Screen11,
  Screen12,
  Screen13,
  Screen14,
  Screen15,
  Screen16,
  Screen17,
  Screen18,
  Screen19,
  Screen20,
  Screen21,
  Screen22,

  // メッセージ送信
  text: "",
  list: [],

  func() {
    this.list.push(this.text);
    this.text = "";
  },

  // お気に入り登録１
  topic1: "",
  stylebookmark1: {
    backgroundColor: "#e4e4e4",
  },
  funct1(t1, ev) {
    this.topic1 = t1;
    ev.preventDefault();
    this.stylebookmark1.backgroundColor = "#E34864";
  },
  // お気に入り登録2
  topic2: "",
  stylebookmark2: {
    backgroundColor: "#e4e4e4",
  },
  funct2(t2, ev) {
    this.topic2 = t2;
    ev.preventDefault();
    this.stylebookmark2.backgroundColor = "#E34864";
  },
  // お気に入り登録3
  topic3: "",
  stylebookmark3: {
    backgroundColor: "#e4e4e4",
  },
  funct3(t3, ev) {
    this.topic3 = t3;
    ev.preventDefault();
    this.stylebookmark3.backgroundColor = "#E34864";
  },
  // お気に入り登録4
  topic4: "",
  stylebookmark4: {
    backgroundColor: "#e4e4e4",
  },
  funct4(t4, ev) {
    this.topic4 = t4;
    ev.preventDefault();
    this.stylebookmark4.backgroundColor = "#E34864";
  },

  /* 名簿参照 */

  displayfilter: "",
  classfilter: "",
  studentList: [
    {
      class: "A",
      number: 1,
      name: "伊藤 真悠子",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "A",
      number: 2,
      name: "岡田 美穂",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "A",
      number: 3,
      name: "加藤 太一",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "A",
      number: 4,
      name: "佐々木 翔太",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "A",
      number: 5,
      name: "高橋 朋子",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "A",
      number: 6,
      name: "中野 健一",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "A",
      number: 7,
      name: "藤本 さやか",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "A",
      number: 8,
      name: "松田 聡太",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "A",
      number: 9,
      name: "山口 未来",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "A",
      number: 10,
      name: "渡辺 雄大",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 1,
      name: "井上 華子",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 2,
      name: "川村 雄太",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 3,
      name: "小林 真理",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 4,
      name: "佐藤 健太",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 5,
      name: "鈴木 美佳",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 6,
      name: "高田 聡一",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 7,
      name: "中島 美和",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 8,
      name: "林 裕太",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 9,
      name: "三浦 美咲",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "B",
      number: 10,
      name: "山田 貴之",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 1,
      name: "大野 健太",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 2,
      name: "川崎 大輔",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 3,
      name: "木村 美咲",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 4,
      name: "佐藤 美和",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 5,
      name: "高橋 聡一",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 6,
      name: "中島 さやか",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 7,
      name: "林 裕太",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 8,
      name: "松田 真悠",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 9,
      name: "安田 真悠子",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "C",
      number: 10,
      name: "吉田 貴之",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 1,
      name: "石井 さゆり",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 2,
      name: "岡田 美穂",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 3,
      name: "加藤 大樹",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 4,
      name: "佐藤 勇太",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 5,
      name: "高木 聖美",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 6,
      name: "中西 健太郎",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 7,
      name: "藤田 真悠",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 8,
      name: "松本 翔太",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 9,
      name: "山口 美咲",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
    {
      class: "D",
      number: 10,
      name: "渡部 大輔",
      join: false,
      style: { backgroundColor: "#ffffff", boxShadow: "0px 2px 0 #35aeae" },
    },
  ],

  //
  // style
  flagDisP: true,
  flagDisA: true,
  flagClassA: true,
  flagClassB: true,
  flagClassC: true,
  flagClassD: true,
  buttonDisP: { ...switchDesignBef },
  buttonDisA: { ...switchDesignBef, marginLeft: "10%" },
  buttonClassA: { ...classDesignBef },
  buttonClassB: { ...classDesignBef },
  buttonClassC: { ...classDesignBef },
  buttonClassD: { ...classDesignBef },

  //
  // sort
  clickPart() {
    // 参加者のみクリック
    this.displayfilter = "displayPart";
    //
    if (this.flagDisP == true) {
      this.buttonDisP.backgroundColor = "#d6eded";
      this.buttonDisP.boxShadow = "0 3px 0 #35aeae inset";
      this.flagDisP = false;
    } else if (this.flagDisP == false) {
      this.buttonDisP.backgroundColor = "#ffffff";
      this.buttonDisP.boxShadow = "0px 2px 0 #35aeae";
      this.flagDisP = true;
    }
    //
    if (this.flagDisA == false) {
      this.buttonDisA.backgroundColor = "#ffffff";
      this.buttonDisA.boxShadow = "0px 2px 0 #35aeae";
      this.flagDisA = true;
    }
  },
  clickAll() {
    // 全体表示クリック
    this.displayfilter = "displayAll";
    //
    if (this.flagDisA == true) {
      this.buttonDisA.backgroundColor = "#d6eded";
      this.buttonDisA.boxShadow = "0 3px 0 #35aeae inset";
      this.flagDisA = false;
    } else if (this.flagDisA == false) {
      this.buttonDisA.backgroundColor = "#ffffff";
      this.buttonDisA.boxShadow = "0px 2px 0 #35aeae";
      this.flagDisA = true;
    }
    //
    if (this.flagDisP == false) {
      this.buttonDisP.backgroundColor = "#ffffff";
      this.buttonDisP.boxShadow = "0px 2px 0 #35aeae";
      this.flagDisP = true;
    }
  },
  clickA() {
    // A組クリック
    this.classfilter = "classA";
    //
    if (this.flagClassA == true) {
      this.buttonClassA.backgroundColor = "#d6eded";
      this.buttonClassA.boxShadow = "0 3px 0 #35aeae inset";
      this.flagClassA = false;
      // this.flagClassB = false;
      // this.flagClassC = false;
      // this.flagClassD = false;
    } else if (this.flagClassA == false) {
      this.buttonClassA.backgroundColor = "#ffffff";
      this.buttonClassA.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassA = true;
    }
    //
    if (this.flagClassB == false) {
      this.buttonClassB.backgroundColor = "#ffffff";
      this.buttonClassB.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassB = true;
    }
    if (this.flagClassC == false) {
      this.buttonClassC.backgroundColor = "#ffffff";
      this.buttonClassC.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassC = true;
    }
    if (this.flagClassD == false) {
      this.buttonClassD.backgroundColor = "#ffffff";
      this.buttonClassD.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassD = true;
    }
  },
  clickB() {
    // B組クリック
    this.classfilter = "classB";
    //
    if (this.flagClassB == true) {
      this.buttonClassB.backgroundColor = "#d6eded";
      this.buttonClassB.boxShadow = "0 3px 0 #35aeae inset";
      this.flagClassB = false;
    } else if (this.flagClassB == false) {
      this.buttonClassB.backgroundColor = "#ffffff";
      this.buttonClassB.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassB = true;
    }
    //
    if (this.flagClassA == false) {
      this.buttonClassA.backgroundColor = "#ffffff";
      this.buttonClassA.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassA = true;
    }
    if (this.flagClassC == false) {
      this.buttonClassC.backgroundColor = "#ffffff";
      this.buttonClassC.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassC = true;
    }
    if (this.flagClassD == false) {
      this.buttonClassD.backgroundColor = "#ffffff";
      this.buttonClassD.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassD = true;
    }
  },
  clickC() {
    // C組クリック
    this.classfilter = "classC";
    //
    if (this.flagClassC == true) {
      this.buttonClassC.backgroundColor = "#d6eded";
      this.buttonClassC.boxShadow = "0 3px 0 #35aeae inset";
      this.flagClassC = false;
    } else if (this.flagClassC == false) {
      this.buttonClassC.backgroundColor = "#ffffff";
      this.buttonClassC.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassC = true;
    }
    //
    if (this.flagClassA == false) {
      this.buttonClassA.backgroundColor = "#ffffff";
      this.buttonClassA.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassA = true;
    }
    if (this.flagClassB == false) {
      this.buttonClassB.backgroundColor = "#ffffff";
      this.buttonClassB.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassB = true;
    }
    if (this.flagClassD == false) {
      this.buttonClassD.backgroundColor = "#ffffff";
      this.buttonClassD.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassD = true;
    }
  },
  clickD() {
    // D組クリック
    this.classfilter = "classD";
    //
    if (this.flagClassD == true) {
      this.buttonClassD.backgroundColor = "#d6eded";
      this.buttonClassD.boxShadow = "0 3px 0 #35aeae inset";
      this.flagClassD = false;
    } else if (this.flagClassD == false) {
      this.buttonClassD.backgroundColor = "#ffffff";
      this.buttonClassD.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassD = true;
    }
    //
    if (this.flagClassA == false) {
      this.buttonClassA.backgroundColor = "#ffffff";
      this.buttonClassA.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassA = true;
    }
    if (this.flagClassB == false) {
      this.buttonClassB.backgroundColor = "#ffffff";
      this.buttonClassB.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassB = true;
    }
    if (this.flagClassC == false) {
      this.buttonClassC.backgroundColor = "#ffffff";
      this.buttonClassC.boxShadow = "0px 2px 0 #35aeae";
      this.flagClassC = true;
    }
  },
  get filtList() {
    if (this.displayfilter == "displayPart" && this.classfilter == "classA") {
      return this.studentList.filter(
        (el) => el.class == "A" && el.join == true
      );
    } else if (
      this.displayfilter == "displayAll" &&
      this.classfilter == "classA"
    ) {
      return this.studentList.filter((el) => el.class == "A");
    } else if (
      this.displayfilter == "displayPart" &&
      this.classfilter == "classB"
    ) {
      return this.studentList.filter(
        (el) => el.class == "B" && el.join == true
      );
    } else if (
      this.displayfilter == "displayAll" &&
      this.classfilter == "classB"
    ) {
      return this.studentList.filter((el) => el.class == "B");
    } else if (
      this.displayfilter == "displayPart" &&
      this.classfilter == "classC"
    ) {
      return this.studentList.filter(
        (el) => el.class == "C" && el.join == true
      );
    } else if (
      this.displayfilter == "displayAll" &&
      this.classfilter == "classC"
    ) {
      return this.studentList.filter((el) => el.class == "C");
    } else if (
      this.displayfilter == "displayPart" &&
      this.classfilter == "classD"
    ) {
      return this.studentList.filter(
        (el) => el.class == "D" && el.join == true
      );
    } else if (
      this.displayfilter == "displayAll" &&
      this.classfilter == "classD"
    ) {
      return this.studentList.filter((el) => el.class == "D");
    } else if (this.displayfilter == "displayPart") {
      return this.studentList.filter((el) => el.join == true);
    } else if (this.displayfilter == "displayAll") {
      return this.studentList;
    } else if (this.classfilter == "classA") {
      return this.studentList.filter((el) => el.class == "A");
    } else if (this.classfilter == "classB") {
      return this.studentList.filter((el) => el.class == "B");
    } else if (this.classfilter == "classC") {
      return this.studentList.filter((el) => el.class == "C");
    } else if (this.classfilter == "classD") {
      return this.studentList.filter((el) => el.class == "D");
    } else {
      return this.studentList;
    }
  },

  // 参加登録
  buttonTextJoin: "+",
  buttonJoin: { ...joinDesign },
  textJoin: "",
  joinFlag: true,
  clickJoin(i) {
    if (this.studentList[i].join == false) {
      this.studentList[i].style = {
        backgroundColor: "#d6eded",
        boxShadow: "0 3px 0 #35aeae inset",
      };
      this.studentList[i].join = true;
    } else {
      this.studentList[i].style = {
        backgroundColor: "#ffffff",
        boxShadow: "0px 2px 0 #35aeae",
      };
      this.studentList[i].join = false;
    }
  },
  get joinList() {
    if (this.classfilter == "classA") {
      return this.studentList.filter((el) => el.class == "A");
    } else if (this.classfilter == "classB") {
      return this.studentList.filter((el) => el.class == "B");
    } else if (this.classfilter == "classC") {
      return this.studentList.filter((el) => el.class == "C");
    } else if (this.classfilter == "classD") {
      return this.studentList.filter((el) => el.class == "D");
    } else {
      return this.studentList;
    }
  },
}).mount();

/* 画面1のコンポーネント関数 */
function Screen1() {
  return {
    $template: "#screen1-tmpl",

    // データプロパティ
    sMemo: "",

    // メソッド
    addMatter() {
      if (this.sMemo != "") {
        this.store.sMemos.push(this.sMemo);
        this.sMemo = "";
      }
    },
  };
}

/* 画面2のコンポーネント関数 */
function Screen2() {
  return {
    $template: "#screen2-tmpl",
  };
}

/* 画面3のコンポーネント関数 */
function Screen3() {
  return {
    $template: "#screen3-tmpl",
  };
}
/* 画面4のコンポーネント関数 */
function Screen4() {
  return {
    $template: "#screen4-tmpl",
  };
}
/* 画面5のコンポーネント関数 */
function Screen5() {
  return {
    $template: "#screen5-tmpl",
  };
}

/* 画面6のコンポーネント関数 */
function Screen6() {
  return {
    $template: "#screen6-tmpl",
  };
}

/* 画面7のコンポーネント関数 */
function Screen7() {
  return {
    $template: "#screen7-tmpl",
  };
}
/* 画面8のコンポーネント関数 */
function Screen8() {
  return {
    $template: "#screen8-tmpl",
  };
}
/* 画面9のコンポーネント関数 */
function Screen9() {
  return {
    $template: "#screen9-tmpl",
  };
}

/* 画面10のコンポーネント関数 */
function Screen10() {
  return {
    $template: "#screen10-tmpl",
  };
}

/* 画面11のコンポーネント関数 */
function Screen11() {
  return {
    $template: "#screen11-tmpl",
  };
}

/* 画面12のコンポーネント関数 */
function Screen12() {
  return {
    $template: "#screen12-tmpl",
  };
}

/* 画面13のコンポーネント関数 */
function Screen13() {
  return {
    $template: "#screen13-tmpl",
  };
}

/* 画面14のコンポーネント関数 */
function Screen14() {
  return {
    $template: "#screen14-tmpl",
  };
}
/* 画面15のコンポーネント関数 */
function Screen15() {
  return {
    $template: "#screen15-tmpl",
  };
}

/* 画面16のコンポーネント関数 */
function Screen16() {
  return {
    $template: "#screen16-tmpl",
  };
}

/* 画面17のコンポーネント関数 */
function Screen17() {
  return {
    $template: "#screen17-tmpl",
  };
}

/* 画面18のコンポーネント関数 */
function Screen18() {
  return {
    $template: "#screen18-tmpl",
  };
}
/* 画面19のコンポーネント関数 */
function Screen19() {
  return {
    $template: "#screen19-tmpl",
  };
}
/* 画面20のコンポーネント関数 */
function Screen20() {
  return {
    $template: "#screen20-tmpl",
  };
}
/* 画面21のコンポーネント関数 */
function Screen21() {
  return {
    $template: "#screen21-tmpl",
  };
}
/* 画面22のコンポーネント関数 */
function Screen22() {
  return {
    $template: "#screen22-tmpl",
  };
}
