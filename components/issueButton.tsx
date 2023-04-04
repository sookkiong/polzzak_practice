import { useState } from "react";

interface IssueButtonProps {
  type: "parent" | "child";
}
// 쿠폰 발급 버튼 공통 레이아웃
export default function IssueButton({ type }: IssueButtonProps) {
  const [isIssue, setIsIssue] = useState(false); // 쿠폰 발행 여부
  const [collectAll, setCollectAll] = useState(false); // 버튼 disabled 여부

  const couponContent = {
    parent: "쿠폰 발급하기",
    child: "쿠폰 받기",
  };
  const couponExplainOff = {
    parent: "도장을 다 모으면 쿠폰을 발급해줄 수 있어요",
    child: "도장을 다 모으면 부모님이 쿠폰을 발급해주실 거에요",
  };
  const couponExplainOn = {
    parent: "아이가 도장을 다 모았어요 쿠폰을 발급해주세요!",
    child: "수고했어요! 부모님이 쿠폰을 선물했어요! 🥳",
  };
  const completeIssue = {
    parent: "쿠폰 발급 완료",
    child: "쿠폰 받기 완료",
  };
  const completeIssueExplain = "내 쿠폰함에서 확인하세요!";

  return (
    <>
      <button id={type} disabled={collectAll} onClick={() => setIsIssue(true)}>
        {!isIssue ? couponContent[type] : completeIssue[type]}
        <span style={{ display: "block", fontSize: "15px", fontWeight: "500" }}>
          {!isIssue
            ? collectAll
              ? couponExplainOff[type]
              : couponExplainOn[type]
            : completeIssueExplain}
        </span>
      </button>
      <style jsx>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          button {
            display: block;
            padding: 20px;
            border-radius: 15px;
            margin-top: 30px;
            text-align: center;
            color: #fff;
            font-weight: 900;
            font-size: 24px;

            background: linear-gradient(
              -45deg,
              #ee7752,
              #e73c7e,
              #23a6d5,
              #23d5ab
            );
            background-size: 300% 300%;
            animation: gradient 3s ease infinite;
          }
          button:disabled {
            background: #ccc;
            color: #fff;
            cursor: default;
          }
        `}
      </style>
    </>
  );
}
