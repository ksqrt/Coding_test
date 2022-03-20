import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// 리엑트의 함수는 반드시 대문자 시작입니다.
// 리엑트의 사용자 정의 테그 = "컴포넌트" 입니다.
function Header(props) {
  console.log("props", props, props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          href={"/read" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(t.id));
          }}
        >
          {t.title} : {t.body}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
// 리액트의 매개변수는 대부분 props 로 사용 그냥 이거쓰자 ㅎ
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id:1, title: "html", body: "html is ..." },
    { id:2, title: "css", body: "css is ..." },
    { id:3, title: "js", body: "js is ..." },
  ];
  const [mode, setMode] = useState("Welcome");
  const [id, setID] = useState(null);
  let content = null;
  if (mode === "Welcome") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "Read") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          alert("Header");
          setMode("Welcome");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => setMode("Read") + alert(id)}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
