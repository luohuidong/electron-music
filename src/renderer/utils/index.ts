/**
 * 防抖功能
 * @param {function} fn 回调函数
 * @param {number} delay 延迟的毫秒数
 */
export function debounce(fn, delay): Function {
  // 定时器
  let timer

  return function(): void {
    // 保留调用时的 this 上下文
    const context = this

    // 保留调用时传入的参数
    const args = arguments

    // 每次事件被触发时，都去清楚之前旧的定时器
    if (timer) {
      clearTimeout(timer)
    }

    // 设定新的定时器
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}
