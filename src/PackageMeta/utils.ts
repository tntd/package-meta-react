const colorList = [
  ["#6F7DFC", "#4E60FF"],
  ["#72C854", "#71C651"],
  ["#59CDF3", "#3BC8F6"],
  ["#FA7079", "#FB4450"],
  ["#FCA35C", "#FE8A2E"],
  ["#945EF7", "#7D37FE"],
  ["#FF6ACF", "#FE3CC0"],
  ["#8D83F9", "#6759FD"],
  ["#1FC3A2", "#0DB7A1"],
];

export function getColors(name: string | number): string[] {
  // 将 name 转换为字符串
  const str = name.toString();

  // 计算哈希值
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // 取绝对值并取模，确保索引在 colorList 范围内
  const index = Math.abs(hash) % colorList.length;

  // 返回对应的颜色
  return colorList[index];
}
