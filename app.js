if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

점수 = 0;

function ready() {
  랜덤숫자생성();
  랜덤숫자생성();
  방향키입력();
  방향키생성();
  재시작();
  결과창모달생성();
  채색();
}

function 랜덤숫자생성() {
  const randomNum = Math.random() * 16;
  const randomNumFloor = Math.floor(randomNum);
  const 타일 = document.querySelectorAll(".tile");

  if (타일[randomNumFloor].innerHTML != "") {
    랜덤숫자생성();
  } else {
    타일[randomNumFloor].innerHTML = twoOrFour();
  }
  채색();
}

function twoOrFour() {
  const randomNum = Math.random() * 16;
  const randomNumFloor = Math.floor(randomNum);

  if (randomNumFloor == 15) {
    return "4";
  } else {
    return "2";
  }
}

function 방향키생성() {
  document.addEventListener("keydown", (e) => {
    if (
      e.keyCode == 37 ||
      e.keyCode == 38 ||
      e.keyCode == 39 ||
      e.keyCode == 40
    ) {
      랜덤숫자생성();
      승패판정();
    }
  });
}

function 승패판정() {
  const 타일 = document.querySelectorAll(".tile");
  let result = 0;

  for (let i = 0; i < 타일.length; i++) {
    if (타일[i].innerHTML != "") {
      result++;
    }

    if (타일[i].innerHTML == "2048") {
      alert("you win!");
    }
  }

  if (result == 16) {
    결과창모달();
  }
}

