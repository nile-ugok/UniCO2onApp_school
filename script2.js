"use strict";

/* ストアの定義 */
const store = PetiteVue.reactive({
  sMemos: [],
  oMemos: [],
});

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
