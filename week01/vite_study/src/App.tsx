import { useState } from "react";
import "./App.css";

function App() {
  // 定义状态来保存用户输入和计算结果
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  // 计算斐波那契数列第 n 项的函数
  const Fibonacci = (n: number): bigint => {
    if (n <= 0) return BigInt(0);
    if (n === 1) return BigInt(1);
    let a = BigInt(0),
      b = BigInt(1),
      fib = BigInt(1);
    for (let i = 2; i <= n; i++) {
      fib = a + b;
      a = b;
      b = fib;
    }
    return fib;
  };

  // 处理用户输入的变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const n = parseInt(number, 10);
    if (!isNaN(n)) {
      const fibResult = Fibonacci(n);
      console.log(`斐波那契数列第 ${n} 项是: ${fibResult}`);
      setResult(String(fibResult));
    } else {
      setResult("请输入有效的数字");
    }
  };

  return (
    <div>
      <h1>斐波那契数列计算器</h1>
      <form onSubmit={handleSubmit}>
        <label>
          输入数字 n:
          <input type="text" value={number} onChange={handleInputChange} />
        </label>
        <button type="submit">计算</button>
      </form>
      {result !== null && (
        <div>
          <h2>结果: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