function 방향키입력() {
  document.addEventListener("keydown", (e) => {
    const 타일 = document.querySelectorAll(".tile");
    let result = [];

    let 첫번째열 = [];
    let 두번째열 = [];
    let 세번째열 = [];
    let 네번째열 = [];

    let 첫번째행 = [];
    let 두번째행 = [];
    let 세번째행 = [];
    let 네번째행 = [];

    타일.forEach((el) => {
      if (el.innerHTML == "") {
        result.push(0);
      } else {
        result.push(parseInt(el.innerHTML));
      }
    });

    for (let i = 0; i < result.length; i++) {
      if (i > 11) {
        네번째열.push(result[i]);
      } else if (i > 7) {
        세번째열.push(result[i]);
      } else if (i > 3) {
        두번째열.push(result[i]);
      } else {
        첫번째열.push(result[i]);
      }
    }

    for (let i = 0; i < result.length; i++) {
      if (i % 4 == 3) {
        네번째행.push(result[i]);
      } else if (i % 4 == 2) {
        세번째행.push(result[i]);
      } else if (i % 4 == 1) {
        두번째행.push(result[i]);
      } else {
        첫번째행.push(result[i]);
      }
    }

    // 오른쪽 방향키
    if (e.keyCode == 39) {
      첫번째열 = moveZeroForRight(첫번째열);
      두번째열 = moveZeroForRight(두번째열);
      세번째열 = moveZeroForRight(세번째열);
      네번째열 = moveZeroForRight(네번째열);

      for (let i = 0; i < 4; i++) {
        if (첫번째열[i] == 첫번째열[i + 1]) {
          첫번째열[i] = 첫번째열[i] * 2;
          점수 += 첫번째열[i];
          첫번째열[i + 1] = 0;
        }
        if (두번째열[i] == 두번째열[i + 1]) {
          두번째열[i] = 두번째열[i] * 2;
          점수 += 두번째열[i];
          두번째열[i + 1] = 0;
        }
        if (세번째열[i] == 세번째열[i + 1]) {
          세번째열[i] = 세번째열[i] * 2;
          점수 += 세번째열[i];
          세번째열[i + 1] = 0;
        }
        if (네번째열[i] == 네번째열[i + 1]) {
          네번째열[i] = 네번째열[i] * 2;
          점수 += 네번째열[i];
          네번째열[i + 1] = 0;
        }
      }

      첫번째열 = moveZeroForRight(첫번째열);
      두번째열 = moveZeroForRight(두번째열);
      세번째열 = moveZeroForRight(세번째열);
      네번째열 = moveZeroForRight(네번째열);

      result = 첫번째열;
      result = result.concat(두번째열);
      result = result.concat(세번째열);
      result = result.concat(네번째열);

      for (let i = 0; i < 타일.length; i++) {
        타일[i].innerHTML = result[i];
        if (타일[i].innerHTML == 0) {
          타일[i].innerHTML = "";
        }
      }
    }

    // 왼쪽 방향키
    if (e.keyCode == 37) {
      첫번째열 = moveZeroForLeft(첫번째열);
      두번째열 = moveZeroForLeft(두번째열);
      세번째열 = moveZeroForLeft(세번째열);
      네번째열 = moveZeroForLeft(네번째열);

      for (let i = 0; i < 4; i++) {
        if (첫번째열[i] == 첫번째열[i + 1]) {
          첫번째열[i] = 첫번째열[i] * 2;
          점수 += 첫번째열[i];
          첫번째열[i + 1] = 0;
        }
        if (두번째열[i] == 두번째열[i + 1]) {
          두번째열[i] = 두번째열[i] * 2;
          점수 += 두번째열[i];
          두번째열[i + 1] = 0;
        }
        if (세번째열[i] == 세번째열[i + 1]) {
          세번째열[i] = 세번째열[i] * 2;
          점수 += 세번째열[i];
          세번째열[i + 1] = 0;
        }
        if (네번째열[i] == 네번째열[i + 1]) {
          네번째열[i] = 네번째열[i] * 2;
          점수 += 네번째열[i];
          네번째열[i + 1] = 0;
        }
      }

      첫번째열 = moveZeroForLeft(첫번째열);
      두번째열 = moveZeroForLeft(두번째열);
      세번째열 = moveZeroForLeft(세번째열);
      네번째열 = moveZeroForLeft(네번째열);

      result = 첫번째열;
      result = result.concat(두번째열);
      result = result.concat(세번째열);
      result = result.concat(네번째열);

      for (let i = 0; i < 타일.length; i++) {
        타일[i].innerHTML = result[i];
        if (타일[i].innerHTML == 0) {
          타일[i].innerHTML = "";
        }
      }
    }

    // 위쪽 방향키
    if (e.keyCode == 38) {
      첫번째행 = moveZeroForLeft(첫번째행);
      두번째행 = moveZeroForLeft(두번째행);
      세번째행 = moveZeroForLeft(세번째행);
      네번째행 = moveZeroForLeft(네번째행);

      for (let i = 0; i < 4; i++) {
        if (첫번째행[i] == 첫번째행[i + 1]) {
          첫번째행[i] = 첫번째행[i] * 2;
          점수 += 첫번째행[i];
          첫번째행[i + 1] = 0;
        }
        if (두번째행[i] == 두번째행[i + 1]) {
          두번째행[i] = 두번째행[i] * 2;
          점수 += 두번째행[i];
          두번째행[i + 1] = 0;
        }
        if (세번째행[i] == 세번째행[i + 1]) {
          세번째행[i] = 세번째행[i] * 2;
          점수 += 세번째행[i];
          세번째행[i + 1] = 0;
        }
        if (네번째행[i] == 네번째행[i + 1]) {
          네번째행[i] = 네번째행[i] * 2;
          점수 += 네번째행[i];
          네번째행[i + 1] = 0;
        }
      }

      첫번째행 = moveZeroForLeft(첫번째행);
      두번째행 = moveZeroForLeft(두번째행);
      세번째행 = moveZeroForLeft(세번째행);
      네번째행 = moveZeroForLeft(네번째행);

      for (let j = 0; j < 4; j++) {
        result[j * 4] = 첫번째행[j];
        result[j * 4 + 1] = 두번째행[j];
        result[j * 4 + 2] = 세번째행[j];
        result[j * 4 + 3] = 네번째행[j];
      }

      for (let i = 0; i < 타일.length; i++) {
        타일[i].innerHTML = result[i];
        if (타일[i].innerHTML == 0) {
          타일[i].innerHTML = "";
        }
      }
    }

    // 아래쪽 방향키
    if (e.keyCode == 40) {
      첫번째행 = moveZeroForRight(첫번째행);
      두번째행 = moveZeroForRight(두번째행);
      세번째행 = moveZeroForRight(세번째행);
      네번째행 = moveZeroForRight(네번째행);

      for (let i = 0; i < 4; i++) {
        if (첫번째행[i] == 첫번째행[i + 1]) {
          첫번째행[i] = 첫번째행[i] * 2;
          점수 += 첫번째행[i];
          첫번째행[i + 1] = 0;
        }
        if (두번째행[i] == 두번째행[i + 1]) {
          두번째행[i] = 두번째행[i] * 2;
          점수 += 두번째행[i];
          두번째행[i + 1] = 0;
        }
        if (세번째행[i] == 세번째행[i + 1]) {
          세번째행[i] = 세번째행[i] * 2;
          점수 += 세번째행[i];
          세번째행[i + 1] = 0;
        }
        if (네번째행[i] == 네번째행[i + 1]) {
          네번째행[i] = 네번째행[i] * 2;
          점수 += 네번째행[i];
          네번째행[i + 1] = 0;
        }
      }

      첫번째행 = moveZeroForRight(첫번째행);
      두번째행 = moveZeroForRight(두번째행);
      세번째행 = moveZeroForRight(세번째행);
      네번째행 = moveZeroForRight(네번째행);

      for (let j = 0; j < 4; j++) {
        result[j * 4] = 첫번째행[j];
        result[j * 4 + 1] = 두번째행[j];
        result[j * 4 + 2] = 세번째행[j];
        result[j * 4 + 3] = 네번째행[j];
      }

      for (let i = 0; i < 타일.length; i++) {
        타일[i].innerHTML = result[i];
        if (타일[i].innerHTML == 0) {
          타일[i].innerHTML = "";
        }
      }
    }
    const 점수판 = document.querySelector(".score");

    점수판.innerHTML = `SCORE : ${점수}`;
    채색();
  });
}

