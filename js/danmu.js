 // 从txt文件中读取弹幕数据
 function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  var data;
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        data = allText.split("\n");
      }
    }
  }
  rawFile.send(null);
  return data;
}

// 注意注意注意注意注意注意注意注意注意注意注意注意注意,使用外部txt时,必须使用服务器放置txt,不然会触发CORS
// CORS（Cross-Origin Resource Sharing）错误是指在使用XMLHttpRequest（或Fetch API）进行跨域请求时出现的错误。
// CORS错误的出现是由于浏览器的安全机制所导致的，它是为了防止恶意网站通过跨域请求来获取用户的敏感信息或进行恶意操作。
// 默认情况下，浏览器会限制跨域请求，并在请求中添加特殊的头部（例如Origin），服务器则会检查这些头部并决定是否允许该请求。

const danmuFile = "danmu.txt"; // 替换为你的txt文件路径
const danmuTextArray = readTextFile(danmuFile);

// 将txt文件中的文本转换为弹幕数据
// const danmuData = danmuTextArray.map(text => {
//   return { text: text, color: getRandomColor() };
// });

// 将txt文件中的文本转换为弹幕数据
const danmuData = [];
danmuTextArray.forEach(text => {
  if (!text.startsWith('//')) {
    danmuData.push({ text: text, color: getRandomColor() });
  }
});

// 已占用行高数组
const usedRows = [];

// 创建弹幕元素
function createDanmuElement(danmu) {
  const danmuElement = document.createElement('div');
  danmuElement.classList.add('danmu');
  danmuElement.innerText = danmu.text;
  danmuElement.style.color = danmu.color;
  danmuElement.style.fontSize = "30px";


  const now = Date.now(); // 当前时间戳
  let top = Math.floor(Math.random() * window.innerHeight);
  const threshold = 30; // 在同一行判断的阈值

  // 检查新弹幕与已存在弹幕在同一行的持续时间
  while (usedRows.some(row => {
    const rowInfo = row[row.length - 1]; // 获取同一行最后一个弹幕的信息
    const duration = now - rowInfo.timestamp; // 计算距离上一个弹幕同一行的持续时间
    return top > (rowInfo.top - threshold) && top < (rowInfo.top + threshold) && duration <= 2000;   //目前设置2000ms
  })) {
    top = Math.floor(Math.random() * window.innerHeight);
  }

  // 将新弹幕的信息添加到已占用行高数组
  const rowInfo = { top, timestamp: now };
  const row = usedRows.find(row => top > (row[row.length - 1].top - threshold) && top < (row[row.length - 1].top + threshold));
  if (row) {
    row.push(rowInfo); // 将新弹幕信息添加到同一行已存在的弹幕信息中
  } else {
    usedRows.push([rowInfo]); // 将新弹幕信息作为新行添加到已占用行高数组中
  }
  danmuElement.style.top = top + 'px'; // 随机高度
  // danmuElement.style.right = - (danmuElement.offsetWidth)  + 'px';
  // 默认弹幕出现在屏幕右边，而不是屏幕外面，需要增加此代码解决，但是这里danmuElement.offsetWidth始终等于0，已改下方去
  return danmuElement;
}

// 添加弹幕
function addDanmu() {
  const danmuContainer = document.querySelector('.danmu-lhc');
  const danmuIndex = Math.floor(Math.random() * danmuData.length); // 随机选择一个弹幕
  const danmu = danmuData[danmuIndex];
  const danmuElement = createDanmuElement(danmu);
  danmuContainer.appendChild(danmuElement); // 将弹幕元素添加到 DOM 中
  danmuElement.style.right = - (danmuElement.offsetWidth + 100) + 'px'; // 初始弹幕位置在右侧屏幕外 一个弹幕宽度+100像素
  //以屏幕右侧为基础 向右移动一个弹幕元素宽度 +100 像素
  console.log(danmuElement.offsetWidth); // 输出弹幕元素的宽度
  animateDanmu(danmuElement);
}

// 动画弹幕
function animateDanmu(danmuElement) {
  console.log(danmuElement.offsetWidth);
  // 如果弹幕最终没有移动到屏幕右边外面就消失，需要修改这里的代码      
  const maxDistance = window.innerWidth + danmuElement.offsetWidth + danmuElement.offsetWidth; // 弹幕需要移动的最大距离
  //弹幕所需要移动的距离 = 获取浏览器窗口的宽度 + 弹幕元素的宽度的2倍 + 固定像素200 (即溢出屏幕后仍移动100px才显示)
  const duration = Math.random() * 5000 + 8000; // 随机时长（6-9秒）
  danmuElement.style.transition = `transform ${duration}ms linear`;
  danmuElement.style.transform = `translateX(-${maxDistance}px)`;

  // 弹幕动画结束后从 DOM 中移除
  danmuElement.addEventListener('transitionend', function () {
    danmuElement.remove();
  });
}

// 获取随机颜色
function getRandomColor() {
  // 随机颜色数组，包含十六种颜色选项
  const colors = ['#f3ff00', '#4d2ce0', '#007700', '#0048ff', '#ff00ff', '#00ffff', '#ff6600', '#6600cc', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff0099', '#00ffcc', '#ff3300', '#9900cc'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// 每隔一定时间添加一个弹幕
setInterval(() => {
  addDanmu();
}, 500); // 每0.1-1秒添加一个弹幕效果比较好
