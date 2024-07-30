function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 Complete");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Complete");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 Complete");
    }, 3000);
  });
}

async function runTasksSequential() {
  console.time("Sequential");
  try {
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    const result3 = await task3();
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Sequential");

  // 예상되는 대략적인 시간과 그 이유 < 빈칸 1 >
  // 1번 작업이 마치고 2번 작업이 진행되고 마지막에 3번이 진행되므로
  // 1 + 2 + 3 = 6초로 예상이 된다
}

async function runTasksParallel() {
  console.time("Parallel");
  try {
    // 병렬로 promise들을 한 번에 처리하는 코드
    const results = await Promise.all([task1(), task2(), task3()]);
    results.forEach((result) => console.log(result));
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Parallel");
  // 예상되는 대략적인 시간과 그 이유 < 빈칸 3 >
  // 3개의 함수가 동시에 실행 되어서 시간이 제일 느린 작업이 마치는 시간이 결과값으로 예상되므로
  // 3초로 예상한다
}

// 함수 호출
runTasksSequential()
  .then(() => runTasksParallel());