const moveZeroForLeft = function (arr) {
  let crrIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[crrIdx] = arr[i];
      crrIdx++;
    }
  }

  for (let z = crrIdx; z < arr.length; z++) {
    arr[z] = 0;
  }

  return arr;
};

const mzArr = [5, 0, 7, 6, 0, 3];

const moveZeroForRight = function (arr) {
  let crrIdx = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != 0) {
      arr[crrIdx] = arr[i];
      crrIdx--;
    }
  }

  for (let z = crrIdx; z >= 0; z--) {
    arr[z] = 0;
  }

  return arr;
};

function 재시작() {
  const 타일 = document.querySelectorAll(".tile");
  const 재시작버튼 = document.querySelector(".retry");
  const 점수판 = document.querySelector(".score");

  재시작버튼.addEventListener("click", () => {
    점수 = 0;

    점수판.innerHTML = `SCORE : ${점수}`;
    타일.forEach((el) => {
      el.innerHTML = "";
    });
    랜덤숫자생성();
    랜덤숫자생성();
    채색();
  });
}

// 결과창모달생성
function 결과창모달생성() {
  var 결과창 = `<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center" id="exampleModalLabel">
          2048 GAME
        </h5>
      </div>
      <div class="modal-body result-modal"></div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary mdclose"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>`;

  document
    .querySelector(".main-container")
    .insertAdjacentHTML("beforeend", 결과창);
}

// 결과창모달
function 결과창모달() {
  var 결과 = document.querySelector(".result-modal");
  var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
    keyboard: false,
  });

  const 모달내용 = `<div> 더이상 생성될 공간이 없습니다!</div>
  <div>아쉽게도 실패하셨습니다.</div>
  <div>아래에 'RETRY버튼'을 클릭하여 재도전하세요!</div>
  <br>
  <div>결과창을 닫으려면 <img class="esc-img" src="esc_img.png"/>를 누르세요!</div>`;
  const 모달닫기버튼 = document.querySelector(".mdclose");

  모달닫기버튼.addEventListener("click", () => {
    myModal.hide();
  });
  결과.innerHTML = 모달내용;
  myModal.show();
  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
      myModal.hide();
    }
  });
}

function 채색() {
  const 타일 = document.querySelectorAll(".tile");

  타일.forEach((el) => {
    let 타일내용 = el.innerHTML;

    if (!타일내용) {
      el.style.backgroundColor = "rgb(219, 219, 219)";
    } else if (타일내용 == 2) {
      el.style.backgroundColor = `hsl(20, 40%, 80%)`;
    } else if (타일내용 == 4) {
      el.style.backgroundColor = `hsl(40, 45%, 75%)`;
    } else if (타일내용 == 8) {
      el.style.backgroundColor = `hsl(60, 50%, 70%)`;
    } else if (타일내용 == 16) {
      el.style.backgroundColor = `hsl(80, 55%, 65%)`;
    } else if (타일내용 == 32) {
      el.style.backgroundColor = `hsl(100, 60%, 60%)`;
    } else if (타일내용 == 64) {
      el.style.backgroundColor = `hsl(30, 65%, 55%)`;
    } else if (타일내용 == 128) {
      el.style.backgroundColor = `hsl(50, 70%, 50%)`;
    } else if (타일내용 == 256) {
      el.style.backgroundColor = `hsl(70, 75%, 45%)`;
    } else if (타일내용 == 512) {
      el.style.backgroundColor = `hsl(90, 80%, 40%)`;
    } else if (타일내용 == 1024) {
      el.style.backgroundColor = `hsl(20, 85%, 35%)`;
    } else if (타일내용 == 2048) {
      el.style.backgroundColor = `hsl(40, 90%, 30%)`;
    }
  });
}

// 랜덤하게 2 또는 4라는 숫자가 생성되면서 시작된다. O
// 방향키를 누르면 랜덤하게 2가 생성되고 O
// 그 방향키로 모든 숫자상자들이 이동한다. O
// 이때 이동은 애니메이션효과를 넣으면 좋겠음.
// 그렇게 하려면 단순 자바스크립트로만 하는게 아니라
// css의 힘을 많이 빌려야할것같다.

// 만약 위치가 충돌하면 순서대로 그 자리에 멈춘다. O
// 만약 겹치는 숫자가 같다면 둘이 합쳐진다. O
// 그렇게 해서 2048이 나오면 승리 O
// 더이상 새로운 블록이 생겨날 자리가 없으면 패배 O
// 점수는 합쳐진 누적 숫자. O
