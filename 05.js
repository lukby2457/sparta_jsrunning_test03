function taskA() {
  return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 5000);
      setTimeout(() => {
          resolve("Task A Complete");
      }, time);
  });
}

function taskB() {
  return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 5000);
      setTimeout(() => {
          resolve("Task B Complete");
      }, time);
  });
}

function taskC() {
  return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 5000);
      setTimeout(() => {
          resolve("Task C Complete");
      }, time);
  });
}

// 가장 먼저 완료된 작업을 찾아서 반환되는 값을 출력하세요.
async function getFirstTask() {
  try {
    let timeArr = [];

    const start1 = new Date();
    const result1 = await taskA();
    const end1 = new Date();
    const time1 = end1 - start1;
    timeArr.push({result: result1, time:time1});

    const start2 = new Date();
    const result2 = await taskB();
    const end2 = new Date();
    const time2 = end2 - start2;
    timeArr.push({result: result2, time:time2});

    const start3 = new Date();
    const result3 = await taskC();
    const end3 = new Date();
    const time3 = end3 - start3;
    timeArr.push({result: result3, time:time3});

    let min = Math.min(timeArr[0].time, timeArr[1].time, timeArr[2].time);

    console.log(timeArr.find(arr => arr.time === min).result);
  } catch (e) {}
}

getFirstTask();