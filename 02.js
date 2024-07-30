const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(url === API_URL) {
        resolve("성공")
      }
      else {
        reject("실패");
      }
    }, 3000);
  });
}

async function run() {
  try {
    let ifTrue = await getData(API_URL);
    console.log(ifTrue);
    let ifFalse = await getData(WRONG_URL);
  } catch (error) {
    console.log(error);
  }
}

run();