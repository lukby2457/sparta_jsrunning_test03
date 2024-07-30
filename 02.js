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

async function run(url) {
  try {
    let ifTrue = await getData(url);
    console.log(ifTrue);
  } catch (error) {
    console.log(error);
  }
}

run(API_URL);
run(WRONG_URL);