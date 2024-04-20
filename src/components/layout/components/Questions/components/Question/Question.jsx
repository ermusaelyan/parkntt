import React, { useState } from "react";
import * as S from "./Question.styled";
import {
  PlusIcon,
  MinusIcon,
} from "./../../../../../../assets/icons/iconComponents";

const Question = () => {
  const [openAnswer, setOpenAnswer] = useState(false);
  return (
    <S.Wrapper isOpen={openAnswer}>
      <S.Head>
        <S.Title>How do I order a QR code?</S.Title>
        <S.OpenAnswer>
          <S.OpenAnswerButton
            onClick={() => setOpenAnswer((prevState) => !prevState)}
          >
            {openAnswer ? <MinusIcon /> : <PlusIcon />}
          </S.OpenAnswerButton>
        </S.OpenAnswer>
      </S.Head>
      {openAnswer ? (
        <S.Body>
          Upon downloading the Parkntt, you can register and easily order a QR
          code within the application. We will deliver a printed QR code to
          stick to your vehicle.
        </S.Body>
      ) : null}
    </S.Wrapper>
  );
};

export default Question;
