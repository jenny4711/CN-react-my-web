import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "../CSS/Typing.css";
const Typing = () => {
  const [msgs, setMsgs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [start, setStart] = useState("START");
  const [isPlay, setIsPlay] = useState(false);
  const [randomArray, setRandomArray] = useState([]);
  const [select, setSelect] = useState("");
  const [timeInterval, setTimeInterval] = useState(null);

  const getWords = async () => {
    let url = `https://yesu.io/bible?lang=kor&doc=${select}&start='1:10'&end=2:10`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      setMsgs(data);
      msgs.map((item) => {
        let word = item.message;
        if (word.length < 50) {
          randomArray.push(item.message);
        }
        return randomArray;
      });
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(randomArray)
  // console.log(isPlay)
  const randomWord = () => {
    console.log(msgs);
    const randomIdx = Math.floor(Math.random() * randomArray.length);
    console.log(randomArray[randomIdx]);
    setKeyword(randomArray[randomIdx]);
    console.log(keyword, "keyword");
    return keyword;
  };

  console.log(keyword);

  const handleSelect = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
  };

  const startBtn = async () => {
    console.log("startBtn");
    console.log(randomArray);
    if (isPlay & keyword) {
      return;
    }
    await getWords(select);

    setIsPlay(true);
    setTime(60);
    setScore(0);
    randomWord();
    setStart("LOADING ...");
  };

  const matchWord = (e) => {
    if (isPlay) {
      if (e.target.value === keyword) {
        setScore(score + 1);
        e.target.value = "";
        console.log(e.target.value);
        randomWord();
      } else {
        return;
      }
    }
  };

  const countDown = () => {
    if (time > 0) {
      setTime(time - 1);
    } else {
      setIsPlay(false);
      setTimeInterval(clearInterval(timeInterval));
      setStart("START");
    }
  };
  useEffect(() => {
    getWords();
  }, [msgs, select]);

  useEffect(() => {
    if (isPlay) {
      setTimeInterval(setInterval(countDown, 1000));
    } else {
      clearInterval(timeInterval);
    }
  }, [time, isPlay]);

  useEffect(() => {
    return () => clearInterval(timeInterval);
  }, [timeInterval]);

  return (
    <div>
      <Navbar />

      <h1 className="Typing-title">타이핑 게임</h1>
      <form>
        <select name="bible" id="bible" onChange={handleSelect}>
          <label for="cars">Choose offline:</label>
          <option>선택</option>
          <option value="mat">마태복음</option>
          <option value="mark">마가복음</option>
          <option value="luke">누가복음</option>
          <option value="john">요한복음</option>
          <option value="acts">사도행전</option>
          <option value="rom">로마서</option>
          <option value="1cor">고린도전서</option>
          <option value="2cor">고린도후서</option>
          <option value="gal">갈라디아서</option>
          <option value="eph">예배소서</option>
          <option value="phi">빌립보서</option>
          <option value="col">골로새서</option>
          <option value="1th">데살로니가전서</option>
          <option value="2th">데살로니가후서</option>
          <option value="1tim">디모데전서</option>
          <option value="2tim">디모데후서</option>
          <option value="titus">디도서</option>
          <option value="phmn">빌레몬서</option>
          <option value="heb">히브리서</option>
        </select>
      </form>

      <button className="startBtn" onClick={startBtn}>
        {start}
      </button>
      <h4 className={isPlay & !keyword ? "typing-h4" : "hide"}>
        {!keyword ? "새로 고침 후 다른 책명을 선택해주세요!" : ""}
      </h4>
      <div className="play">
        <div id="time">
          timer:<span id="timer">{time}</span>
        </div>
        <div id="score">
          score<span id="scoreNums">{score}</span>
        </div>
        <div id="show">
          <h5 id="typing-text">{keyword}</h5>
        </div>

        <div id="type-area">
          <div id="typing-form">
            <input
              type="text"
              id="input-typing"
              class="input-typing"
              placeholder="Type Here"
              onKeyDown={(e) => matchWord(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typing;
